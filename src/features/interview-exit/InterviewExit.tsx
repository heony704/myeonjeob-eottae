import { useState } from "react";
import { Button, LinkButton } from "@/ui";
import { useInterviewMode } from "@/context/interviewMode";
import { useQuestion } from "@/context/question";
import { useRecord } from "@/context/record";
import { useMedia } from "@/context/media";
import useVideo from "@/hooks/useVideo";

import RecordScreen from "./RecordScreen";
import RecordTimestamp from "./RecordTimestamp";

function InterviewExit() {
  const [isRestartLoading, setIsRestartLoading] = useState<boolean>(false);
  const { startRecording, recordURL } = useRecord();
  const { videoRef, moveTime, currentTime } = useVideo();
  const { setInterviewMode } = useInterviewMode();
  const { resetQuestion } = useQuestion();
  const { toggleAudioAndVideo } = useMedia();

  const isRecordExist = recordURL !== null;

  const retryInterview = async () => {
    setIsRestartLoading(true);

    try {
      await toggleAudioAndVideo();
      await startRecording();
      resetQuestion();
      setInterviewMode("call");
    } finally {
      setIsRestartLoading(false);
    }
  };

  return (
    <main className="flex h-screen flex-col items-center gap-10 p-6 pt-22">
      <h2 className="text-4xl">회의에서 나왔음</h2>

      {isRecordExist && (
        <div className="flex w-full max-w-7xl gap-5">
          <RecordScreen videoRef={videoRef} />
          <RecordTimestamp currentTime={currentTime} moveVideoTime={moveTime} />
        </div>
      )}

      <div className="flex gap-3">
        <Button
          variant="outline"
          className="h-10 rounded-full"
          onClick={retryInterview}
          isLoading={isRestartLoading}
        >
          면접 다시 참여하기
        </Button>
        <LinkButton className="h-10 rounded-full" to="/">
          홈 화면으로 돌아가기
        </LinkButton>
      </div>
    </main>
  );
}

export default InterviewExit;
