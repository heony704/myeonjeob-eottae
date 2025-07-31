import { useMemo } from "react";
import { MediaContext } from "./context";
import useMediaStream from "@/hooks/useMediaStream";

function MediaProvider({ children }: React.PropsWithChildren) {
  const {
    mediaStream,
    isAudioActive,
    isVideoActive,
    toggleAudio,
    toggleVideo,
    toggleAudioAndVideo,
    stopAllMedia,
    videoRef,
  } = useMediaStream();

  const context = useMemo(
    () => ({
      mediaStream,
      isAudioActive,
      isVideoActive,
      toggleAudio,
      toggleVideo,
      toggleAudioAndVideo,
      stopAllMedia,
      videoRef,
    }),
    [
      mediaStream,
      isAudioActive,
      isVideoActive,
      toggleAudio,
      toggleVideo,
      toggleAudioAndVideo,
      stopAllMedia,
      videoRef,
    ],
  );

  return (
    <MediaContext.Provider value={context}>{children}</MediaContext.Provider>
  );
}

export default MediaProvider;
