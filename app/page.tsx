import {
  MainContainer,
  Title,
  ResumeImg,
  SubTitle,
  Contents,
} from "./styles/pages/Home";

export default function Home() {
  return (
    <MainContainer>
      <ResumeImg
        width={1000}
        height={1000}
        alt='프로필 사진'
        src='/me.jpg'
        draggable={false}
        priority
      />
      <Title>Minsang Jeong</Title>
      <SubTitle>프론트엔드 개발자 정민상입니다.</SubTitle>
      <Contents>
        저는 TypeScript, React, Next.js 에 관심이 많습니다.
        <br />
        문제를 마주하면 항상 깊은 고뇌와 근본적인 원인을 찾으려고 노력합니다.
        <br />
        독서와 운동을 좋아합니다.
        <br />
        <br />
      </Contents>
    </MainContainer>
  );
}
