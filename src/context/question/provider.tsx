import { useCallback, useMemo, useState } from "react";
import {
  addQuestion as addQuestionToLocal,
  getQuestions as getQuestionFromLocal,
  removeQuestion as removeQuestionFromLocal,
} from "@/utils/question";
import { QuestionContext } from "./context";
import { QuestionHistory } from "./type";

function QuestionProvider({ children }: React.PropsWithChildren) {
  const [questions, setQuestions] = useState<string[]>(getQuestionFromLocal);

  const addQuestion = useCallback((question: string) => {
    const newQuestions = addQuestionToLocal(question);
    setQuestions(newQuestions);
  }, []);

  const deleteQuestion = useCallback((index: number) => {
    removeQuestionFromLocal(index);
    setQuestions(getQuestionFromLocal());
  }, []);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const currentQuestion = questions[currentQuestionIndex];
  const isFirstQuestion = currentQuestionIndex <= 0;
  const isLastQuestion = currentQuestionIndex >= questions.length - 1;

  const isCurrentQuestion = useCallback(
    (index: number) => {
      return currentQuestionIndex === index;
    },
    [currentQuestionIndex],
  );

  const prevQuestion = useCallback(() => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  }, [currentQuestionIndex]);

  const nextQuestion = useCallback(() => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  }, [currentQuestionIndex, questions]);

  const [questionHistories, setQuestionHistories] = useState<QuestionHistory[]>(
    [],
  );

  const addQuestionHistory = useCallback((history: QuestionHistory) => {
    setQuestionHistories((prev) => {
      const isHistoriesEmpty = prev.length < 1;
      const isSameQuestion =
        prev[prev.length - 1]?.question === history.question;

      if (isHistoriesEmpty || !isSameQuestion) {
        return [...prev, history];
      }

      return prev;
    });
  }, []);

  const resetQuestion = useCallback(() => {
    setCurrentQuestionIndex(0);
    setQuestionHistories([]);
  }, []);

  const context = useMemo(
    () => ({
      questions,
      addQuestion,
      deleteQuestion,
      currentQuestion,
      isCurrentQuestion,
      isFirstQuestion,
      isLastQuestion,
      nextQuestion,
      prevQuestion,
      questionHistories,
      addQuestionHistory,
      resetQuestion,
    }),
    [
      questions,
      addQuestion,
      deleteQuestion,
      currentQuestion,
      isCurrentQuestion,
      isFirstQuestion,
      isLastQuestion,
      nextQuestion,
      prevQuestion,
      questionHistories,
      addQuestionHistory,
      resetQuestion,
    ],
  );

  return (
    <QuestionContext.Provider value={context}>
      {children}
    </QuestionContext.Provider>
  );
}

export default QuestionProvider;
