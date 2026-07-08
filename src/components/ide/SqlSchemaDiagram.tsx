"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import clsx from "clsx";
import type { SqlSchemaModel, SchemaTable } from "@/data/sql-schema-models";

export const TABLE_WIDTH = 232;
export const HEADER_HEIGHT = 36;
export const ROW_HEIGHT = 24;

function tableHeight(table: SchemaTable): number {
  return HEADER_HEIGHT + table.columns.length * ROW_HEIGHT;
}

function relationshipPath(
  model: SqlSchemaModel,
  fromTable: string,
  fromColumn: string,
  toTable: string,
  toColumn: string
): string | null {
  const source = model.tables.find((t) => t.name === fromTable);
  const target = model.tables.find((t) => t.name === toTable);
  if (!source || !target) return null;

  const fromIndex = source.columns.findIndex((c) => c.name === fromColumn);
  const toIndex = target.columns.findIndex((c) => c.name === toColumn);
  if (fromIndex < 0 || toIndex < 0) return null;

  const fromY = source.y + HEADER_HEIGHT + fromIndex * ROW_HEIGHT + ROW_HEIGHT / 2;
  const toY = target.y + HEADER_HEIGHT + toIndex * ROW_HEIGHT + ROW_HEIGHT / 2;
  const sourceBottom = source.y + tableHeight(source);
  const targetBottom = target.y + tableHeight(target);
  const fromCenterX = source.x + TABLE_WIDTH / 2;
  const toCenterX = target.x + TABLE_WIDTH / 2;

  if (fromTable === toTable) {
    const loopX = source.x + TABLE_WIDTH + 56;
    return `M ${source.x + TABLE_WIDTH} ${fromY} C ${loopX} ${fromY}, ${loopX} ${toY}, ${source.x + TABLE_WIDTH} ${toY}`;
  }

  const dx = toCenterX - fromCenterX;
  const dy = (target.y + tableHeight(target) / 2) - (source.y + tableHeight(source) / 2);

  let from: { x: number; y: number };
  let to: { x: number; y: number };

  if (Math.abs(dx) >= Math.abs(dy)) {
    if (dx >= 0) {
      from = { x: source.x + TABLE_WIDTH, y: fromY };
      to = { x: target.x, y: toY };
    } else {
      from = { x: source.x, y: fromY };
      to = { x: target.x + TABLE_WIDTH, y: toY };
    }
  } else if (dy >= 0) {
    from = { x: fromCenterX, y: sourceBottom };
    to = { x: toCenterX, y: target.y };
  } else {
    from = { x: fromCenterX, y: source.y };
    to = { x: toCenterX, y: targetBottom };
  }

  const distance = Math.hypot(to.x - from.x, to.y - from.y);
  const curve = Math.min(110, Math.max(32, distance * 0.3));

  if (Math.abs(dx) >= Math.abs(dy)) {
    const bend = dx >= 0 ? curve : -curve;
    return `M ${from.x} ${from.y} C ${from.x + bend} ${from.y}, ${to.x - bend} ${to.y}, ${to.x} ${to.y}`;
  }

  const bend = dy >= 0 ? curve : -curve;
  return `M ${from.x} ${from.y} C ${from.x} ${from.y + bend}, ${to.x} ${to.y - bend}, ${to.x} ${to.y}`;
}

