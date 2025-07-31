import { useRef, useState } from "react";
import useStopwatch from "@/hooks/useStopwatch";

function useMediaRecorder(stream: MediaStream) {
  const recorderRef = useRef<MediaRecorder | null>(null);
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [recordURL, setRecordURL] = useState<string | null>(null);
  const {
    time: recordTime,
    startStopwatch,
    pauseStopwatch,
    stopStopwatch,
  } = useStopwatch();

  const startRecording = async () => {
    recorderRef.current = new MediaRecorder(stream, { mimeType: "video/webm" });

    recorderRef.current.onpause = () => {
      setIsRecording(false);
      pauseStopwatch();
    };
    recorderRef.current.onresume = () => {
      setIsRecording(true);
      startStopwatch();
    };
    recorderRef.current.ondataavailable = (event) => {
      setRecordURL(URL.createObjectURL(event.data));
    };
    recorderRef.current.onstop = () => {
      setIsRecording(false);
      stopStopwatch();
    };

    recorderRef.current.start();

    // 실제로 시작할 때까지 대기
    const started = new Promise<void>((resolve) => {
      recorderRef.current!.onstart = () => {
        setIsRecording(true);
        startStopwatch();
        resolve();
      };
    });
    await started;
  };

  const toggleRecording = () => {
    const recordingState = recorderRef.current?.state;

    if (!recorderRef.current || recordingState === "inactive") {
      startRecording();
      return;
    }
    if (recordingState === "paused") {
      recorderRef.current.resume();
      return;
    }
    if (recordingState === "recording") {
      recorderRef.current.pause();
      return;
    }
  };

  const stopRecording = () => {
    recorderRef.current?.stop();
  };

  const downloadRecord = () => {};

  return {
    recordURL,
    isRecording,
    startRecording,
    toggleRecording,
    stopRecording,
    downloadRecord,
    recordTime,
  };
}

export default useMediaRecorder;
