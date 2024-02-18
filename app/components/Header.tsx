"use client";

import { useRouter, usePathname } from 'next/navigation';
import stylex from '@stylexjs/stylex';
import Image from "next/image";

const Header = () => {
  const router = useRouter()
  const themeModeHandle = (e: React.MouseEvent<HTMLImageElement>) => {
    e.preventDefault();
    const newTheme = localStorage.theme === 'dark' ? 'light' : 'dark';
    localStorage.theme = newTheme;
    document.body.dataset.theme = newTheme;
  };
  const params = usePathname();

  const goHomeHandle = () => {
    router.push('/');
  }
  const goBlogHandle = () => {
    router.push('/blog');
  }
  const goProjectHandle = () => {
    router.push('/projects');
  }

  const goGitHubHandle = () => {
    window.open('https://github.com/jeongminsang')
  }

  return (
    <div {...stylex.props(style.MainContainer)}>
      <h4 {...stylex.props(style.HeaderTitle)} onClick={goHomeHandle}>minsang.dev</h4>
      <div {...stylex.props(style.SideButtons)}>
        <div {...stylex.props(style.RouterButtons)}>
          <div {...stylex.props(style.RouterButton(params === '/blog' ? 'true' : 'false'))} onClick={goBlogHandle}>blog</div>
          <div {...stylex.props(style.RouterButton(params === '/projects' ? 'true' : 'false'))} onClick={goProjectHandle}>projects</div>
        </div>
        <div {...stylex.props(style.BlackThemeIcons)}>
          <Image {...stylex.props(style.CustomImage)} onClick={themeModeHandle}
            width={40}
            height={40}
            alt="밝은 모드로 변경"
            src="/sunny.svg"
          />
          <Image {...stylex.props(style.CustomImage)} onClick={goGitHubHandle}
            width={40}
            height={40}
            alt="GitHub-White"
            src="/github-mark-white.svg"
          />
        </div>
        <div {...stylex.props(style.LightThemeIcons)}>
          <Image {...stylex.props(style.CustomImage)} onClick={themeModeHandle}
            width={40}
            height={40}
            alt="어두운 모드로 변경"
            src="/dark.svg"
          />
          <Image {...stylex.props(style.CustomImage)} onClick={goGitHubHandle}
            width={40}
            height={40}
            alt="GitHub-Black"
            src="/github-mark.svg"
          />
        </div>
      </div>


    </div>
  )
}
export default Header;

const MEDIA_MOBILE = '@media (max-width: 800px)' as const;

const style = stylex.create({
  MainContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: {
      default: '800px',
      [MEDIA_MOBILE]: '100%'
    },
    height: '70px',
    margin: '0 auto',
  },
  HeaderTitle: {
    padding: '10px',
    borderRadius: '5px',
    cursor: 'pointer',
    backgroundColor: {
      ':hover': 'var(--hv-cr);',
    },
    transitionProperty: 'background-color',
    transitionDuration: '200ms',
  },
  SideButtons: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: '70px',
    margin: '0 auto',
    width: {
      default: '800px',
      [MEDIA_MOBILE]: '100%'
    },
  },
  RouterButtons: {
    display: 'flex',
    flexDirection: 'row',
    borderRadious: '5px',
  },
  RouterButton: (params) => ({
    fontSize: '17px',
    padding: '8px',
    margin: '5px',
    backgroundColor: {
      default: 'rgba(0, 0, 0, 0)',
      ':hover': 'var(--hv-cr);',
    },
    color: params === "true" ? "var(--text--color)" : "grey",
    borderRadious: '5px',
    cursor: 'pointer',
    transitionProperty: 'background-color',
    transitionDuration: '200ms',
  }),
  BlackThemeIcons: {
    display: 'var(--dis--light)',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: '10px',
    margin: '10px 0px 10px 0px',
  },
  LightThemeIcons: {
    display: 'var(--dis--black)',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: '10px',
    margin: '10px 0px 10px 0px',
  },
  CustomImage: {
    margin: '10px',
    padding: '5px',
    borderRadius: '5px',
    cursor: 'pointer',
    backgroundColor: {
      ':hover': 'var(--hv-cr)',
    },
    transitionProperty: 'background-color',
    transitionDuration: '200ms',
  },
});