function SchemaTableCard({ table }: { table: SchemaTable }) {
  return (
    <div
      className="absolute overflow-hidden rounded-lg border border-slate-300 bg-white shadow-md select-none"
      style={{
        left: table.x,
        top: table.y,
        width: TABLE_WIDTH,
      }}
    >
      <div className="border-b border-slate-300 bg-slate-800 px-3 py-2">
        <p className="truncate font-mono text-sm font-semibold text-white">{table.name}</p>
      </div>
      <ul className="divide-y divide-slate-100">
        {table.columns.map((column) => (
          <li
            key={column.name}
            className={clsx(
              "flex items-center gap-1.5 px-2 py-1 font-mono text-[11px] leading-tight",
              column.primaryKey && "bg-amber-50 text-amber-950",
              column.foreignKey && !column.primaryKey && "bg-sky-50 text-sky-950",
              !column.primaryKey && !column.foreignKey && "text-slate-700"
            )}
          >
            {column.primaryKey && (
              <span className="shrink-0 rounded bg-amber-200 px-1 text-[9px] font-bold text-amber-900">
                PK
              </span>
            )}
            {column.foreignKey && (
              <span className="shrink-0 rounded bg-sky-200 px-1 text-[9px] font-bold text-sky-900">
                FK
              </span>
            )}
            <span className="min-w-0 truncate">
              {column.name}
              <span className="text-slate-400"> · {column.type}</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

interface SqlSchemaDiagramProps {
  model: SqlSchemaModel;
}

export function SqlSchemaDiagram({ model }: SqlSchemaDiagramProps) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.85);
  const [pan, setPan] = useState({ x: 24, y: 24 });
  const [dragging, setDragging] = useState(false);
  const draggingRef = useRef(false);
  const dragOrigin = useRef({ x: 0, y: 0, panX: 0, panY: 0 });
  const pinchRef = useRef<{
    distance: number;
    scale: number;
    centerX: number;
    centerY: number;
    panX: number;
    panY: number;
  } | null>(null);
  const scaleRef = useRef(scale);
  const panRef = useRef(pan);

  useEffect(() => {
    scaleRef.current = scale;
  }, [scale]);

  useEffect(() => {
    panRef.current = pan;
  }, [pan]);

  useEffect(() => {
    draggingRef.current = dragging;
  }, [dragging]);

  const fitToView = useCallback(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    const padding = 40;
    const scaleX = (viewport.clientWidth - padding) / model.canvasWidth;
    const scaleY = (viewport.clientHeight - padding) / model.canvasHeight;
    const nextScale = Math.min(1.05, Math.max(0.28, Math.min(scaleX, scaleY)));
    const contentW = model.canvasWidth * nextScale;
    const contentH = model.canvasHeight * nextScale;
    setScale(nextScale);
    setPan({
      x: Math.max(12, (viewport.clientWidth - contentW) / 2),
      y: Math.max(12, (viewport.clientHeight - contentH) / 2),
    });
  }, [model.canvasWidth, model.canvasHeight]);

  useEffect(() => {
    fitToView();
  }, [fitToView, model.databaseId]);

  // Native listeners so preventDefault works for pinch / wheel over the modal canvas.
  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const getTouchDistance = (touches: TouchList) => {
      const dx = touches[0].clientX - touches[1].clientX;
      const dy = touches[0].clientY - touches[1].clientY;
      return Math.hypot(dx, dy);
    };

    const getTouchCenter = (touches: TouchList) => {
      const rect = viewport.getBoundingClientRect();
      return {
        x: (touches[0].clientX + touches[1].clientX) / 2 - rect.left,
        y: (touches[0].clientY + touches[1].clientY) / 2 - rect.top,
      };
    };

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const rect = viewport.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;
      const zoomFactor = e.deltaY < 0 ? 1.08 : 0.92;
      const prevScale = scaleRef.current;
      const nextScale = Math.min(2.5, Math.max(0.25, prevScale * zoomFactor));
      const ratio = nextScale / prevScale;
      const prevPan = panRef.current;
      const nextPan = {
        x: mx - (mx - prevPan.x) * ratio,
        y: my - (my - prevPan.y) * ratio,
      };
      setScale(nextScale);
      setPan(nextPan);
    };

    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 2) {
        e.preventDefault();
        setDragging(false);
        const center = getTouchCenter(e.touches);
        pinchRef.current = {
          distance: getTouchDistance(e.touches),
          scale: scaleRef.current,
          centerX: center.x,
          centerY: center.y,
          panX: panRef.current.x,
          panY: panRef.current.y,
        };
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 2 && pinchRef.current) {
        e.preventDefault();
        const distance = getTouchDistance(e.touches);
        const ratio = distance / pinchRef.current.distance;
        const nextScale = Math.min(2.5, Math.max(0.25, pinchRef.current.scale * ratio));
        const scaleRatio = nextScale / pinchRef.current.scale;
        const center = getTouchCenter(e.touches);
        setScale(nextScale);
        setPan({
          x: center.x - (pinchRef.current.centerX - pinchRef.current.panX) * scaleRatio,
          y: center.y - (pinchRef.current.centerY - pinchRef.current.panY) * scaleRatio,
        });
      } else if (e.touches.length === 1 && draggingRef.current) {
        e.preventDefault();
      }
    };

    const onTouchEnd = () => {
      pinchRef.current = null;
    };

    viewport.addEventListener("wheel", onWheel, { passive: false });
    viewport.addEventListener("touchstart", onTouchStart, { passive: false });
    viewport.addEventListener("touchmove", onTouchMove, { passive: false });
    viewport.addEventListener("touchend", onTouchEnd);
    viewport.addEventListener("touchcancel", onTouchEnd);

    return () => {
      viewport.removeEventListener("wheel", onWheel);
      viewport.removeEventListener("touchstart", onTouchStart);
      viewport.removeEventListener("touchmove", onTouchMove);
      viewport.removeEventListener("touchend", onTouchEnd);
      viewport.removeEventListener("touchcancel", onTouchEnd);
    };
  }, []);

  const onPointerDown = useCallback(
    (e: React.PointerEvent) => {
      if (e.button !== 0) return;
      if (e.pointerType === "touch" && pinchRef.current) return;
      const target = e.target as HTMLElement;
      if (target.closest("button")) return;

      e.preventDefault();
      window.getSelection()?.removeAllRanges();
      viewportRef.current?.setPointerCapture(e.pointerId);
      setDragging(true);
      dragOrigin.current = {
        x: e.clientX,
        y: e.clientY,
        panX: panRef.current.x,
        panY: panRef.current.y,
      };
    },
    []
  );

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (!dragging) return;
    e.preventDefault();
    setPan({
      x: dragOrigin.current.panX + (e.clientX - dragOrigin.current.x),
      y: dragOrigin.current.panY + (e.clientY - dragOrigin.current.y),
    });
  }, [dragging]);

  const onPointerUp = useCallback((e: React.PointerEvent) => {
    setDragging(false);
    try {
      viewportRef.current?.releasePointerCapture(e.pointerId);
    } catch {
      /* already released */
    }
  }, []);

  const zoomBy = (factor: number) => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    const mx = viewport.clientWidth / 2;
    const my = viewport.clientHeight / 2;
    const prevScale = scaleRef.current;
    const nextScale = Math.min(2.5, Math.max(0.25, prevScale * factor));
    const ratio = nextScale / prevScale;
    const prevPan = panRef.current;
    setScale(nextScale);
    setPan({
      x: mx - (mx - prevPan.x) * ratio,
      y: my - (my - prevPan.y) * ratio,
    });
  };

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gray-100 bg-gray-50 px-4 py-2">
        <p className="text-xs text-gray-600">
          <span className="inline-flex items-center gap-3">
            <span>
              <span className="mr-1 rounded bg-amber-200 px-1 text-[10px] font-bold text-amber-900">
                PK
              </span>
              Primary key
            </span>
            <span>
              <span className="mr-1 rounded bg-sky-200 px-1 text-[10px] font-bold text-sky-900">
                FK
              </span>
              Foreign key
            </span>
          </span>
          {" · "}
          Drag to pan · Pinch / scroll to zoom
        </p>
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => zoomBy(0.9)}
            className="rounded-md border border-gray-200 bg-white px-2.5 py-1 text-sm font-medium text-gray-700 hover:bg-gray-100"
            aria-label="Zoom out"
          >
            −
          </button>
          <span className="min-w-[3.5rem] text-center text-xs font-medium text-gray-600">
            {Math.round(scale * 100)}%
          </span>
          <button
            type="button"
            onClick={() => zoomBy(1.1)}
            className="rounded-md border border-gray-200 bg-white px-2.5 py-1 text-sm font-medium text-gray-700 hover:bg-gray-100"
            aria-label="Zoom in"
          >
            +
          </button>
          <button
            type="button"
            onClick={fitToView}
            className="rounded-md border border-gray-200 bg-white px-2.5 py-1 text-xs font-medium text-gray-700 hover:bg-gray-100"
          >
            Fit view
          </button>
        </div>
      </div>

      <div
        ref={viewportRef}
        className={clsx(
          "relative min-h-[min(58vh,560px)] flex-1 overflow-hidden bg-[radial-gradient(circle_at_1px_1px,#e2e8f0_1px,transparent_0)] [background-size:20px_20px] touch-none select-none",
          dragging ? "cursor-grabbing" : "cursor-grab"
        )}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onPointerLeave={onPointerUp}
      >
        <div
          className="absolute left-0 top-0 origin-top-left select-none"
          style={{
            width: model.canvasWidth,
            height: model.canvasHeight,
            transform: `translate(${pan.x}px, ${pan.y}px) scale(${scale})`,
            userSelect: "none",
            WebkitUserSelect: "none",
          }}
        >
          <svg
            className="pointer-events-none absolute inset-0"
            width={model.canvasWidth}
            height={model.canvasHeight}
            aria-hidden
          >
            <defs>
              <marker
                id={`schema-arrow-${model.databaseId}`}
                markerWidth="8"
                markerHeight="8"
                refX="7"
                refY="4"
                orient="auto"
              >
                <path d="M0,0 L8,4 L0,8 Z" fill="#64748b" />
              </marker>
            </defs>
            {model.relationships.map((rel) => {
              const path = relationshipPath(
                model,
                rel.fromTable,
                rel.fromColumn,
                rel.toTable,
                rel.toColumn
              );
              if (!path) return null;
              return (
                <path
                  key={`${rel.fromTable}.${rel.fromColumn}-${rel.toTable}.${rel.toColumn}`}
                  d={path}
                  fill="none"
                  stroke="#64748b"
                  strokeWidth={1.75}
                  markerEnd={`url(#schema-arrow-${model.databaseId})`}
                />
              );
            })}
          </svg>

          {model.tables.map((table) => (
            <SchemaTableCard key={table.name} table={table} />
          ))}
        </div>
      </div>
    </div>
  );
}
