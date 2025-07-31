import { useRecord } from "@/context/record";

interface Props {
  videoRef: React.Ref<HTMLVideoElement>;
}

function RecordScreen({ videoRef }: Props) {
  const { recordURL } = useRecord();

  if (!recordURL) {
    return null;
  }

  return (
    <div className="flex-1/2">
      <video
        className="aspect-video h-full w-full rounded-2xl bg-gray-900 object-cover"
        ref={videoRef}
        controls
        src={recordURL}
      />
    </div>
  );
}

export default RecordScreen;
