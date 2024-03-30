'use client'

import { useEffect, useRef } from 'react';
import 'dayjs/locale/ko';
import dayjs from 'dayjs';
import readingTime from 'reading-time';
import { MainSection, PostSection, PostTitle, PostInfo, TagAside, TOCAside, GiscusContainer } from "../styles/pages/DetailDataPage"
import PostDetailContent from './PostDetailContents';
import TOC from './TOC';
// import { useObserver } from '../hooks/useObserver'

const PostContainer = ({ meta, content, markdowncontent }: any) => {
  // const top = useRef(null);
  // const boxRefs = Array.from({ length: 5 }, (_, index) => useRef(null));

  // const observeBox = useObserver();

  // useEffect(() => {
  //   boxRefs.forEach((boxRef) => {
  //     observeBox(boxRef.current);
  //   });
  // }, [observeBox, boxRefs]);
  return (
    <MainSection>
      <TagAside></TagAside>
      <PostSection>
        <title title={meta.title}>{meta.title}</title>
        {/* <div ref={top} /> */}
        <PostTitle>{meta.title}</PostTitle>
        <PostInfo>📅 {dayjs(meta.date).locale("ko").format("YYYY년 M월 D일")}</PostInfo>
        <PostInfo>⌛ 약 {Math.ceil(readingTime(markdowncontent).minutes)}분</PostInfo>
        <div className="indicator">
          <PostDetailContent content={content} />
        </div>
      </PostSection>
      <TOCAside>
        <TOC content={markdowncontent} />
      </TOCAside>
    </MainSection>
  )
};

export default PostContainer;