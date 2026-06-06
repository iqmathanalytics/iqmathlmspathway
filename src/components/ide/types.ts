export type ConsoleLineKind =
  | "stdout"
  | "stderr"
  | "stdin"
  | "info"
  | "error"
  | "divider";

export interface ConsoleLine {
  id: string;
  kind: ConsoleLineKind;
  text: string;
  time?: string;
}
