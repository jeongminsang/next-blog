import Link from "next/link";
import { HTMLProps } from "react";
import styled from "styled-components";

type LinkProps = {
  href: string;
  children: React.ReactNode;
  target?: string;
  rest?: HTMLProps<HTMLAnchorElement>;
  onMouseEnter?: React.MouseEventHandler<HTMLAnchorElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLAnchorElement>;
  $isactive?: boolean;
  $hashcount?: number;
};

const CustomLink = ({ href, children, ...props }: LinkProps) => {
  return (
    <StyledLink href={href} {...props}>
      {children}
    </StyledLink>
  );
};

const StyledLink = styled(Link)<{ $isactive?: boolean; $hashcount?: number }>`
  display: block;
  text-decoration: none;
  color: var(--toc--cr);
  border-radius: 5px;
  padding-left: ${({ $hashcount }) => ($hashcount ? $hashcount * 10 : 0)}px;
  font-size: ${({ $isactive }) => ($isactive ? "15px" : "14px")};
  &:hover {
    color: var(--text--color);
  }
`;

export default CustomLink;
