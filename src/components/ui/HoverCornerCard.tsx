import { type LucideIcon } from "lucide-react";
import "./HoverCornerCard.css";

type HoverCornerCardProps = {
  title: string;
  text: string;
  icon: LucideIcon;
  className?: string;
};

export function HoverCornerCard({ title, text, icon: Icon, className = "" }: HoverCornerCardProps) {
  return (
    <div className={`hover-corner-card ${className}`.trim()} data-hover-text={text}>
      <div className="hover-corner-card-content">
        <Icon className="h-6 w-6" aria-hidden />
        <span>{title}</span>
      </div>
    </div>
  );
}
