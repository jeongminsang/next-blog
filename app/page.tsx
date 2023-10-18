import { MainContainer, Title, ResumeImg, SubTitle, Contents } from "./styles/pages/Home"

export default function Home() {
  return (
    <MainContainer>
      <ResumeImg
        width={1000}
        height={1000}
        alt="프로필 사진"
        src="/me.jpg"
      />
      <Title>Minsang Jeong</Title>
      <SubTitle>프론트엔드 개발자 정민상입니다.</SubTitle>
      <Contents>
        저는 TypeScript, React, Next.js 에 관심이 많습니다.
        <br />
        문제를 마주하면 항상 깊은 고뇌와 근본적인 원인을 찾으려고 노력합니다.
        <br />
        요즘 독서와 운동을 즐겨하고 있습니다.
        <br />
        <br />
        Contact 은 오른쪽 하단 버튼을 이용해 주세요.
      </Contents>
    </MainContainer>
  )
}
