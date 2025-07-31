import { Button } from "@/ui";
import { useMedia } from "@/context/media";

function AllMediaRequest() {
  const { toggleAudioAndVideo } = useMedia();

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-2xl text-white">
        회의에서 참여자들이 나를 보고 듣도록 하시겠습니까?
      </p>
      <Button className="h-9 rounded-sm text-sm" onClick={toggleAudioAndVideo}>
        마이크 및 카메라 허용
      </Button>
    </div>
  );
}

export default AllMediaRequest;
