import { Tooltip } from "@/ui";
import { MdOutlineClosedCaption, MdPause } from "react-icons/md";
import { PiCaretLeftFill, PiCaretRightFill } from "react-icons/pi";
import { BsRecord2 } from "react-icons/bs";

type IconType = "caption" | "prev" | "next" | "record";
type ColorType = "red" | "blue";
interface Props {
  title: string;
  icon: IconType;
  color?: "red" | "blue";
  active?: boolean;
  disabled?: boolean;
  onClick: () => void;
}
type IconByType = Record<
  IconType,
  { active?: React.ReactElement; inactive: React.ReactElement }
>;
type ColorByType = Record<ColorType, { active: string; inactive: string }>;

const ICON: IconByType = {
  caption: {
    active: <MdOutlineClosedCaption />,
    inactive: <MdOutlineClosedCaption />,
  },
  prev: {
    inactive: <PiCaretLeftFill />,
  },
  next: {
    inactive: <PiCaretRightFill />,
  },
  record: {
    active: <MdPause size={20} />,
    inactive: <BsRecord2 size={28} />,
  },
};
const COLOR: ColorByType = {
  red: {
    active:
      "rounded-xl bg-red-200 text-red-900 hover:bg-red-300 active:bg-red-100",
    inactive:
      "rounded-full bg-gray-800 text-gray-300 hover:bg-gray-700 active:bg-gray-600",
  },
  blue: {
    active:
      "rounded-xl bg-blue-200 text-blue-900 hover:bg-blue-300 active:bg-blue-100",
    inactive:
      "rounded-full bg-gray-800 text-gray-300 hover:bg-gray-700 active:bg-gray-600",
  },
};

function ControlButton({
  title,
  icon,
  color = "red",
  active = false,
  disabled = false,
  onClick,
}: Props) {
  return (
    <Tooltip title={title}>
      <button
        className={`${active ? COLOR[color].active : COLOR[color].inactive} flex h-12 w-14 cursor-pointer items-center justify-center text-2xl transition-all disabled:pointer-events-none disabled:opacity-50`}
        disabled={disabled}
        onClick={onClick}
      >
        {active ? ICON[icon].active : ICON[icon].inactive}
      </button>
    </Tooltip>
  );
}

export default ControlButton;
