import { Spinner } from "@/ui";
import { useMedia } from "@/context/media";

import AllMediaRequest from "./AllMediaRequest";
import StreamingScreen from "./StreamingScreen";
import MediaButton from "./MediaButton";

interface Props {
  isLoading?: boolean;
}

function SetupScreen({ isLoading = false }: Props) {
  const { isAudioActive, isVideoActive } = useMedia();
  const isAllMediaInactive = !isAudioActive && !isVideoActive;

  if (isLoading) {
    return (
      <section className="relative flex aspect-video w-full max-w-2xl flex-col items-center justify-center rounded-2xl bg-gray-900">
        <Spinner className="h-15 w-15" />
      </section>
    );
  }

  return (
    <section
      className={`${isVideoActive ? "" : "bg-gray-900"} relative flex aspect-video w-full max-w-2xl items-center justify-center overflow-hidden rounded-2xl`}
    >
      {isAllMediaInactive ? <AllMediaRequest /> : <StreamingScreen />}

      <div className="absolute inset-x-0 bottom-5 flex justify-center gap-5">
        <MediaButton type="audio" />
        <MediaButton type="video" />
      </div>
    </section>
  );
}

export default SetupScreen;
