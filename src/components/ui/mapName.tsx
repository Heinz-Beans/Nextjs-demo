
export function MapName({mapName}: {mapName: string}) {
  return (
    <div className="flex flex-col w-[450px] drop-shadow">
      <span className="w-full p-[10px] text-primary-main bg-grey-700 font-bold text-center">MAP</span>
      <span className="w-full p-[10px] text-primary-contrast-text bg-grey-200 font-medium text-center">{mapName}</span>
    </div>
  )
}