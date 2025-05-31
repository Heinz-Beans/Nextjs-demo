import { X } from "lucide-react";
import { memo } from "react";
import { Badge } from "../ui/badge";

export const FilterTags = memo(function FilterTags() {
  return (
    <div>
      {Array.from({ length: 12 }, (_, i) => (
        <Badge key={i} className="bg-blue-200 text-black">
          {`Filter ${i + 1}`}
          <button className="">
            <X size={14} />
          </button>
        </Badge>
      ))}
    </div>
  );
});
