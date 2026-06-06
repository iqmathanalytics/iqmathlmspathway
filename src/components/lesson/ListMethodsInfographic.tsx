"use client";

import {
  ArrowRight,
  Link2,
  MapPin,
  Play,
  Plus,
  RotateCcw,
  Ruler,
  Search,
  Target,
  Trash2,
} from "lucide-react";
import { useLessonPractice } from "@/components/lesson/LessonPracticeContext";

type LabelVariant =
  | "purple"
  | "green"
  | "blue"
  | "amber"
  | "teal"
  | "red"
  | "orange";

function SectionLabel({
  children,
  variant,
}: {
  children: React.ReactNode;
  variant: LabelVariant;
}) {
  const styles: Record<LabelVariant, string> = {
    purple: "bg-purple-100 text-purple-800",
    green: "bg-green-100 text-green-800",
    blue: "bg-blue-100 text-blue-800",
    amber: "bg-amber-100 text-amber-900",
    teal: "bg-teal-100 text-teal-800",
    red: "bg-red-100 text-red-800",
    orange: "bg-orange-100 text-orange-900",
  };
  return (
    <span
      className={`mb-2.5 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide ${styles[variant]}`}
    >
      {children}
    </span>
  );
}

function CodeExercisePanel({
  practiceIndex,
  filename,
  children,
}: {
  practiceIndex: number;
  filename: string;
  children: React.ReactNode;
}) {
  const practice = useLessonPractice();
  const isActive = practice?.activeIndex === practiceIndex;
  const hasNext =
    practice != null && practiceIndex < practice.total - 1;

  return (
    <div
      className={`overflow-hidden rounded-xl border border-black/15 bg-white/60 transition-colors ${
        isActive ? "ring-2 ring-brand-400 ring-offset-1" : ""
      }`}
    >
      <div className="flex items-center gap-1.5 border-b border-black/10 bg-black/[0.03] px-3 py-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="font-mono text-[11px] text-gray-500">{filename}</span>
        <div className="ml-auto flex items-center gap-1">
          <button
            type="button"
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => practice?.selectPractice(practiceIndex)}
            title={isActive ? "Loaded in IDE" : "Load in IDE"}
            className={`inline-flex items-center gap-0.5 rounded px-1.5 py-0.5 text-[10px] font-medium transition-colors ${
              isActive
                ? "bg-brand-600 text-white"
                : "border border-brand-200 bg-white text-brand-700 hover:bg-brand-50"
            }`}
          >
            <Play className="h-2.5 w-2.5" />
            IDE
          </button>
          {isActive && hasNext && (
            <button
              type="button"
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => practice?.nextPractice()}
              title="Next exercise"
              className="inline-flex items-center gap-0.5 rounded border border-gray-200 bg-white px-1.5 py-0.5 text-[10px] font-medium text-gray-600 transition hover:bg-gray-50"
            >
              Next
              <ArrowRight className="h-2.5 w-2.5" />
            </button>
          )}
        </div>
      </div>
      <pre className="overflow-x-auto bg-transparent px-4 py-3.5 font-mono text-[13.5px] leading-loose">
        {children}
      </pre>
    </div>
  );
}

function CodeWindow({
  filename,
  children,
}: {
  filename: string;
  children: React.ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-black/15 bg-white/60">
      <div className="flex items-center gap-1.5 border-b border-black/10 bg-black/[0.03] px-3 py-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-auto font-mono text-[11px] text-gray-500">
          {filename}
        </span>
      </div>
      <pre className="overflow-x-auto bg-transparent px-4 py-3.5 font-mono text-[13.5px] leading-loose">
        {children}
      </pre>
    </div>
  );
}

function WarnBox({
  variant,
  children,
}: {
  variant: "amber" | "green" | "blue" | "teal" | "red";
  children: React.ReactNode;
}) {
  const styles = {
    amber: "border-amber-200/80 bg-amber-50 text-gray-600 [&_strong]:text-amber-900",
    green: "border-green-200/80 bg-green-50 text-gray-600 [&_strong]:text-green-800",
    blue: "border-blue-200/80 bg-blue-50 text-gray-600 [&_strong]:text-blue-800",
    teal: "border-teal-200/80 bg-teal-50 text-gray-600 [&_strong]:text-teal-800",
    red: "border-red-200/80 bg-red-50 text-gray-600 [&_strong]:text-red-800",
  };
  return (
    <div
      className={`mt-2.5 flex items-start gap-2 rounded-xl border px-3.5 py-3 text-[13px] leading-relaxed ${styles[variant]}`}
    >
      <span>{children}</span>
    </div>
  );
}

function Annotation({
  children,
  icon = "💡",
}: {
  children: React.ReactNode;
  icon?: string;
}) {
  return (
    <div className="mt-2.5 flex gap-2 rounded-lg bg-black/[0.04] px-3 py-2.5 text-[13px] leading-relaxed text-gray-600">
      <span className="shrink-0">{icon}</span>
      <span>{children}</span>
    </div>
  );
}

