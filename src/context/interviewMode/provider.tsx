import { useMemo, useState } from "react";
import { InterviewMode, InterviewModeContext } from "./context";

function InterviewModeProvider({ children }: React.PropsWithChildren) {
  const [interviewMode, setInterviewMode] = useState<InterviewMode>("setup");

  const context = useMemo(
    () => ({
      interviewMode,
      setInterviewMode,
    }),
    [interviewMode, setInterviewMode],
  );

  return (
    <InterviewModeContext.Provider value={context}>
      {children}
    </InterviewModeContext.Provider>
  );
}

export default InterviewModeProvider;
