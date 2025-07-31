import { MdMicOff } from "react-icons/md";
import { useMedia } from "@/context/media";

function StreamingScreen() {
  const { isAudioActive, videoRef } = useMedia();

  return (
    <>
      <video
        className="aspect-video h-full w-full -scale-x-100 object-cover"
        ref={videoRef}
        autoPlay
        muted
      />
      <div
        className={`${!isAudioActive ? "block" : "hidden"} absolute top-3 right-3 flex h-7 w-7 items-center justify-center rounded-full bg-gray-600 text-lg text-gray-300`}
      >
        <MdMicOff />
      </div>
    </>
  );
}

export default StreamingScreen;
