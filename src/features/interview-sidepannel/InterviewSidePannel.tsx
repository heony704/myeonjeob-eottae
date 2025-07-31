import { MdClose } from "react-icons/md";
import QuestionList from "./QuestionList";
import QuestionHistory from "./QuestionHistory";
import { SidePannelTopic } from "./type";

type SidePannelByTopic = Record<
  SidePannelTopic,
  {
    title: string;
    content: React.ReactNode;
  }
>;
interface Props {
  topic?: SidePannelTopic;
  open: boolean;
  onClose: () => void;
}

const TOPICS: SidePannelByTopic = {
  "question-list": { title: "질문 목록", content: <QuestionList /> },
  "question-history": { title: "질문 기록", content: <QuestionHistory /> },
};

function InterviewSidePannel({ topic, open, onClose }: Props) {
  const title = topic ? TOPICS[topic].title : "";
  const content = topic ? TOPICS[topic].content : null;

  return (
    <aside
      className={`${open ? "right-0" : "-right-96"} absolute flex h-full w-full max-w-[360px] flex-col rounded-2xl bg-white transition-all duration-500`}
    >
      <div className="flex h-16 shrink-0 items-center justify-between pr-3 pl-6">
        <span className="text-lg">{title}</span>
        <button
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-2xl text-gray-700 transition-colors hover:bg-gray-800/10 active:bg-gray-800/15"
          onClick={onClose}
        >
          <MdClose />
        </button>
      </div>

      {content}
    </aside>
  );
}

export default InterviewSidePannel;
