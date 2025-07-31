import { createContext, useContext } from "react";

interface MediaContextValue {
  mediaStream: MediaStream;
  isAudioActive: boolean;
  isVideoActive: boolean;
  toggleAudio: () => void;
  toggleVideo: () => void;
  toggleAudioAndVideo: () => void;
  stopAllMedia: () => void;
  videoRef: (element: HTMLVideoElement | null) => void;
}

export const MediaContext = createContext<MediaContextValue | null>(null);

export const useMedia = () => {
  const context = useContext(MediaContext);

  if (!context) {
    throw new Error(
      "useMedia 훅은 MediaProvider 컴포넌트 내부에 존재해야 합니다.",
    );
  }

  return context;
};
