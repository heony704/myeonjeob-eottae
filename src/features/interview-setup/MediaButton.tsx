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
          className={`${isAudioActive ? "border border-white hover:bg-white/40 active:bg-white/60" : "bg-red-500 hover:bg-red-400 active:bg-red-300"} flex h-14 w-14 cursor-pointer items-center justify-center rounded-full text-2xl text-white transition-colors`}
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
          className={`${isVideoActive ? "border border-white hover:bg-white/40 active:bg-white/60" : "bg-red-500 hover:bg-red-400 active:bg-red-300"} flex h-14 w-14 cursor-pointer items-center justify-center rounded-full text-2xl text-white transition-colors`}
          onClick={toggleVideo}
        >
          {isVideoActive ? <BiVideo /> : <BiVideoOff />}
        </button>
      </Tooltip>
    );
  }
}

export default MediaButton;
