import Link from "next/link";
import { HTMLProps } from "react";

type LinkProps = {
  href: string;
  children: React.ReactNode;
  target?: string;
  props?: HTMLProps<HTMLAnchorElement>;
  onMouseEnter?: React.MouseEventHandler<HTMLAnchorElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLAnchorElement>;
  $isactive?: boolean;
  $hashcount?: number;
};

const CustomLink = ({
  href,
  children,
  $isactive,
  $hashcount,
  ...props
}: LinkProps) => {
  return (
    <Link
      href={href}
      className={`block no-underline transition-all duration-200 font-mono ${
        $isactive
          ? "text-white text-[15px] font-semibold opacity-100"
          : "text-white/50 text-[14px] hover:opacity-30"
      }`}
      style={{ paddingLeft: $hashcount ? `${$hashcount * 10}px` : "0px" }}
      {...props}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
