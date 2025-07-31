import { useMemo } from "react";
import { RecordContext } from "./context";
import { useMedia } from "@/context/media";
import useMediaRecorder from "@/hooks/useMediaRecorder";

function RecordProvider({ children }: React.PropsWithChildren) {
  const { mediaStream } = useMedia();
  const {
    recordURL,
    isRecording,
    startRecording,
    toggleRecording,
    stopRecording,
    recordTime,
  } = useMediaRecorder(mediaStream);

  const context = useMemo(
    () => ({
      recordURL,
      isRecording,
      startRecording,
      toggleRecording,
      stopRecording,
      recordTime,
    }),
    [
      recordURL,
      isRecording,
      startRecording,
      toggleRecording,
      stopRecording,
      recordTime,
    ],
  );

  return (
    <RecordContext.Provider value={context}>{children}</RecordContext.Provider>
  );
}

export default RecordProvider;
