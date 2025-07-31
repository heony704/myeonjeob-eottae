import { useState } from "react";
import { useInterviewMode } from "@/context/interviewMode";
import { useRecord } from "@/context/record";

import SetupScreen from "./SetupScreen";
import StartInstruction from "./StartInstruction";

function InterviewSetup() {
  const { setInterviewMode } = useInterviewMode();
  const { startRecording } = useRecord();
  const [isStartLoading, setIsStartLoading] = useState<boolean>(false);

  const startInterview = async () => {
    setIsStartLoading(true);

    try {
      await startRecording();
      setInterviewMode("call");
    } finally {
      setIsStartLoading(false);
    }
  };

  return (
    <main className="flex h-screen items-center justify-center gap-20 px-20">
      <SetupScreen isLoading={isStartLoading} />
      <StartInstruction onStart={startInterview} isLoading={isStartLoading} />
    </main>
  );
}

export default InterviewSetup;
