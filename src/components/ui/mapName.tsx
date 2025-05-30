export function MapName({ mapName }: { mapName: string }) {
  return (
    <div className="flex flex-col w-[450px]">
      <span className="w-full p-[8px] text-primary-main bg-grey-500 font-bold text-center">
        MAP
      </span>
      <span className="w-full p-[8px] text-primary-contrast-text bg-grey-200 font-medium text-center">
        {mapName}
      </span>
    </div>
  );
}
