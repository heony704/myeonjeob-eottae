import { Button } from "@/ui";
import { useMedia } from "@/context/media";

interface Props {
  onStart: () => void;
  isLoading?: boolean;
}

function StartInstruction({ onStart, isLoading = false }: Props) {
  const { isAudioActive, isVideoActive } = useMedia();

  if (isLoading) {
    return (
      <section className="flex flex-col items-center gap-2">
        <h2 className="text-3xl">면접을 시작 중입니다.</h2>
        <h2 className="text-3xl">잠시만 기다려주세요...</h2>
      </section>
    );
  }

  return (
    <section className="flex flex-col items-center gap-10">
      <div className="flex flex-col gap-1 text-center text-3xl">
        <h2>시작하기 위해,</h2>
        <h2>마이크와 카메라를 허용해주세요.</h2>
      </div>

      <Button
        className="h-14 w-[240px] rounded-full"
        onClick={onStart}
        disabled={!isAudioActive || !isVideoActive}
      >
        면접 시작
      </Button>
    </section>
  );
}

export default StartInstruction;
