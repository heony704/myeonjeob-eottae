interface Props extends React.PropsWithChildren {
  title: string;
}

function Tooltip({ title, children }: Props) {
  return (
    <div className="group relative">
      {children}
      <div className="invisible absolute -top-7 left-1/2 z-10 -translate-x-1/2 rounded-sm bg-gray-800 px-2 py-[0.125rem] text-sm whitespace-nowrap text-gray-300 opacity-0 transition-opacity select-none group-hover:visible group-hover:opacity-100">
        {title}
      </div>
    </div>
  );
}

export default Tooltip;
