"use client";

import { useEffect } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/github-dark.css";
import { motion } from "framer-motion";

const PostDetailContent = ({ content }: { content: string }) => {
  useEffect(() => {
    hljs.highlightAll();

    // Add copy buttons to code blocks
    const preBlocks = document.querySelectorAll("pre");
    preBlocks.forEach((pre) => {
      // Prevent multiple buttons if re-rendered
      if (pre.querySelector(".copy-btn")) return;

      const copyIcon = `<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="14px" width="14px" xmlns="http://www.w3.org/2000/svg"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>`;
      const checkIcon = `<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="14px" width="14px" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>`;

      const button = document.createElement("button");
      button.className = "copy-btn";
      button.innerHTML = copyIcon;
      
      button.addEventListener("click", async () => {
        const code = pre.querySelector("code")?.innerText || "";
        try {
          await navigator.clipboard.writeText(code);
          button.innerHTML = checkIcon;
          setTimeout(() => {
            button.innerHTML = copyIcon;
          }, 2000);
        } catch (err) {
          console.error("Failed to copy!", err);
        }
      });

      pre.appendChild(button);
    });
  }, [content]);

  return (
    <motion.div
      className='markdown-body p-[10px] w-full mx-auto'
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export default PostDetailContent;
