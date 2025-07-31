import { createContext, useContext } from "react";

export type InterviewMode = "setup" | "call" | "exit";
interface InterviewModeContextValue {
  interviewMode: InterviewMode;
  setInterviewMode: React.Dispatch<React.SetStateAction<InterviewMode>>;
}

export const InterviewModeContext =
  createContext<InterviewModeContextValue | null>(null);

export const useInterviewMode = () => {
  const context = useContext(InterviewModeContext);

  if (!context) {
    throw new Error(
      "useInterviewMode 훅은 InterviewModeProvider 컴포넌트 내부에 존재해야 합니다.",
    );
  }

  return context;
};
