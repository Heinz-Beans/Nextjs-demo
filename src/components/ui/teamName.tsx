import { Team } from "@/lib/types";
import Image from "next/image";

export function TeamName({team, reverse}: {team: Team, reverse?: boolean}) {
  return (
    <div className={`flex items-center from-grey-400 from-99% to-primary-light to-100% ${reverse ? 'flex-row-reverse bg-linear-to-l' : 'flex-row bg-linear-to-r'} drop-shadow`}>
      <div className="bg-grey-200 p-1" >{team.logo && <Image src={team.logo} alt='logo' width={80} height={80}/>}</div>
      <div className="p-4 text-primary-main font-semibold text-4xl">{team.fullName ?? team.name}</div>
    </div>
  )
}