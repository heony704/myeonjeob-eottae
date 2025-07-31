import { FRONTEND_QUESTIONS } from "@/constants/frontends";

const QUESTIONS_KEY = "questions";

function setQuestions(questions: string[]): void {
  localStorage.setItem(QUESTIONS_KEY, JSON.stringify(questions));
}

export function getQuestions(): string[] {
  if (!localStorage.getItem(QUESTIONS_KEY)) {
    setQuestions(FRONTEND_QUESTIONS);
  }

  const questionsString = localStorage.getItem(QUESTIONS_KEY);

  if (!questionsString) {
    throw Error("질문 로드 실패: getQuestions failed");
  }

  return JSON.parse(questionsString);
}

export function addQuestion(newQuestion: string): string[] {
  const questions = getQuestions();
  questions.push(newQuestion);

  setQuestions(questions);

  return questions;
}

export function removeQuestion(questionIndex: number): string[] {
  const questions = getQuestions();
  questions.splice(questionIndex, 1);

  setQuestions(questions);

  return questions;
}
