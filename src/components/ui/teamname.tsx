import { Team } from "@/lib/types";
import Image from "next/image";

export function TeamName({team}: {team: Team}) {
  return (
    <div className="flex items-center bg-gray-800">
      <div className="bg-gray-300 p-1" >{team.logo && <Image src={team.logo} alt='logo' width={40} height={40}/>}</div>
      <div className="p-2 text-yellow-200 font-semibold">{team.fullName ?? team.name}</div>
    </div>
  )
}