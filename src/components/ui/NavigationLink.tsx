"use client";

import Link from "next/link";
import { flushSync } from "react-dom";
import { useNavigation } from "@/contexts/NavigationContext";
import type { ComponentProps } from "react";

type NavigationLinkProps = ComponentProps<typeof Link>;

export function NavigationLink({ href, onClick, ...props }: NavigationLinkProps) {
  const { startNavigation } = useNavigation();

  return (
    <Link
      href={href}
      onClick={(event) => {
        if (
          event.metaKey ||
          event.ctrlKey ||
          event.shiftKey ||
          event.altKey ||
          event.defaultPrevented
        ) {
          onClick?.(event);
          return;
        }
        flushSync(() => startNavigation());
        onClick?.(event);
      }}
      {...props}
    />
  );
}
