import Image from "next/image";

interface IconImageProps {
  src?: string;
  alt: string;
  fallback: string;
  className?: string;
  imageClassName?: string;
  fallbackClassName?: string;
}

export function IconImage({
  src,
  alt,
  fallback,
  className = "",
  imageClassName = "h-full w-full object-contain",
  fallbackClassName = "",
}: IconImageProps) {
  if (src) {
    return (
      <span className={`inline-flex shrink-0 items-center justify-center ${className}`}>
        <Image src={src} alt={alt} width={64} height={64} className={imageClassName} />
      </span>
    );
  }

  return (
    <span className={`inline-flex shrink-0 items-center justify-center ${className} ${fallbackClassName}`} aria-hidden>
      {fallback}
    </span>
  );
}
