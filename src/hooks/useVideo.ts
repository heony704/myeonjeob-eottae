import { useCallback, useRef, useState } from "react";

function useVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const intervalIdRef = useRef<NodeJS.Timeout>(null);

  const updateCurrentTime = () => {
    if (videoRef.current) {
      const currentTimeMs = Math.floor(videoRef.current.currentTime * 1000);
      setCurrentTime(currentTimeMs);
    }
  };

  const startTimeTracking = useCallback(() => {
    if (intervalIdRef.current) {
      return;
    }

    intervalIdRef.current = setInterval(updateCurrentTime, 100);
  }, []);

  const stopTimeTracking = () => {
    if (!intervalIdRef.current) {
      return;
    }

    clearInterval(intervalIdRef.current);
    intervalIdRef.current = null;
  };

  const setVideoRef = useCallback(
    (videoTag: HTMLVideoElement | null) => {
      if (videoRef.current) {
        videoRef.current.removeEventListener("play", startTimeTracking);
        videoRef.current.removeEventListener("pause", stopTimeTracking);
        videoRef.current.removeEventListener("ended", stopTimeTracking);
        videoRef.current.removeEventListener("seeked", updateCurrentTime);
      }

      if (videoTag) {
        videoTag.addEventListener("play", startTimeTracking);
        videoTag.addEventListener("pause", stopTimeTracking);
        videoTag.addEventListener("ended", stopTimeTracking);
        videoTag.addEventListener("seeked", updateCurrentTime);
      }

      videoRef.current = videoTag;
    },
    [startTimeTracking],
  );

  const moveTime = (miliseconds: number) => {
    if (videoRef.current) {
      videoRef.current.currentTime = miliseconds / 1000;
      videoRef.current.play();
    }
  };

  return { videoRef: setVideoRef, currentTime, moveTime };
}

export default useVideo;
