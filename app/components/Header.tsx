"use client";

import { MainContainer, HeaderIcons, CustomImage } from '../styles/components/Header';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const Header = () => {
  const [DarkModeToggle, SetdarkModeToggle] = useState<'dark' | 'light'>('dark')
  const themeModeHandle = (e: any) => {
    e.preventDefault();
    SetdarkModeToggle(DarkModeToggle === 'dark' ? 'light' : 'dark')
  };
  useEffect(() => {
    document.body.dataset.theme = DarkModeToggle
  }, [DarkModeToggle])
  return (
    <MainContainer>
      <h4>minsang.dev</h4>
      {DarkModeToggle === 'dark' ?
        <HeaderIcons>
          <CustomImage onClick={themeModeHandle}
            width={40}
            height={40}
            alt="밝은 모드로 변경"
            src="/sunny.svg"
          />
          <CustomImage
            width={30}
            height={30}
            alt="GitHub2"
            src="/github-mark-white.svg"
          />
        </HeaderIcons>
        :
        <HeaderIcons>
          <CustomImage onClick={themeModeHandle}
            width={40}
            height={40}
            alt="어두운 모드로 변경"
            src="/dark.svg"
          />
          <CustomImage
            width={30}
            height={30}
            alt="GitHub"
            src="/github-mark.svg"
          />
        </HeaderIcons>
      }
    </MainContainer>
  )
}
export default Header;