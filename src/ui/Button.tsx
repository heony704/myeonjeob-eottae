type Variant = "basic" | "outline";
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

const VARIANT_STYLE: Record<Variant, string> = {
  basic:
    "bg-blue-600 text-white hover:bg-blue-500 active:bg-blue-400 font-medium",
  outline:
    "border border-blue-600 text-blue-600 hover:bg-blue-50 active:bg-blue-100 font-semibold",
};

function Button({
  variant = "basic",
  className = "",
  children,
  ...rest
}: Props) {
  return (
    <button
      className={`${className} ${VARIANT_STYLE[variant]} flex cursor-pointer items-center justify-center px-6 transition-colors disabled:pointer-events-none disabled:bg-gray-400`}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
