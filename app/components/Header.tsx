"use client";

import { MainContainer, HeaderTitle, CustomImage, BlackThemeIcons, LightThemeIcons } from '../styles/components/Header';
import { useRouter } from 'next/navigation'

const Header = () => {
  const router = useRouter()
  const themeModeHandle = (e: React.MouseEvent<HTMLImageElement>) => {
    e.preventDefault();
    const newTheme = localStorage.theme === 'dark' ? 'light' : 'dark';
    localStorage.theme = newTheme;
    document.body.dataset.theme = newTheme;
  };

  const goHomeHandle = () => {
    router.push('/');
  }

  const goGitHubHandle = () => {
    window.open('https://github.com/jeongminsang')
  }

  return (
    <MainContainer>
      <HeaderTitle onClick={goHomeHandle}>minsang.dev</HeaderTitle>
      <BlackThemeIcons>
        <CustomImage onClick={themeModeHandle}
          width={40}
          height={40}
          alt="밝은 모드로 변경"
          src="/sunny.svg"
        />
        <CustomImage onClick={goGitHubHandle}
          width={40}
          height={40}
          alt="GitHub-White"
          src="/github-mark-white.svg"
        />
      </BlackThemeIcons>
      <LightThemeIcons>
        <CustomImage onClick={themeModeHandle}
          width={40}
          height={40}
          alt="어두운 모드로 변경"
          src="/dark.svg"
        />
        <CustomImage onClick={goGitHubHandle}
          width={40}
          height={40}
          alt="GitHub-Black"
          src="/github-mark.svg"
        />
      </LightThemeIcons>
    </MainContainer>
  )
}
export default Header;