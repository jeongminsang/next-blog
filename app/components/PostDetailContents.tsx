'use client';

import React, { useEffect, useRef } from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/github-dark.css';
import { PostContents } from '../styles/pages/DetailDataPage'
import { useIntersectionObserver } from '../hooks/useObserver'

const PostDetailContent = ({ content }: { content: string }) => {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  const contentRef = useRef();

  const onIntersect = (target: any) => {
    // Handle intersection logic here
    console.log('Content is intersecting!', target);
  };

  // Use the custom hook with the contentRef
  useIntersectionObserver(contentRef, onIntersect, { threshold: 0.5, once: true });

  // const targetRef = useObserver();

  return <div id='name' ref={contentRef} className='indicator'><PostContents id='name2' dangerouslySetInnerHTML={{ __html: content }}></PostContents></div>;
};

export default PostDetailContent;
