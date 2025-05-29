import { Team } from "@/lib/types";
import Image from "next/image";

export function TeamName({team, reverse}: {team: Team, reverse?: boolean}) {
  return (
    <div className={`flex items-center ${reverse ? 'flex-row-reverse bg-(image:--gradient-green-strip-l)' : 'flex-row bg-(image:--gradient-green-strip-r)'}`}>
      <div className="bg-grey-200 p-1" >{team.logo && <Image src={team.logo} alt='logo' width={80} height={80}/>}</div>
      <div className="p-4 text-primary-main font-semibold text-4xl">{team.fullName ?? team.name}</div>
    </div>
  )
}