import { useMedia } from "@/context/media";

function IntervieweeScreen() {
  const { videoRef } = useMedia();

  return (
    <div className="flex-1/2">
      <video
        className="aspect-video h-full w-full -scale-x-100 rounded-2xl bg-gray-900 object-cover"
        ref={videoRef}
        autoPlay
        muted
      />
    </div>
  );
}

export default IntervieweeScreen;
