import interviewerImage from "@/assets/interviewer.png";

function InterviewerScreen() {
  return (
    <div className="flex-1/2">
      <img
        className="aspect-video h-full w-full rounded-2xl object-cover object-top select-none"
        src={interviewerImage}
        alt="면접관 사진"
      />
    </div>
  );
}

export default InterviewerScreen;
