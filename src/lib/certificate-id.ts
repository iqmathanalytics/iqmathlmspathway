const CERTIFICATE_ID_PATTERN = /^IQ-LMS-\d{4}$/;

function randomFourDigits(): string {
  const bytes = new Uint8Array(2);
  if (typeof crypto !== "undefined" && crypto.getRandomValues) {
    crypto.getRandomValues(bytes);
  } else {
    bytes[0] = Math.floor(Math.random() * 256);
    bytes[1] = Math.floor(Math.random() * 256);
  }
  const n = (bytes[0]! * 256 + bytes[1]!) % 10000;
  return String(n).padStart(4, "0");
}

/** IQ-LMS-{4-digit serial}, e.g. IQ-LMS-4827 */
export function buildCertificateId(): string {
  return `IQ-LMS-${randomFourDigits()}`;
}

export function isCertificateId(code: string): boolean {
  return CERTIFICATE_ID_PATTERN.test(code.trim());
}
