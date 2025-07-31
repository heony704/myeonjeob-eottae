import { useQuestion } from "@/context/question";
import { formatMsToHMSOrMS } from "@/utils/date";

interface Props {
  currentTime: number;
  moveVideoTime: (seconds: number) => void;
}

function RecordTimestamp({ currentTime, moveVideoTime }: Props) {
  const { questionHistories } = useQuestion();

  const isCurrentQuestion = (index: number): boolean => {
    const currentQuestionTime = questionHistories[index].time;
    const nextQuestionTime = questionHistories[index + 1]?.time;

    const isLastQuestion = !nextQuestionTime;
    if (currentTime >= currentQuestionTime && isLastQuestion) {
      return true;
    }

    return currentTime >= currentQuestionTime && currentTime < nextQuestionTime;
  };

  return (
    <div className="flex-1/2 rounded-2xl border border-gray-400 bg-white">
      <div className="my-3 mr-3 ml-5 flex aspect-video flex-col overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent">
        {questionHistories.map((question, index) => (
          <div
            className={`${isCurrentQuestion(index) ? "font-bold" : ""} mr-2 flex cursor-pointer text-sm`}
            key={`${question}-${index}`}
            onClick={() => moveVideoTime(question.time)}
          >
            <span
              className={`${isCurrentQuestion(index) ? "mr-2" : "mr-3"} text-blue-600`}
            >
              {formatMsToHMSOrMS(question.time)}
            </span>
            <span>{question.question}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecordTimestamp;
