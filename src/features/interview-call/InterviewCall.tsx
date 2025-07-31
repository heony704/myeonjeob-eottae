import { useEffect, useState } from "react";
import {
  InterviewSidePannel,
  SidePannelTopic,
} from "@/features/interview-sidepannel";
import useSidePannel from "@/hooks/useSidePannel";
import { useQuestion } from "@/context/question";
import { useRecord } from "@/context/record";

import RecordingTime from "./RecordingTime";
import InterviewerScreen from "./InterviewerScreen";
import IntervieweeScreen from "./IntervieweeScreen";
import Caption from "./Caption";
import CurrentTime from "./CurrentTime";
import ControlButton from "./ControlButton";
import CallEndButton from "./CallEndButton";
import SidePannelButton from "./SidePannelButton";

function InterviewCall() {
  const {
    currentQuestion,
    prevQuestion,
    nextQuestion,
    addQuestionHistory,
    isFirstQuestion,
    isLastQuestion,
  } = useQuestion();

  const [isCaptionOpen, setIsCaptionOpen] = useState<boolean>(false);
  const toggleCaption = () => {
    setIsCaptionOpen((open) => !open);
  };

  const {
    sidePannelTopic,
    isSidePannelOpen,
    handleSidePannel,
    closeSidePannel,
  } = useSidePannel<SidePannelTopic>();

  const { isRecording, toggleRecording, recordTime } = useRecord();

  useEffect(() => {
    if (isRecording) {
      addQuestionHistory({ time: recordTime, question: currentQuestion });
    }
  }, [isRecording, addQuestionHistory, recordTime, currentQuestion]);

  return (
    <main className="flex h-screen w-full flex-col justify-between overflow-hidden bg-gray-950">
      <div className="relative mx-4 mt-4 flex grow items-center justify-center">
        <RecordingTime />

        <div
          className={`${isSidePannelOpen ? "mr-[376px]" : ""} flex gap-4 transition-all duration-500`}
        >
          <InterviewerScreen />
          <IntervieweeScreen />
        </div>

        <InterviewSidePannel
          topic={sidePannelTopic ?? undefined}
          open={isSidePannelOpen}
          onClose={closeSidePannel}
        />

        <Caption open={isCaptionOpen} text={currentQuestion} />
      </div>

      <div className="mx-3 flex h-[80px] items-center justify-between">
        <CurrentTime />

        <div className="flex gap-2">
          <ControlButton
            title={isCaptionOpen ? "자막 끄기" : "자막 켜기"}
            icon="caption"
            color="blue"
            active={isCaptionOpen}
            onClick={toggleCaption}
          />
          <ControlButton
            title="이전 질문"
            icon="prev"
            disabled={isFirstQuestion}
            onClick={prevQuestion}
          />
          <ControlButton
            title="다음 질문"
            icon="next"
            disabled={isLastQuestion}
            onClick={nextQuestion}
          />
          <ControlButton
            title={isRecording ? "녹화 일시중지" : "녹화 재개"}
            icon="record"
            active={isRecording}
            onClick={toggleRecording}
          />
          <CallEndButton />
        </div>

        <div className="flex">
          <SidePannelButton
            title="질문 목록"
            icon="list"
            active={sidePannelTopic === "question-list"}
            onClick={() => {
              handleSidePannel("question-list");
            }}
          />
          <SidePannelButton
            title="질문 기록"
            icon="history"
            active={sidePannelTopic === "question-history"}
            onClick={() => {
              handleSidePannel("question-history");
            }}
          />
        </div>
      </div>
    </main>
  );
}

export default InterviewCall;
