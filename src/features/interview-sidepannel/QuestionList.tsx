import { useRef } from "react";
import { MdAddCircle, MdDelete } from "react-icons/md";
import { useQuestion } from "@/context/question";

function QuestionList() {
  const { questions, deleteQuestion, addQuestion, isCurrentQuestion } =
    useQuestion();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newQuestion = inputRef.current?.value.trim();
    if (newQuestion) {
      addQuestion(newQuestion);
    }

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  return (
    <>
      <div className="mx-4 flex grow flex-col overflow-y-auto pt-2 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent">
        {questions.map((question, index) => (
          <div
            className="group relative mr-1 flex cursor-pointer rounded-md p-1 text-sm transition-colors hover:bg-black/5 active:bg-black/10"
            key={`${question}-${index}`}
          >
            <span
              className={`${isCurrentQuestion(index) ? "font-bold text-blue-600" : "text-black"} mr-1 w-7 shrink-0 text-center`}
            >
              {index + 1}.
            </span>
            <span
              className={`${isCurrentQuestion(index) ? "font-bold text-blue-600" : "text-black"} grow`}
            >
              {question}
            </span>

            <button
              className="absolute -top-1 right-0 z-10 hidden h-7 w-7 cursor-pointer items-center justify-center rounded-full bg-gray-50 text-lg text-gray-800 shadow-[0_0.15rem_0.4rem_0_rgba(0,0,0,0.4)] transition-colors group-hover:flex hover:bg-gray-100 active:bg-gray-200"
              onClick={() => deleteQuestion(index)}
            >
              <MdDelete />
            </button>
          </div>
        ))}
      </div>

      <form
        className="mx-4 my-4 flex rounded-full border border-gray-400"
        onSubmit={handleInputSubmit}
      >
        <input
          className="peer h-12 grow pr-2 pl-4 text-sm font-medium placeholder:text-gray-500 focus:outline-none"
          placeholder="질문 추가하기"
          ref={inputRef}
        />
        <button
          className="right-0 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full text-2xl text-blue-600 peer-placeholder-shown:pointer-events-none peer-placeholder-shown:text-gray-400 hover:bg-blue-950/10 active:bg-blue-950/15"
          type="submit"
        >
          <MdAddCircle />
        </button>
      </form>
    </>
  );
}

export default QuestionList;
