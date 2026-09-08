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
    <div
      className={`hover-corner-card ${className}`.trim()}
      data-hover-text={text}
      tabIndex={0}
    >
      <div className="hover-corner-card-content">
        <Icon className="h-6 w-6" aria-hidden />
        <span>{title}</span>
        <p className="hover-corner-card-body">{text}</p>
      </div>
    </div>
  );
}
