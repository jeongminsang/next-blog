"use client";

import React, { useEffect } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/github-dark.css";
import { motion } from "framer-motion";

const PostDetailContent = ({ content }: { content: string }) => {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <motion.div
      className="markdown-body p-[10px] w-full mx-auto"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export default PostDetailContent;
