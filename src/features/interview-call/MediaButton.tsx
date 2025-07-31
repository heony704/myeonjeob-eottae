import { MdOutlineMic, MdOutlineMicOff } from "react-icons/md";
import { BiVideo, BiVideoOff } from "react-icons/bi";
import { Tooltip } from "@/ui";
import { useMedia } from "@/context/media";

interface Props {
  type: "audio" | "video";
}

function MediaButton({ type }: Props) {
  const { isAudioActive, isVideoActive, toggleAudio, toggleVideo } = useMedia();

  if (type === "audio") {
    return (
      <Tooltip title={isAudioActive ? "마이크 끄기" : "마이크 켜기"}>
        <button
          className={`${isAudioActive ? "rounded-full bg-gray-800 text-gray-300 hover:bg-gray-700 active:bg-gray-600" : "rounded-xl bg-red-200 text-red-900 hover:bg-red-300 active:bg-red-100"} flex h-12 w-12 cursor-pointer items-center justify-center text-2xl transition-all`}
          onClick={toggleAudio}
        >
          {isAudioActive ? <MdOutlineMic /> : <MdOutlineMicOff />}
        </button>
      </Tooltip>
    );
  }

  if (type === "video") {
    return (
      <Tooltip title={isVideoActive ? "비디오 끄기" : "비디오 켜기"}>
        <button
          className={`${isVideoActive ? "rounded-full bg-gray-800 text-gray-300 hover:bg-gray-700 active:bg-gray-600" : "rounded-xl bg-red-200 text-red-900 hover:bg-red-300 active:bg-red-100"} flex h-12 w-12 cursor-pointer items-center justify-center text-2xl transition-all`}
          onClick={toggleVideo}
        >
          {isVideoActive ? <BiVideo /> : <BiVideoOff />}
        </button>
      </Tooltip>
    );
  }
}

export default MediaButton;
