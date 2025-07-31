import { InterviewModeProvider } from "@/context/interviewMode";
import { QuestionProvider } from "@/context/question";
import { MediaProvider } from "@/context/media";
import { RecordProvider } from "@/context/record";

import InterviewStep from "./InterviewStep";

function Interview() {
  return (
    <InterviewModeProvider>
      <QuestionProvider>
        <MediaProvider>
          <RecordProvider>
            <InterviewStep />
          </RecordProvider>
        </MediaProvider>
      </QuestionProvider>
    </InterviewModeProvider>
  );
}

export default Interview;
