import { BiVideo, BiVideoOff } from "react-icons/bi";
import { Tooltip } from "@/ui";

interface Props {
  variant?: "circle" | "square";
  active: boolean;
  onClick: () => void;
}

function VideoButton({ variant = "circle", active, onClick }: Props) {
  if (variant === "square") {
    return (
      <Tooltip title={active ? "비디오 끄기" : "비디오 켜기"}>
        <button
          className={`${active ? "rounded-full bg-gray-800 text-gray-300 hover:bg-gray-700 active:bg-gray-600" : "rounded-xl bg-red-200 text-red-900 hover:bg-red-300 active:bg-red-100"} flex h-12 w-12 cursor-pointer items-center justify-center text-2xl transition-all`}
          onClick={onClick}
        >
          {active ? <BiVideo /> : <BiVideoOff />}
        </button>
      </Tooltip>
    );
  }

  return (
    <Tooltip title={active ? "비디오 끄기" : "비디오 켜기"}>
      <button
        className={`${active ? "border border-white hover:bg-white/40 active:bg-white/60" : "bg-red-500 hover:bg-red-400 active:bg-red-300"} flex h-14 w-14 cursor-pointer items-center justify-center rounded-full text-2xl text-white transition-colors`}
        onClick={onClick}
      >
        {active ? <BiVideo /> : <BiVideoOff />}
      </button>
    </Tooltip>
  );
}

export default VideoButton;
