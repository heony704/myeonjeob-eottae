import { createContext, useContext } from "react";

interface RecordContextValue {
  recordURL: string | null;
  isRecording: boolean;
  startRecording: () => void;
  toggleRecording: () => void;
  stopRecording: () => void;
  recordTime: number;
}

export const RecordContext = createContext<RecordContextValue | null>(null);

export const useRecord = () => {
  const context = useContext(RecordContext);

  if (!context) {
    throw new Error(
      "useRecord 훅은 RecordProvider 컴포넌트 내부에 존재해야 합니다.",
    );
  }

  return context;
};
