"use client";

import {
  MainContainer,
  HeaderTitle,
  SideButtons,
  RouterButtons,
  RouterButton,
  CustomImage,
  BlackThemeIcons,
  LightThemeIcons,
} from "../styles/components/Header";
import { useRouter, usePathname } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const themeModeHandle = (e: React.MouseEvent<HTMLImageElement>) => {
    e.preventDefault();
    const newTheme = localStorage.theme === "dark" ? "light" : "dark";
    localStorage.theme = newTheme;
    document.body.dataset.theme = newTheme;
  };
  const params = usePathname();

  const goHomeHandle = () => {
    router.push("/");
  };
  const goBlogHandle = () => {
    router.push("/blog");
  };
  const goProjectHandle = () => {
    router.push("/projects");
  };

  const goGitHubHandle = () => {
    window.open("https://github.com/jeongminsang");
  };

  return (
    <MainContainer>
      <HeaderTitle onClick={goHomeHandle}>minsang.dev</HeaderTitle>
      <SideButtons>
        <RouterButtons>
          <RouterButton
            onClick={goBlogHandle}
            params={params.includes("blog") ? "true" : "false"}
          >
            blog
          </RouterButton>
          <RouterButton
            onClick={goProjectHandle}
            params={params.includes("projects") ? "true" : "false"}
          >
            projects
          </RouterButton>
        </RouterButtons>
        <BlackThemeIcons>
          <CustomImage
            onClick={themeModeHandle}
            width={40}
            height={40}
            alt='밝은 모드로 변경'
            src='/sunny.svg'
          />
          <CustomImage
            onClick={goGitHubHandle}
            width={40}
            height={40}
            alt='GitHub-White'
            src='/github-mark-white.svg'
          />
        </BlackThemeIcons>
        <LightThemeIcons>
          <CustomImage
            onClick={themeModeHandle}
            width={40}
            height={40}
            alt='어두운 모드로 변경'
            src='/dark.svg'
          />
          <CustomImage
            onClick={goGitHubHandle}
            width={40}
            height={40}
            alt='GitHub-Black'
            src='/github-mark.svg'
          />
        </LightThemeIcons>
      </SideButtons>
    </MainContainer>
  );
};
export default Header;
