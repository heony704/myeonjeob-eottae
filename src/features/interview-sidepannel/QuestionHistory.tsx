import { useQuestion } from "@/context/question";
import { formatMsToHMSOrMS } from "@/utils/date";

function QuestionHistory() {
  const { questionHistories } = useQuestion();

  return (
    <div className="mr-4 mb-6 ml-6 flex flex-col gap-2 overflow-y-auto pt-3 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent">
      {questionHistories.map((question, index) => (
        <div className="mr-2 flex text-sm" key={`${question}-${index}`}>
          <span className="mr-3 text-blue-600">
            {formatMsToHMSOrMS(question.time)}
          </span>
          <span>{question.question}</span>
        </div>
      ))}
    </div>
  );
}

export default QuestionHistory;
