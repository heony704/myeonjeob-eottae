import { QuestionHistory } from "@/context/question/type";
import { createContext, useContext } from "react";

interface QuestionContextValue {
  questions: string[];
  addQuestion: (question: string) => void;
  deleteQuestion: (index: number) => void;
  currentQuestion: string;
  isCurrentQuestion: (index: number) => boolean;
  isFirstQuestion: boolean;
  isLastQuestion: boolean;
  nextQuestion: () => void;
  prevQuestion: () => void;
  questionHistories: QuestionHistory[];
  addQuestionHistory: (history: QuestionHistory) => void;
  resetQuestion: () => void;
}

export const QuestionContext = createContext<QuestionContextValue | null>(null);

export const useQuestion = () => {
  const context = useContext(QuestionContext);

  if (!context) {
    throw new Error(
      "useQuestion 훅은 QuestionProvider 컴포넌트 내부에 존재해야 합니다.",
    );
  }

  return context;
};
