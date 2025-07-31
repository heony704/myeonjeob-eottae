import Feature from "./Feature";
import featureImage1 from "@/assets/feature1.gif";
import featureImage2 from "@/assets/feature2.gif";
import featureImage3 from "@/assets/feature3.gif";

function SolutionSection() {
  return (
    <section className="flex flex-col items-center gap-20 py-20">
      <Feature
        headline="연습은 실전처럼"
        subText={`실제 화상 면접과 유사한 화면으로\n실전 상황을 미리 경험해보세요.\n익숙해진 만큼 더 자신 있게 말할 수 있어요.`}
        imageSrc={featureImage1}
        reverse
      />
      <Feature
        headline="질문을 내 방식대로"
        subText={`질문 리스트를 직접 구성할 수 있어요.\n나에게 맞는 맞춤형 면접을 설계해보세요.`}
        imageSrc={featureImage2}
      />
      <Feature
        headline="내 모습을 객관적으로"
        subText={`녹화된 영상으로 내 모습을 직접 확인하세요.\n몰랐던 습관을 발견하고,\n더 나은 면접을 준비할 수 있어요.`}
        imageSrc={featureImage3}
        reverse
      />
    </section>
  );
}

export default SolutionSection;
