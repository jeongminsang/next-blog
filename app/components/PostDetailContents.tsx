'use client';

import React, { useEffect } from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/github-dark.css';
import { PostContents } from '../styles/pages/DetailDataPage'

const PostDetailContent = ({ content }: any) => {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return <PostContents dangerouslySetInnerHTML={{ __html: content }}></PostContents>;
};

export default PostDetailContent;
