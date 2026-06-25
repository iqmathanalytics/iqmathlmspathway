"use client";

import { createContext, useContext, useState } from "react";

interface LangChainCopyContextType {
  copiedSteps: Set<number>;
  markCopied: (stepId: number) => void;
}

const LangChainCopyContext = createContext<LangChainCopyContextType>({
  copiedSteps: new Set(),
  markCopied: () => {},
});

export function LangChainCopyProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [copiedSteps, setCopiedSteps] = useState<Set<number>>(new Set());

  function markCopied(stepId: number) {
    setCopiedSteps((prev) => new Set([...prev, stepId]));
  }

  return (
    <LangChainCopyContext.Provider value={{ copiedSteps, markCopied }}>
      {children}
    </LangChainCopyContext.Provider>
  );
}

export function useLangChainCopy() {
  return useContext(LangChainCopyContext);
}
