import {
  IoArrowBack,
  IoEllipsisVertical,
  IoChevronBackOutline,
  IoChevronForwardOutline,
} from "react-icons/io5";
import {
  MdOutlineArchive,
  MdOutlineMarkEmailUnread,
  MdOutlineDriveFileMove,
} from "react-icons/md";
import {
  PiWarningOctagonBold,
  PiPrinterBold,
  PiArrowBendUpLeftBold,
} from "react-icons/pi";
import { FiTrash2 } from "react-icons/fi";
import { LuSquareArrowOutUpRight } from "react-icons/lu";
import { FaRegStar } from "react-icons/fa";
import { FaRegFaceSmile } from "react-icons/fa6";
import {
  formatKoreanFullDateTime,
  formatKoreanScheduleTime,
} from "@/utils/date";
import interviewerThumbnail from "@/assets/interviewer_thumbnail.gif";

const INTERVIEWER = "면접어때";
const INTERVIEWER_EMAIL = "heony704@gmail.com";
const INTERVIEW_LINK = "https://meet.google.com/He0Ny7o4";

function InterviewMail() {
  const now = new Date();

  const interviewDate = new Date(now.getTime() + 1 * 60 * 60 * 1000); // 1시간 후
  const formattedInterviewDate = formatKoreanScheduleTime(interviewDate);

  const receivedDate = new Date(now.getTime() - (3 * 24 + 9) * 60 * 60 * 1000); // 3일 9시간 전
  const formattedReceivedDate = formatKoreanFullDateTime(receivedDate);

  return (
    <section className="w-full max-w-3xl rounded-2xl bg-white p-5 shadow-lg">
      {/* 상단 헤더 */}
      <div className="flex justify-between text-gray-500">
        <div className="flex items-center gap-5">
          <div className="w-[30px]">
            <IoArrowBack size={20} />
          </div>
          <div className="flex items-center gap-5">
            <MdOutlineArchive size={20} />
            <PiWarningOctagonBold size={20} />
            <FiTrash2 size={20} />
          </div>
          <div className="h-full w-[1px] bg-gray-200" />
          <div className="flex items-center gap-5">
            <MdOutlineMarkEmailUnread size={20} />
            <MdOutlineDriveFileMove size={20} />
            <IoEllipsisVertical size={18} />
          </div>
        </div>
        <div className="flex items-center gap-5">
          <span className="text-xs leading-0">977개 중 4개 </span>
          <IoChevronBackOutline size={18} />
          <IoChevronForwardOutline size={18} />
        </div>
      </div>

      {/* 메일 제목 */}
      <div className="mt-6 ml-[50px] flex items-center justify-between">
        <h2 className="text-2xl">
          [{INTERVIEWER}] 화상 면접 일정 안내드립니다
        </h2>
        <div className="flex items-center gap-5 text-gray-500">
          <PiPrinterBold size={20} />
          <LuSquareArrowOutUpRight size={18} />
        </div>
      </div>

      {/* 메일 정보 */}
      <div className="mt-3 flex items-center gap-5">
        <img
          className="h-[30px] w-[30px] rounded-full bg-blue-300 object-contain"
          src={interviewerThumbnail}
          alt="메일 송신자 썸네일"
        />

        <div className="flex grow items-center justify-between">
          <div className="flex items-center gap-1">
            <span className="text-sm font-bold">{INTERVIEWER}</span>
            <span className="text-xs leading-0 text-gray-500">
              {`<${INTERVIEWER_EMAIL}>`}
            </span>
          </div>
          <div className="flex items-center gap-5 text-gray-500">
            <span className="text-xs leading-0">{formattedReceivedDate}</span>
            <FaRegStar />
            <FaRegFaceSmile />
            <PiArrowBendUpLeftBold />
            <IoEllipsisVertical />
          </div>
        </div>
      </div>

      {/* 메일 내용 */}
      <div className="mt-3 mb-6 ml-[50px]">
        <p>안녕하세요, 지원자님.</p>
        <p>{INTERVIEWER}입니다.</p>
        <br className="leading-[50%]" />
        <p>
          저희 {INTERVIEWER}에 관심을 가지고 지원해 주셔서 진심으로
          감사드립니다.
        </p>
        <p>
          지원자님을 더 깊이 알아보고자 아래와 같이 면접 일정을 안내드립니다.
        </p>
        <br />
        <p>• 면접 일시: {formattedInterviewDate}</p>
        <p>• 면접 방식: 1:1 화상 면접 (질의응답 중심)</p>
        <p>
          • 접속 링크: <span className="text-blue-600">{INTERVIEW_LINK}</span>
        </p>
        <br />
        <p>
          면접과 관련하여 궁금하신 점이 있으시면 언제든 편하게 연락 주시기
          바랍니다.
        </p>
        <p>지원자님과의 만남을 기대하며, 면접에서 뵙겠습니다.</p>
        <br />
        <p>감사합니다.</p>
        <p>{INTERVIEWER} 드림</p>
      </div>
    </section>
  );
}

export default InterviewMail;
