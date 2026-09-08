import fs from "fs";

const src = fs.readFileSync("src/components/lesson/LessonContent.tsx", "utf8");
const importRe = /import \{ (\w+) \} from "(@\/components\/(?:lesson|visual)\/\w+)";/g;
const imports = [...src.matchAll(importRe)];

let out = `"use client";

import dynamic from "next/dynamic";

function BlockFallback() {
  return <div className="my-4 h-40 animate-pulse rounded-xl bg-gray-100" aria-hidden />;
}

`;

for (const [, name, path] of imports) {
  out += `export const ${name} = dynamic(
  () => import("${path}").then((m) => m.${name}),
  { loading: () => <BlockFallback /> }
);

`;
}

fs.writeFileSync("src/components/lesson/dynamicBlocks.tsx", out);
console.log(`Wrote ${imports.length} dynamic exports`);
