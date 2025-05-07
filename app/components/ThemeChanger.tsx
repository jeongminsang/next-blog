"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const rotateUp = keyframes`
  from { transform: rotate(180deg); }
  to { transform: rotate(360deg); }
`;

const rotateDown = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(180deg); }
`;

export default function ThemeToggleButton() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || theme === undefined) {
    return <ToggleButton />;
  }

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ToggleButton onClick={toggleTheme} aria-hidden='true'>
      <ThemeIcons $icontype={"sun"} $thememode={theme}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          height='24px'
          viewBox='0 -960 960 960'
          width='24px'
          fill='#222222'
        >
          <path d='M480-280q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Z' />
        </svg>
      </ThemeIcons>
      <ThemeIcons $icontype={"moon"} $thememode={theme}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          height='24px'
          viewBox='0 -960 960 960'
          width='24px'
          fill='#FFFFFF'
        >
          <path d='M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Z' />
        </svg>
      </ThemeIcons>
    </ToggleButton>
  );
}

const ToggleButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 50px;
  height: 50px;
  margin-left: 5px;
  background-color: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
`;

export const ThemeIcons = styled.div<{
  $icontype: "sun" | "moon";
  $thememode: string;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  transform-origin: 50% 200%;
  position: absolute;
  svg {
    transition: fill 0.5s, transform 0.5s ease;
  }
  &:hover svg {
    fill: ${({ $thememode }) =>
      $thememode === "light" ? `#FFA500;` : `gold;`};
    transform: scale(1.2);
  }
  animation: ${({ $icontype, $thememode }) => {
      if ($thememode === "light" || $thememode === "system") {
        return $icontype === "sun" ? rotateUp : rotateDown;
      } else {
        return $icontype === "sun" ? rotateDown : rotateUp;
      }
    }}
    1s forwards;
`;
