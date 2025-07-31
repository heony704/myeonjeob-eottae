import { LinkButton } from "@/ui";
import { FiArrowRight } from "react-icons/fi";
import interviewerImage from "@/assets/interviewer_alone.png";

function HeroSection() {
  return (
    <section className="flex h-96 items-center justify-center overflow-hidden bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('./assets/hero_background.png')] bg-cover bg-no-repeat bg-blend-multiply">
      <div className="relative flex w-full max-w-[1140px] px-10 text-white">
        <div className="flex flex-col items-center pl-[65%]">
          <p className="text-3xl font-extralight">나랑</p>
          <h1 className="z-10 mt-1 text-6xl font-semibold">면접어때</h1>

          <LinkButton
            className="z-10 mt-6 h-14 w-52 gap-2 rounded-full text-lg"
            to="/interview"
          >
            면접 시작하기
            <FiArrowRight size={20} />
          </LinkButton>
        </div>

        <img
          className="absolute -bottom-36 left-10 h-[400px] w-auto"
          src={interviewerImage}
          role="presentation"
          draggable={false}
        />
      </div>
    </section>
  );
}

export default HeroSection;
