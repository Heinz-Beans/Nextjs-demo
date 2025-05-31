import { X } from "lucide-react";
import { memo } from "react";
import { Badge } from "./badge";

export const CustomBadge = memo(function CustomBadge({
  className = "",
  text,
  onClick,
}: {
  className?: string;
  text: string;
  onClick: () => void;
}) {
  return (
    <Badge className={`bg-grey-100 text-black select-none ${className}`}>
      {text}
      <button className="hover:text-error-main" onClick={onClick}>
        <X size={14} />
      </button>
    </Badge>
  );
});
