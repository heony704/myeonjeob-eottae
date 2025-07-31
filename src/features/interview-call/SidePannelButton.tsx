import {
  MdChatBubble,
  MdInfo,
  MdOutlineChat,
  MdOutlineInfo,
} from "react-icons/md";
import { Tooltip } from "@/ui";

type IconType = "list" | "history";
interface Props {
  title: string;
  icon: IconType;
  active: boolean;
  onClick: () => void;
}
type IconByType = Record<
  IconType,
  { active: React.ReactElement; inactive: React.ReactElement }
>;

const ICON: IconByType = {
  list: {
    active: <MdInfo />,
    inactive: <MdOutlineInfo />,
  },
  history: {
    active: <MdChatBubble />,
    inactive: <MdOutlineChat />,
  },
};

function SidePannelButton({ title, icon, active, onClick }: Props) {
  return (
    <Tooltip title={title}>
      <button
        className={`${active ? "text-blue-200" : "text-white"} flex h-12 w-12 cursor-pointer items-center justify-center rounded-full text-2xl transition-colors hover:bg-white/10 active:bg-blue-400/10`}
        onClick={onClick}
      >
        {active ? ICON[icon].active : ICON[icon].inactive}
      </button>
    </Tooltip>
  );
}

export default SidePannelButton;
