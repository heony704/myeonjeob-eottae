interface Props {
  open: boolean;
  text: string;
}

function Caption({ open, text }: Props) {
  return (
    <div
      className={`${open ? "block" : "hidden"} absolute bottom-4 mx-auto flex rounded-sm bg-gray-900/60 px-3 py-1`}
    >
      <span className="text-xl text-white">{text}</span>
    </div>
  );
}

export default Caption;
