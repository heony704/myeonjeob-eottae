import { useInterviewMode } from "@/context/interviewMode";
import { InterviewCall } from "@/features/interview-call";
import { InterviewExit } from "@/features/interview-exit";
import { InterviewSetup } from "@/features/interview-setup";

function InterviewStep() {
  const { interviewMode } = useInterviewMode();

  if (interviewMode === "call") {
    return <InterviewCall />;
  }

  if (interviewMode === "exit") {
    return <InterviewExit />;
  }

  return <InterviewSetup />;
}

export default InterviewStep;
