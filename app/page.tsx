import {
  MainContainer,
  ResumeImg,
  SubTitle,
  Contents,
  ResumeText,
} from "./styles/pages/Home";
import { fadeIn, fadeInStagger } from "./utils/motions";

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
      <ResumeText variants={fadeInStagger} initial='hidden' animate='animate'>
        <SubTitle variants={fadeIn}>프론트엔드 개발자 정민상입니다.</SubTitle>
        <Contents variants={fadeIn}>
          저는 TypeScript, React, Next.js 에 관심이 많습니다.
          <br />
          문제를 마주하면 항상 깊은 고뇌와 근본적인 원인을 찾으려고 노력합니다.
          <br />
          독서와 운동을 좋아합니다.
          <br />
          <br />
        </Contents>
      </ResumeText>
    </MainContainer>
  );
}
