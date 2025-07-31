import { Link, LinkProps } from "react-router";

type Variant = "basic" | "outline";
interface Props extends LinkProps {
  variant?: Variant;
}

const VARIANT_STYLE: Record<Variant, string> = {
  basic:
    "bg-blue-600 text-white hover:bg-blue-500 active:bg-blue-400 font-medium",
  outline:
    "border border-blue-600 text-blue-600 hover:bg-blue-50 active:bg-blue-100 font-semibold",
};

function LinkButton({
  variant = "basic",
  className = "",
  children,
  ...rest
}: Props) {
  return (
    <Link
      className={`${className} ${VARIANT_STYLE[variant]} flex cursor-pointer items-center justify-center px-6 transition-colors`}
      {...rest}
    >
      {children}
    </Link>
  );
}

export default LinkButton;
