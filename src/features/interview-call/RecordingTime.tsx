import { useRecord } from "@/context/record";
import { formatMsToHMS } from "@/utils/date";

function RecordingTime() {
  const { isRecording, recordTime } = useRecord();
  const recordString = formatMsToHMS(recordTime);

  if (!isRecording) {
    return (
      <div className="absolute top-4 flex flex-col items-center justify-center gap-2 select-none">
        <div className="relative flex items-center justify-center px-2 py-[6px]">
          <div className="absolute inset-0 animate-pulse rounded-xs bg-white/30" />
          <span className="animate-none text-xl leading-none text-white">
            {recordString}
          </span>
        </div>

        <div className="flex items-center justify-center rounded-xs bg-red-500">
          <span className="px-1 py-1 text-sm leading-none font-normal text-white">
            일시 정지됨
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="absolute top-4 flex items-center justify-center rounded-sm bg-red-500 px-2 py-[6px] select-none">
      <span className="text-xl leading-none text-white">{recordString}</span>
    </div>
  );
}

export default RecordingTime;
