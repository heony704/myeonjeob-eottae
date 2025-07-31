import { LinkButton } from "@/ui";
import { FiArrowRight } from "react-icons/fi";
import InterviewMail from "./InterviewMail";

function InvitationSection() {
  return (
    <section className="flex flex-col items-center gap-10 bg-gray-100 py-20">
      <div className="flex flex-col gap-2 text-center">
        <h2 className="text-3xl font-bold">메일이 도착했습니다</h2>
        <p className="text-xl text-gray-700">지금 바로 연습을 시작해보세요</p>
      </div>

      <InterviewMail />

      <LinkButton className="h-14 w-[240px] gap-2 rounded-full" to="/interview">
        면접 시작하기
        <FiArrowRight size={20} />
      </LinkButton>
    </section>
  );
}

export default InvitationSection;