function CmpTable({
  headers,
  rows,
  firstColMono = true,
}: {
  headers: [string, string] | [string, string, string];
  rows: string[][];
  firstColMono?: boolean;
}) {
  return (
    <div className="mt-3 overflow-hidden rounded-xl border border-black/15 bg-white/50">
      <table className="w-full border-collapse text-[13.5px]">
        <thead>
          <tr className="border-b border-black/15 bg-black/[0.05]">
            {headers.map((h) => (
              <th
                key={h}
                className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr
              key={row.join("|")}
              className="border-b border-black/10 last:border-b-0"
            >
              {row.map((cell, i) => (
                <td
                  key={`${i}-${cell}`}
                  className={`px-3.5 py-2.5 text-gray-600 ${
                    i === 0 && firstColMono
                      ? "font-mono text-[13px] font-semibold text-[#1a5fb4]"
                      : ""
                  }`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function MethodSection({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-6">
      {children}
    </section>
  );
}

const TOC_LINKS = [
  { href: "#append", label: "append()" },
  { href: "#insert", label: "insert()" },
  { href: "#extend", label: "extend()" },
  { href: "#remove", label: "remove()" },
  { href: "#pop", label: "pop()" },
  { href: "#sort", label: "sort()" },
  { href: "#reverse", label: "reverse()" },
  { href: "#clear", label: "clear()" },
  { href: "#copy", label: "copy()" },
  { href: "#count", label: "count()" },
  { href: "#index", label: "index()" },
  { href: "#len", label: "len()" },
] as const;

const ALL_METHODS = [
  { method: "append()", description: "Adds an element at the end of the list" },
  { method: "clear()", description: "Removes all the elements from the list" },
  { method: "copy()", description: "Returns a copy of the list" },
  {
    method: "count()",
    description: "Returns the number of elements with the specified value",
  },
  {
    method: "extend()",
    description:
      "Add the elements of a list (or any iterable), to the end of the current list",
  },
  {
    method: "index()",
    description:
      "Returns the index of the first element with the specified value",
  },
  {
    method: "insert()",
    description: "Adds an element at the specified position",
  },
  {
    method: "pop()",
    description: "Removes the element at the specified position",
  },
  {
    method: "remove()",
    description: "Removes the item with the specified value",
  },
  { method: "reverse()", description: "Reverses the order of the list" },
  { method: "sort()", description: "Sorts the list" },
] as const;

export function ListMethodsInfographic() {
  return (
    <div className="max-w-none text-gray-900">
      <header className="mb-6 border-b border-black/10 pb-5">
        <h2 className="text-xl font-semibold tracking-tight">List Methods</h2>
        <p className="mt-1 text-[13px] text-gray-500">
          Everything built into Python lists — what each method does and when
          to use it
        </p>
      </header>

      {/* TOC */}
      <nav className="mb-8 flex flex-wrap gap-1.5">
        {TOC_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="rounded-full border border-black/15 bg-white/50 px-2.5 py-1 font-mono text-[12px] font-semibold text-gray-600 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* append() */}
      <MethodSection id="append">
        <div className="mb-9">
          <SectionLabel variant="green">
            <Plus className="h-3 w-3" />
            Adding items
          </SectionLabel>
          <h3 className="mb-1.5 text-base font-semibold tracking-tight">
            append() — add one item to the end
          </h3>
          <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
            The most common list method. Adds a single item to the end of the
            list. The list grows by exactly one each time.
          </p>

          <CodeExercisePanel practiceIndex={0} filename="append.py">
            <span className="text-gray-800">items = [</span>
            <span className="text-[#c0622b]">&quot;apple&quot;</span>
            <span className="text-gray-800">, </span>
            <span className="text-[#c0622b]">&quot;banana&quot;</span>
            <span className="text-gray-800">]</span>
            {"\n"}
            <span className="text-gray-800">items.append(</span>
            <span className="text-[#c0622b]">&quot;cherry&quot;</span>
            <span className="text-gray-800">)</span>
            {"\n"}
            <span className="font-semibold text-[#8b2070]">print</span>
            <span className="text-gray-800">(items)  </span>
            <span className="italic text-[#5a8a5a]"># [&apos;apple&apos;, &apos;banana&apos;, &apos;cherry&apos;]</span>
            {"\n"}
            {"\n"}
            <span className="italic text-[#5a8a5a]"># Appending a list adds it as one nested item</span>
            {"\n"}
            <span className="text-gray-800">items.append([</span>
            <span className="text-[#c0622b]">&quot;x&quot;</span>
            <span className="text-gray-800">, </span>
            <span className="text-[#c0622b]">&quot;y&quot;</span>
            <span className="text-gray-800">])</span>
            {"\n"}
            <span className="font-semibold text-[#8b2070]">print</span>
            <span className="text-gray-800">(items)  </span>
            <span className="italic text-[#5a8a5a]"># [&apos;apple&apos;, &apos;banana&apos;, &apos;cherry&apos;, [&apos;x&apos;, &apos;y&apos;]]</span>
          </CodeExercisePanel>

          <WarnBox variant="green">
            <span>
              ⚡ <strong>O(1) performance</strong> — appending is instant
              regardless of list size. Python pre-allocates memory so adding
              to the end never has to shift any existing items.
            </span>
          </WarnBox>
          <Annotation>
            Appending a list wraps it as a single nested item. To merge items
            from another list individually, use{" "}
            <code className="rounded bg-black/[0.07] px-1 font-mono text-[12px]">
              extend()
            </code>{" "}
            instead.
          </Annotation>
        </div>
      </MethodSection>

      <hr className="my-7 border-black/10" />

      {/* insert() */}
      <MethodSection id="insert">
        <div className="mb-9">
          <SectionLabel variant="blue">
            <MapPin className="h-3 w-3" />
            Adding items
          </SectionLabel>
          <h3 className="mb-1.5 text-base font-semibold tracking-tight">
            insert() — add one item at any position
          </h3>
          <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
            <code className="rounded bg-black/[0.07] px-1 font-mono text-[12.5px]">
              insert(index, item)
            </code>{" "}
            places an item at a specific position. Every item from that index
            onwards shifts one place to the right.
          </p>

          <CodeWindow filename="insert.py">
            <span className="text-gray-800">nums = [</span>
            <span className="text-[#1a5fb4]">10</span>
            <span className="text-gray-800">, </span>
            <span className="text-[#1a5fb4]">20</span>
            <span className="text-gray-800">, </span>
            <span className="text-[#1a5fb4]">30</span>
            <span className="text-gray-800">]</span>
            {"\n"}
            <span className="text-gray-800">nums.insert(</span>
            <span className="text-[#1a5fb4]">0</span>
            <span className="text-gray-800">, </span>
            <span className="text-[#1a5fb4]">5</span>
            <span className="text-gray-800">)      </span>
            <span className="italic text-[#5a8a5a]"># insert at the start</span>
            {"\n"}
            <span className="font-semibold text-[#8b2070]">print</span>
            <span className="text-gray-800">(nums)  </span>
            <span className="italic text-[#5a8a5a]"># [5, 10, 20, 30]</span>
            {"\n"}
            {"\n"}
            <span className="text-gray-800">nums.insert(</span>
            <span className="text-[#1a5fb4]">2</span>
            <span className="text-gray-800">, </span>
            <span className="text-[#1a5fb4]">15</span>
            <span className="text-gray-800">)     </span>
            <span className="italic text-[#5a8a5a]"># insert in the middle</span>
            {"\n"}
            <span className="font-semibold text-[#8b2070]">print</span>
            <span className="text-gray-800">(nums)  </span>
            <span className="italic text-[#5a8a5a]"># [5, 10, 15, 20, 30]</span>
            {"\n"}
            {"\n"}
            <span className="text-gray-800">nums.insert(</span>
            <span className="font-semibold text-[#8b2070]">len</span>
            <span className="text-gray-800">(nums), </span>
            <span className="text-[#1a5fb4]">99</span>
            <span className="text-gray-800">)  </span>
            <span className="italic text-[#5a8a5a]"># same as append()</span>
            {"\n"}
            <span className="font-semibold text-[#8b2070]">print</span>
            <span className="text-gray-800">(nums)  </span>
            <span className="italic text-[#5a8a5a]"># [5, 10, 15, 20, 30, 99]</span>
          </CodeWindow>

          <CmpTable
            headers={["Call", "Before", "After"]}
            rows={[
              ["insert(0, item)", "[10, 20, 30]", "[item, 10, 20, 30]"],
              ["insert(2, item)", "[10, 20, 30]", "[10, 20, item, 30]"],
              ["insert(len, item)", "[10, 20, 30]", "[10, 20, 30, item]"],
            ]}
          />

          <Annotation icon="⚠️">
            Every existing item at or after the insertion point has to shift
            right. On very large lists, inserting at position 0 is slow —{" "}
            <code className="rounded bg-black/[0.07] px-1 font-mono text-[12px]">
              append()
            </code>{" "}
            is much faster when order doesn&apos;t matter.
          </Annotation>
        </div>
      </MethodSection>

      <hr className="my-7 border-black/10" />

      {/* extend() */}
      <MethodSection id="extend">
        <div className="mb-9">
          <SectionLabel variant="green">
            <Link2 className="h-3 w-3" />
            Adding items
          </SectionLabel>
          <h3 className="mb-1.5 text-base font-semibold tracking-tight">
            extend() — add all items from another iterable
          </h3>
          <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
            Unpacks another list (or any iterable) and adds each item
            individually to the end. The list grows by however many items were
            in the source.
          </p>

          <CodeExercisePanel practiceIndex={5} filename="extend.py">
            <span className="text-gray-800">a = [</span>
            <span className="text-[#1a5fb4]">1</span>
            <span className="text-gray-800">, </span>
            <span className="text-[#1a5fb4]">2</span>
            <span className="text-gray-800">]</span>
            {"\n"}
            <span className="text-gray-800">b = [</span>
            <span className="text-[#1a5fb4]">3</span>
            <span className="text-gray-800">, </span>
            <span className="text-[#1a5fb4]">4</span>
            <span className="text-gray-800">]</span>
            {"\n"}
            <span className="text-gray-800">a.extend(b)</span>
            {"\n"}
            <span className="font-semibold text-[#8b2070]">print</span>
            <span className="text-gray-800">(a)  </span>
            <span className="italic text-[#5a8a5a]"># [1, 2, 3, 4]</span>
            {"\n"}
            {"\n"}
            <span className="italic text-[#5a8a5a]"># += is identical to extend()</span>
            {"\n"}
            <span className="text-gray-800">a += [</span>
            <span className="text-[#1a5fb4]">5</span>
            <span className="text-gray-800">, </span>
            <span className="text-[#1a5fb4]">6</span>
            <span className="text-gray-800">]</span>
            {"\n"}
            <span className="font-semibold text-[#8b2070]">print</span>
            <span className="text-gray-800">(a)  </span>
            <span className="italic text-[#5a8a5a]"># [1, 2, 3, 4, 5, 6]</span>
          </CodeExercisePanel>

          <CmpTable
            headers={["Method", "Code", "Result"]}
            rows={[
              [
                "append()",
                "a.append([3, 4])",
                "[1, 2, [3, 4]] — nested list",
              ],
              [
                "extend()",
                "a.extend([3, 4])",
                "[1, 2, 3, 4] — items merged in",
              ],
            ]}
          />
        </div>
      </MethodSection>

      <hr className="my-7 border-black/10" />

      {/* remove() */}
      <MethodSection id="remove">
        <div className="mb-9">
          <SectionLabel variant="red">
            <Trash2 className="h-3 w-3" />
            Removing items
          </SectionLabel>
          <h3 className="mb-1.5 text-base font-semibold tracking-tight">
            remove() — delete by value
          </h3>
          <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
            Finds the first item that matches the given value and removes it.
            If the value appears more than once, only the first match is
            removed.
          </p>

          <CodeExercisePanel practiceIndex={1} filename="remove.py">
            <span className="text-gray-800">fruits = [</span>
            <span className="text-[#c0622b]">&quot;apple&quot;</span>
            <span className="text-gray-800">, </span>
            <span className="text-[#c0622b]">&quot;banana&quot;</span>
            <span className="text-gray-800">, </span>
            <span className="text-[#c0622b]">&quot;apple&quot;</span>
            <span className="text-gray-800">]</span>
            {"\n"}
            <span className="text-gray-800">fruits.remove(</span>
            <span className="text-[#c0622b]">&quot;apple&quot;</span>
            <span className="text-gray-800">)</span>
            {"\n"}
            <span className="font-semibold text-[#8b2070]">print</span>
            <span className="text-gray-800">(fruits)  </span>
            <span className="italic text-[#5a8a5a]"># [&apos;banana&apos;, &apos;apple&apos;]  ← only first removed</span>
            {"\n"}
            {"\n"}
            <span className="text-gray-800">fruits.remove(</span>
            <span className="text-[#c0622b]">&quot;grape&quot;</span>
            <span className="text-gray-800">)  </span>
            <span className="italic text-[#5a8a5a]"># ❌ ValueError: not in list</span>
          </CodeExercisePanel>

          <WarnBox variant="red">
            <span>
              ⚠️ <strong>ValueError</strong> if the item isn&apos;t in the list.
              Check first with{" "}
              <code className="rounded bg-black/[0.07] px-1 font-mono text-[12px]">
                if item in my_list
              </code>{" "}
              before removing, or use a try/except block.
            </span>
          </WarnBox>
        </div>
      </MethodSection>

      <hr className="my-7 border-black/10" />

      {/* pop() */}
      <MethodSection id="pop">
        <div className="mb-9">
          <SectionLabel variant="red">
            <Trash2 className="h-3 w-3" />
            Removing items
          </SectionLabel>
          <h3 className="mb-1.5 text-base font-semibold tracking-tight">
            pop() — remove by index and return it
          </h3>
          <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
            Removes the item at the given index and <strong>returns it</strong>{" "}
            so you can use the value. Defaults to the last item if no index is
            given.
          </p>

          <CodeExercisePanel practiceIndex={2} filename="pop.py">
            <span className="text-gray-800">stack = [</span>
            <span className="text-[#1a5fb4]">10</span>
            <span className="text-gray-800">, </span>
            <span className="text-[#1a5fb4]">20</span>
            <span className="text-gray-800">, </span>
            <span className="text-[#1a5fb4]">30</span>
            <span className="text-gray-800">]</span>
            {"\n"}
            {"\n"}
            <span className="text-gray-800">last = stack.pop()        </span>
            <span className="italic text-[#5a8a5a]"># removes &amp; returns 30</span>
            {"\n"}
            <span className="font-semibold text-[#8b2070]">print</span>
            <span className="text-gray-800">(last)   </span>
            <span className="italic text-[#5a8a5a]"># 30</span>
            {"\n"}
            <span className="font-semibold text-[#8b2070]">print</span>
            <span className="text-gray-800">(stack)  </span>
            <span className="italic text-[#5a8a5a]"># [10, 20]</span>
            {"\n"}
            {"\n"}
            <span className="text-gray-800">first = stack.pop(</span>
            <span className="text-[#1a5fb4]">0</span>
            <span className="text-gray-800">)     </span>
            <span className="italic text-[#5a8a5a]"># removes &amp; returns 10</span>
            {"\n"}
            <span className="font-semibold text-[#8b2070]">print</span>
            <span className="text-gray-800">(first)  </span>
            <span className="italic text-[#5a8a5a]"># 10</span>
            {"\n"}
            <span className="font-semibold text-[#8b2070]">print</span>
            <span className="text-gray-800">(stack)  </span>
            <span className="italic text-[#5a8a5a]"># [20]</span>
          </CodeExercisePanel>

          <CmpTable
            headers={["Method", "Finds item by", "Returns the item?"]}
            rows={[
              ["remove(val)", "value", "No — returns None"],
              ["pop(index)", "index (default: last)", "Yes ✓"],
            ]}
          />

          <Annotation>
            <code className="rounded bg-black/[0.07] px-1 font-mono text-[12px]">
              pop()
            </code>{" "}
            from the end = <strong>stack</strong> (last in, first out).{" "}
            <code className="rounded bg-black/[0.07] px-1 font-mono text-[12px]">
              pop(0)
            </code>{" "}
            from the front = <strong>queue</strong> (first in, first out). For
            queues on large lists,{" "}
            <code className="rounded bg-black/[0.07] px-1 font-mono text-[12px]">
              collections.deque
            </code>{" "}
            is faster.
          </Annotation>
        </div>
      </MethodSection>

      <hr className="my-7 border-black/10" />

      {/* sort() */}
      <MethodSection id="sort">
        <div className="mb-9">
          <SectionLabel variant="blue">🔢 Ordering</SectionLabel>
          <h3 className="mb-1.5 text-base font-semibold tracking-tight">
            sort() — sort the list in place
          </h3>
          <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
            Rearranges the list&apos;s items in ascending order by default. The
            original list is changed — nothing is returned.
          </p>

          <CodeExercisePanel practiceIndex={3} filename="sort.py">
            <span className="text-gray-800">nums = [</span>
            <span className="text-[#1a5fb4]">3</span>
            <span className="text-gray-800">, </span>
            <span className="text-[#1a5fb4]">1</span>
            <span className="text-gray-800">, </span>
            <span className="text-[#1a5fb4]">4</span>
            <span className="text-gray-800">, </span>
            <span className="text-[#1a5fb4]">1</span>
            <span className="text-gray-800">, </span>
            <span className="text-[#1a5fb4]">5</span>
            <span className="text-gray-800">]</span>
            {"\n"}
            <span className="text-gray-800">nums.sort()</span>
            {"\n"}
            <span className="font-semibold text-[#8b2070]">print</span>
            <span className="text-gray-800">(nums)  </span>
            <span className="italic text-[#5a8a5a]"># [1, 1, 3, 4, 5]</span>
            {"\n"}
            {"\n"}
            <span className="text-gray-800">nums.sort(reverse=</span>
            <span className="font-semibold text-[#2d7a45]">True</span>
            <span className="text-gray-800">)</span>
            {"\n"}
            <span className="font-semibold text-[#8b2070]">print</span>
            <span className="text-gray-800">(nums)  </span>
            <span className="italic text-[#5a8a5a]"># [5, 4, 3, 1, 1]</span>
          </CodeExercisePanel>

          <CmpTable
            headers={["Method", "Modifies original?", "Returns"]}
            rows={[
              ["list.sort()", "Yes — sorts in place", "None"],
              ["sorted(list)", "No — original untouched", "New sorted list"],
            ]}
          />

          <Annotation>
            Use{" "}
            <code className="rounded bg-black/[0.07] px-1 font-mono text-[12px]">
              list.sort()
            </code>{" "}
            when you don&apos;t need the original order anymore. Use{" "}
            <code className="rounded bg-black/[0.07] px-1 font-mono text-[12px]">
              sorted(list)
            </code>{" "}
            when you want to keep the original and get a new sorted copy.
          </Annotation>
        </div>
      </MethodSection>

      <hr className="my-7 border-black/10" />

      {/* reverse() */}
      <MethodSection id="reverse">
        <div className="mb-9">
          <SectionLabel variant="blue">
            <RotateCcw className="h-3 w-3" />
            Ordering
          </SectionLabel>
          <h3 className="mb-1.5 text-base font-semibold tracking-tight">
            reverse() — flip the list order
          </h3>
          <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
            Reverses the items in place — the last item becomes first, and so
            on. This is not the same as sorting. The values stay the same, just
            in the opposite order.
          </p>

          <CodeExercisePanel practiceIndex={6} filename="reverse.py">
            <span className="text-gray-800">items = [</span>
            <span className="text-[#c0622b]">&quot;a&quot;</span>
            <span className="text-gray-800">, </span>
            <span className="text-[#c0622b]">&quot;c&quot;</span>
            <span className="text-gray-800">, </span>
            <span className="text-[#c0622b]">&quot;b&quot;</span>
            <span className="text-gray-800">]</span>
            {"\n"}
            <span className="text-gray-800">items.reverse()</span>
            {"\n"}
            <span className="font-semibold text-[#8b2070]">print</span>
            <span className="text-gray-800">(items)  </span>
            <span className="italic text-[#5a8a5a]"># [&apos;b&apos;, &apos;c&apos;, &apos;a&apos;]  ← not sorted, just flipped</span>
            {"\n"}
            {"\n"}
            <span className="text-gray-800">nums = [</span>
            <span className="text-[#1a5fb4]">1</span>
            <span className="text-gray-800">, </span>
            <span className="text-[#1a5fb4]">2</span>
            <span className="text-gray-800">, </span>
            <span className="text-[#1a5fb4]">3</span>
            <span className="text-gray-800">]</span>
            {"\n"}
            <span className="text-gray-800">nums.reverse()</span>
            {"\n"}
            <span className="font-semibold text-[#8b2070]">print</span>
            <span className="text-gray-800">(nums)   </span>
            <span className="italic text-[#5a8a5a]"># [3, 2, 1]</span>
          </CodeExercisePanel>

          <Annotation icon="⚠️">
            <code className="rounded bg-black/[0.07] px-1 font-mono text-[12px]">
              reverse()
            </code>{" "}
            does not sort first. It just flips whatever order the items are
            already in. To get a reverse-sorted list, call{" "}
            <code className="rounded bg-black/[0.07] px-1 font-mono text-[12px]">
              list.sort(reverse=True)
            </code>
            .
          </Annotation>
        </div>
      </MethodSection>

      <hr className="my-7 border-black/10" />

      {/* clear() */}
      <MethodSection id="clear">
        <div className="mb-9">
          <SectionLabel variant="amber">🧹 Clearing</SectionLabel>
          <h3 className="mb-1.5 text-base font-semibold tracking-tight">
            clear() — remove all items
          </h3>
          <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
            Empties the list completely. The list object itself still exists —
            it just has no items. Any variable pointing to the same list will
            also see it as empty.
          </p>

          <CodeExercisePanel practiceIndex={7} filename="clear.py">
            <span className="text-gray-800">cart = [</span>
            <span className="text-[#c0622b]">&quot;shoes&quot;</span>
            <span className="text-gray-800">, </span>
            <span className="text-[#c0622b]">&quot;hat&quot;</span>
            <span className="text-gray-800">, </span>
            <span className="text-[#c0622b]">&quot;bag&quot;</span>
            <span className="text-gray-800">]</span>
            {"\n"}
            <span className="text-gray-800">ref = cart            </span>
            <span className="italic text-[#5a8a5a]"># ref points to the same list</span>
            {"\n"}
            <span className="text-gray-800">cart.clear()</span>
            {"\n"}
            <span className="font-semibold text-[#8b2070]">print</span>
            <span className="text-gray-800">(cart)  </span>
            <span className="italic text-[#5a8a5a]"># []</span>
            {"\n"}
            <span className="font-semibold text-[#8b2070]">print</span>
            <span className="text-gray-800">(ref)   </span>
            <span className="italic text-[#5a8a5a]"># []  ← same object, also empty</span>
          </CodeExercisePanel>

          <WarnBox variant="amber">
            <span>
              💡{" "}
              <code className="rounded bg-black/[0.07] px-1 font-mono text-[12px]">
                cart.clear()
              </code>{" "}
              and{" "}
              <code className="rounded bg-black/[0.07] px-1 font-mono text-[12px]">
                del cart[:]
              </code>{" "}
              do the same thing — both empty the list while keeping the object.
              Setting{" "}
              <code className="rounded bg-black/[0.07] px-1 font-mono text-[12px]">
                cart = []
              </code>{" "}
              is different: that creates a brand-new empty list and{" "}
              <strong>ref would still point to the old one.</strong>
            </span>
          </WarnBox>
        </div>
      </MethodSection>

      <hr className="my-7 border-black/10" />

      {/* copy() */}
      <MethodSection id="copy">
        <div className="mb-9">
          <SectionLabel variant="teal">📋 Copying</SectionLabel>
          <h3 className="mb-1.5 text-base font-semibold tracking-tight">
            copy() — make a shallow copy
          </h3>
          <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
            Returns a new list with the same items. Changes to the copy
            don&apos;t affect the original — and vice versa. This is a{" "}
            <em>shallow</em> copy: nested objects inside are still shared.
          </p>

          <CodeWindow filename="copy.py">
            <span className="text-gray-800">a = [</span>
            <span className="text-[#1a5fb4]">1</span>
            <span className="text-gray-800">, </span>
            <span className="text-[#1a5fb4]">2</span>
            <span className="text-gray-800">, </span>
            <span className="text-[#1a5fb4]">3</span>
            <span className="text-gray-800">]</span>
            {"\n"}
            <span className="text-gray-800">b = a.copy()</span>
            {"\n"}
            <span className="text-gray-800">b.append(</span>
            <span className="text-[#1a5fb4]">4</span>
            <span className="text-gray-800">)</span>
            {"\n"}
            {"\n"}
            <span className="font-semibold text-[#8b2070]">print</span>
            <span className="text-gray-800">(a)  </span>
            <span className="italic text-[#5a8a5a]"># [1, 2, 3]   ← unchanged</span>
            {"\n"}
            <span className="font-semibold text-[#8b2070]">print</span>
            <span className="text-gray-800">(b)  </span>
            <span className="italic text-[#5a8a5a]"># [1, 2, 3, 4]</span>
          </CodeWindow>

          <CmpTable
            headers={["Code", "What happens"]}
            rows={[
              [
                "b = a",
                "Both names point to the same list — changing b changes a",
              ],
              [
                "b = a.copy()",
                "A new independent list — changing b leaves a alone",
              ],
            ]}
          />

          <Annotation icon="⚠️">
            Shallow copy only goes one level deep. If the list contains other
            lists, those inner lists are still shared. Use{" "}
            <code className="rounded bg-black/[0.07] px-1 font-mono text-[12px]">
              import copy; copy.deepcopy(a)
            </code>{" "}
            for a fully independent copy.
          </Annotation>
        </div>
      </MethodSection>

      <hr className="my-7 border-black/10" />

      {/* count() */}
      <MethodSection id="count">
        <div className="mb-9">
          <SectionLabel variant="purple">🔢 Searching</SectionLabel>
          <h3 className="mb-1.5 text-base font-semibold tracking-tight">
            count() — how many times a value appears
          </h3>
          <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
            Returns the number of times a value occurs in the list. Returns{" "}
            <code className="rounded bg-black/[0.07] px-1 font-mono text-[12px]">
              0
            </code>{" "}
            if the value isn&apos;t found — no error.
          </p>

          <CodeWindow filename="count.py">
            <span className="text-gray-800">votes = [</span>
            <span className="text-[#c0622b]">&quot;yes&quot;</span>
            <span className="text-gray-800">, </span>
            <span className="text-[#c0622b]">&quot;no&quot;</span>
            <span className="text-gray-800">, </span>
            <span className="text-[#c0622b]">&quot;yes&quot;</span>
            <span className="text-gray-800">, </span>
            <span className="text-[#c0622b]">&quot;yes&quot;</span>
            <span className="text-gray-800">]</span>
            {"\n"}
            <span className="font-semibold text-[#8b2070]">print</span>
            <span className="text-gray-800">(votes.count(</span>
            <span className="text-[#c0622b]">&quot;yes&quot;</span>
            <span className="text-gray-800">))   </span>
            <span className="italic text-[#5a8a5a]"># 3</span>
            {"\n"}
            <span className="font-semibold text-[#8b2070]">print</span>
            <span className="text-gray-800">(votes.count(</span>
            <span className="text-[#c0622b]">&quot;no&quot;</span>
            <span className="text-gray-800">))    </span>
            <span className="italic text-[#5a8a5a]"># 1</span>
            {"\n"}
            <span className="font-semibold text-[#8b2070]">print</span>
            <span className="text-gray-800">(votes.count(</span>
            <span className="text-[#c0622b]">&quot;maybe&quot;</span>
            <span className="text-gray-800">)) </span>
            <span className="italic text-[#5a8a5a]"># 0  ← no error</span>
          </CodeWindow>

          <Annotation>
            Because{" "}
            <code className="rounded bg-black/[0.07] px-1 font-mono text-[12px]">
              count()
            </code>{" "}
            returns{" "}
            <code className="rounded bg-black/[0.07] px-1 font-mono text-[12px]">
              0
            </code>{" "}
            for missing values (instead of raising an error), it&apos;s safe
            to call without checking if the item exists first.
          </Annotation>
        </div>
      </MethodSection>

      <hr className="my-7 border-black/10" />

      {/* index() */}
      <MethodSection id="index">
        <div className="mb-9">
          <SectionLabel variant="purple">
            <Search className="h-3 w-3" />
            Searching
          </SectionLabel>
          <h3 className="mb-1.5 text-base font-semibold tracking-tight">
            index() — find the position of a value
          </h3>
          <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
            Returns the index of the first matching item. You can narrow the
            search with optional{" "}
            <code className="rounded bg-black/[0.07] px-1 font-mono text-[12px]">
              start
            </code>{" "}
            and{" "}
            <code className="rounded bg-black/[0.07] px-1 font-mono text-[12px]">
              end
            </code>{" "}
            arguments.
          </p>

          <CodeWindow filename="index.py">
            <span className="text-gray-800">letters = [</span>
            <span className="text-[#c0622b]">&quot;a&quot;</span>
            <span className="text-gray-800">, </span>
            <span className="text-[#c0622b]">&quot;b&quot;</span>
            <span className="text-gray-800">, </span>
            <span className="text-[#c0622b]">&quot;c&quot;</span>
            <span className="text-gray-800">, </span>
            <span className="text-[#c0622b]">&quot;b&quot;</span>
            <span className="text-gray-800">]</span>
            {"\n"}
            <span className="font-semibold text-[#8b2070]">print</span>
            <span className="text-gray-800">(letters.index(</span>
            <span className="text-[#c0622b]">&quot;b&quot;</span>
            <span className="text-gray-800">))        </span>
            <span className="italic text-[#5a8a5a]"># 1  ← first match</span>
            {"\n"}
            <span className="font-semibold text-[#8b2070]">print</span>
            <span className="text-gray-800">(letters.index(</span>
            <span className="text-[#c0622b]">&quot;b&quot;</span>
            <span className="text-gray-800">, </span>
            <span className="text-[#1a5fb4]">2</span>
            <span className="text-gray-800">))    </span>
            <span className="italic text-[#5a8a5a]"># 3  ← search from index 2</span>
            {"\n"}
            {"\n"}
            <span className="text-gray-800">letters.index(</span>
            <span className="text-[#c0622b]">&quot;z&quot;</span>
            <span className="text-gray-800">)  </span>
            <span className="italic text-[#5a8a5a]"># ❌ ValueError: not in list</span>
          </CodeWindow>

          <CmpTable
            headers={["Method", "Question it answers", "Missing value"]}
            rows={[
              ["count(val)", "How many times does it appear?", "Returns 0"],
              ["index(val)", "Where is it?", "Raises ValueError"],
            ]}
          />

          <WarnBox variant="red">
            <span>
              ⚠️ <strong>ValueError</strong> if the item isn&apos;t in the
              list. Use{" "}
              <code className="rounded bg-black/[0.07] px-1 font-mono text-[12px]">
                if val in my_list
              </code>{" "}
              to check first, or use{" "}
              <code className="rounded bg-black/[0.07] px-1 font-mono text-[12px]">
                count()
              </code>{" "}
              if you only need to know whether something exists.
            </span>
          </WarnBox>
        </div>
      </MethodSection>

      <hr className="my-7 border-black/10" />

      {/* len() */}
      <MethodSection id="len">
        <div className="mb-9">
          <SectionLabel variant="orange">
            <Ruler className="h-3 w-3" />
            Bonus
          </SectionLabel>
          <h3 className="mb-1.5 text-base font-semibold tracking-tight">
            len() — total number of items
          </h3>
          <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
            <code className="rounded bg-black/[0.07] px-1 font-mono text-[12.5px]">
              len()
            </code>{" "}
            is a built-in function, not a method — you call it on the list, not
            from it. Returns the total count of items, not the count of any
            specific value.
          </p>

          <CodeExercisePanel practiceIndex={4} filename="len.py">
            <span className="text-gray-800">fruits = [</span>
            <span className="text-[#c0622b]">&quot;apple&quot;</span>
            <span className="text-gray-800">, </span>
            <span className="text-[#c0622b]">&quot;banana&quot;</span>
            <span className="text-gray-800">, </span>
            <span className="text-[#c0622b]">&quot;apple&quot;</span>
            <span className="text-gray-800">]</span>
            {"\n"}
            <span className="font-semibold text-[#8b2070]">print</span>
            <span className="text-gray-800">(</span>
            <span className="font-semibold text-[#8b2070]">len</span>
            <span className="text-gray-800">(fruits))               </span>
            <span className="italic text-[#5a8a5a]"># 3  ← total items</span>
            {"\n"}
            <span className="font-semibold text-[#8b2070]">print</span>
            <span className="text-gray-800">(fruits.count(</span>
            <span className="text-[#c0622b]">&quot;apple&quot;</span>
            <span className="text-gray-800">))    </span>
            <span className="italic text-[#5a8a5a]"># 2  ← how many are &quot;apple&quot;</span>
          </CodeExercisePanel>

          <CmpTable
            headers={["Call", "Question it answers", "Result"]}
            rows={[
              ["len(list)", "How many items are in the list?", "Total item count"],
              [
                "list.count(val)",
                "How many times does val appear?",
                "Count of one value",
              ],
            ]}
          />

          <Annotation icon="📌">
            You&apos;ll use{" "}
            <code className="rounded bg-black/[0.07] px-1 font-mono text-[12px]">
              len()
            </code>{" "}
            constantly — for loops, checking if a list is empty (
            <code className="rounded bg-black/[0.07] px-1 font-mono text-[12px]">
              if len(items) == 0
            </code>
            ), and finding the last index (
            <code className="rounded bg-black/[0.07] px-1 font-mono text-[12px]">
              len(items) - 1
            </code>
            ).
          </Annotation>
        </div>
      </MethodSection>

      <hr className="my-7 border-black/10" />

      {/* Reference table */}
      <section className="mb-8">
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          All list methods — quick reference
        </h3>
        <div className="overflow-hidden rounded-xl border border-black/15 bg-white/50">
          <table className="w-full border-collapse text-[13.5px]">
            <thead>
              <tr className="border-b border-black/15 bg-black/[0.05]">
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Method
                </th>
                <th className="px-3.5 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              {ALL_METHODS.map((row) => (
                <tr
                  key={row.method}
                  className="border-b border-black/10 last:border-b-0 even:bg-black/[0.02]"
                >
                  <td className="px-3.5 py-2.5 font-mono font-semibold text-gray-800 underline decoration-gray-300 underline-offset-2">
                    {row.method}
                  </td>
                  <td className="px-3.5 py-2.5 text-gray-600">
                    {row.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <hr className="my-7 border-black/10" />

      {/* Practice */}
      <section className="mb-8">
        <SectionLabel variant="purple">
          <Target className="h-3 w-3" />
          Practice
        </SectionLabel>
        <h3 className="mb-3 text-base font-semibold tracking-tight">
          Try yourself
        </h3>
        <p className="mb-3 text-[13.5px] leading-relaxed text-gray-600">
          Click <strong>IDE</strong> on any exercise block above, or load the
          challenge below.
        </p>
        <CodeExercisePanel practiceIndex={8} filename="challenge.py">
          <span className="text-gray-800">nums = [</span>
          <span className="text-[#1a5fb4]">3</span>
          <span className="text-gray-800">, </span>
          <span className="text-[#1a5fb4]">1</span>
          <span className="text-gray-800">, </span>
          <span className="text-[#1a5fb4]">4</span>
          <span className="text-gray-800">]</span>
          {"\n"}
          <span className="text-gray-800">nums.append(</span>
          <span className="text-[#1a5fb4]">1</span>
          <span className="text-gray-800">)</span>
          {"\n"}
          <span className="text-gray-800">nums.sort()</span>
          {"\n"}
          <span className="font-semibold text-[#8b2070]">print</span>
          <span className="text-gray-800">(nums)</span>
        </CodeExercisePanel>
      </section>
    </div>
  );
}
