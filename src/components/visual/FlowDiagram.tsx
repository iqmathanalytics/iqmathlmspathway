"use client";

import type { DiagramData } from "@/lib/types";
import { ArrowRight } from "lucide-react";

interface FlowDiagramProps {
  diagram: DiagramData;
}

export function FlowDiagram({ diagram }: FlowDiagramProps) {
  const { nodes, arrows, title, variant = "flow" } = diagram;

  if (variant === "compare") {
    return (
      <figure className="my-6 overflow-hidden rounded-xl border border-gray-200 bg-gradient-to-br from-slate-50 to-white p-6">
        <figcaption className="mb-4 text-center text-sm font-semibold text-gray-800">
          {title}
        </figcaption>
        <div className="grid gap-4 sm:grid-cols-2">
          {nodes.map((node) => (
            <div
              key={node.id}
              className="rounded-lg border-2 border-dashed border-brand-300 bg-white p-4 text-center shadow-sm"
            >
              <p className="font-semibold text-gray-900">{node.label}</p>
              {node.sublabel && (
                <p className="mt-1 text-sm text-gray-500">{node.sublabel}</p>
              )}
            </div>
          ))}
        </div>
      </figure>
    );
  }

  if (variant === "stack") {
    return (
      <figure className="my-6 overflow-hidden rounded-xl border border-gray-200 bg-slate-50 p-6">
        <figcaption className="mb-4 text-center text-sm font-semibold text-gray-800">
          {title}
        </figcaption>
        <div className="mx-auto flex max-w-xs flex-col gap-2">
          {nodes.map((node, i) => (
            <div key={node.id}>
              <div className="rounded-lg border border-python-blue/30 bg-white px-4 py-3 text-center shadow-sm">
                <p className="font-medium text-gray-900">{node.label}</p>
                {node.sublabel && (
                  <p className="text-xs text-gray-500">{node.sublabel}</p>
                )}
              </div>
              {i < nodes.length - 1 && (
                <div className="flex justify-center py-1 text-gray-400">↓</div>
              )}
            </div>
          ))}
        </div>
      </figure>
    );
  }

  const orderedIds =
    arrows && arrows.length > 0
      ? [arrows[0].from, ...arrows.map((a) => a.to)]
      : nodes.map((n) => n.id);
  const uniqueIds = [...new Set(orderedIds)];
  const orderedNodes = uniqueIds
    .map((id) => nodes.find((n) => n.id === id))
    .filter(Boolean) as typeof nodes;

  return (
    <figure className="my-6 overflow-x-auto rounded-xl border border-gray-200 bg-gradient-to-r from-brand-50/80 to-blue-50/50 p-6">
      <figcaption className="mb-4 text-center text-sm font-semibold text-gray-800">
        {title}
      </figcaption>
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        {orderedNodes.map((node, i) => (
          <div key={node.id} className="flex items-center gap-2 sm:gap-3">
            <div className="min-w-[100px] rounded-lg border border-brand-200 bg-white px-3 py-2 text-center shadow-sm sm:min-w-[120px] sm:px-4 sm:py-3">
              <p className="text-sm font-semibold text-gray-900">{node.label}</p>
              {node.sublabel && (
                <p className="mt-0.5 text-xs text-gray-500">{node.sublabel}</p>
              )}
            </div>
            {i < orderedNodes.length - 1 && (
              <ArrowRight className="h-5 w-5 shrink-0 text-brand-500" aria-hidden />
            )}
          </div>
        ))}
      </div>
    </figure>
  );
}
