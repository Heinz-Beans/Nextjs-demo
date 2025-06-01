import { Team } from "@/lib/types";
import { ImageOff } from "lucide-react";
import Image from "next/image";

export function TeamName({ team, reverse }: { team: Team; reverse?: boolean }) {
  return (
    <div
      className={`flex items-center ${
        reverse
          ? "flex-row-reverse bg-(image:--gradient-green-strip-l)"
          : "flex-row bg-(image:--gradient-green-strip-r)"
      }`}
    >
      <div className="bg-grey-200 sm:w-[80px] sm:h-[80px] w-[40px] h-[40px]">
        {team.logo ? (
          <Image src={team.logo} alt="logo" width={80} height={80} />
        ) : (
          <ImageOff size={80} className="sm:w-[80px] sm:h-[80px] w-[40px] h-[40px]" />
        )}
      </div>
      <div className="sm:p-4 p-1 text-primary-main font-semibold sm:text-4xl text-2xl">
        {team.fullName ?? team.name}
      </div>
    </div>
  );
}
