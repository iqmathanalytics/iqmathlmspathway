export function cleanMobile(value: string): string {
  return value.replace(/\s/g, "").trim();
}

export function isValidMobile(value: string): boolean {
  return cleanMobile(value).length >= 8;
}