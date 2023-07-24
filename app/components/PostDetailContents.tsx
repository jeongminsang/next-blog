'use client';

import React, { useEffect } from 'react';
import hljs from 'highlight.js';

import 'highlight.js/styles/github-dark.css';

const PostDetailContent = ({ content }: any) => {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: content }}></div>;
};

export default PostDetailContent;
