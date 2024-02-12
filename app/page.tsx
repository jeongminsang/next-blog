import stylex from '@stylexjs/stylex';
import Image from "next/image";

export default function Home() {
  return (
    <div {...stylex.props(style.MainContainer)}>
      <Image
        {...stylex.props(style.ResumeImg)}
        width={1000}
        height={1000}
        alt="프로필 사진"
        src="/me.jpg"
        draggable={false}
      />
      <h1 {...stylex.props(style.Title)}>Minsang Jeong</h1>
      <h3 {...stylex.props(style.SubTitle)}>프론트엔드 개발자 정민상입니다.</h3>
      <p {...stylex.props(style.Contents)}>
        저는 TypeScript, React, Next.js 에 관심이 많습니다.
        <br />
        문제를 마주하면 항상 깊은 고뇌와 근본적인 원인을 찾으려고 노력합니다.
        <br />
        요즘 독서와 운동을 즐겨하고 있습니다.
        <br />
        <br />
        Contact 은 오른쪽 하단 버튼을 이용해 주세요.
      </p>
    </div>
  )
}

const style = stylex.create({
  MainContainer: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '800px',
    width: '100%',
    margin: '0 auto',
  },
  Title: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '26px',
    marginBottom: '10px',
    paddingLeft: '10px',
    paddingRight: '10px',
  },
  ResumeImg: {
    display: 'flex',
    alignSelf: 'center',
    borderRadius: '1000px',
    width: '300px',
    height: '300px',
  },
  SubTitle: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '0px',
    marginBottom: '10px',
    paddingLeft: '10px',
    paddingRight: '10px',
    fontWeight: 100,
  },
  Contents: {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
  }
});