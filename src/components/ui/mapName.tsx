export function MapName({ mapName }: { mapName: string }) {
  return (
    <div className="flex flex-col">
      <span className="w-full py-[8px] text-primary-main bg-grey-500 font-bold text-center">
        MAP
      </span>
      <span className="w-full py-[8px] px-4 text-primary-contrast-text bg-grey-200 font-medium text-center">
        {mapName}
      </span>
    </div>
  );
}
