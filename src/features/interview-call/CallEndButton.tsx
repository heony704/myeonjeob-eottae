import { MdOutlineCallEnd } from "react-icons/md";
import { Tooltip } from "@/ui";
import { useInterviewMode } from "@/context/interviewMode";
import { useMedia } from "@/context/media";
import { useRecord } from "@/context/record";

function CallEndButton() {
  const { setInterviewMode } = useInterviewMode();
  const { stopAllMedia } = useMedia();
  const { stopRecording } = useRecord();

  const endInterview = () => {
    setInterviewMode("exit");
    stopAllMedia();
    stopRecording();
  };

  return (
    <Tooltip title="통화에서 나가기">
      <button
        className="flex h-12 w-[72px] cursor-pointer items-center justify-center rounded-full bg-red-500 text-white transition-colors hover:bg-red-400 active:bg-red-300"
        onClick={endInterview}
      >
        <MdOutlineCallEnd size={24} />
      </button>
    </Tooltip>
  );
}

export default CallEndButton;
