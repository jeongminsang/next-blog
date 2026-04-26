"use client";

import { motion } from "framer-motion";
import { fadeInSlideToRight, staggerHalf } from "@/app/utils/motions";
import dayjs from "dayjs";
import readingTime from "reading-time";
import PostDetailContent from "../../components/PostDetailContents";
import TOC from "../../components/TOC";
import Giscus from "../../components/Giscus";

interface DetailClientProps {
  meta: any;
  content: string;
  markdowncontent: string;
}

export default function DetailClient({
  meta,
  content,
  markdowncontent,
}: DetailClientProps) {
  return (
    <div className="flex flex-col max-w-[1400px] w-full mx-auto px-4 relative">
      {/* Fixed TOC Container for XL screens */}
      <div className="fixed inset-0 pointer-events-none z-[50] hidden xl:block">
        <div className="max-w-[1400px] mx-auto w-full h-full relative px-4">
          <div className="absolute right-4 top-[100px] w-[240px] pointer-events-auto h-fit border-y border-white/10 py-4">
            <TOC content={markdowncontent} />
          </div>
        </div>
      </div>

      <motion.div
        variants={staggerHalf}
        initial="hidden"
        animate="animate"
        className="flex flex-row justify-center w-full mx-auto"
      >
        {/* Placeholder aside for spacing on the left */}
        <div className="w-[240px] hidden xl:block shrink-0" />
        
        <motion.section
          variants={fadeInSlideToRight}
          className="flex flex-col w-full max-w-[800px] mx-auto"
        >
          <motion.h1 className="flex text-[40px] justify-center p-[10px] md:text-[30px] md:w-full font-bold">
            {meta.title}
          </motion.h1>
          <motion.div className="flex text-[16px] justify-center text-white/70">
            📅 {dayjs(meta.date).locale("ko").format("YYYY년 M월 D일")}
          </motion.div>
          <motion.div className="flex text-[16px] justify-center text-white/70">
            ⌛ 약 {Math.ceil(readingTime(markdowncontent).minutes)}분
          </motion.div>
          <PostDetailContent content={content} />
        </motion.section>

        {/* Placeholder aside for spacing on the right (where the fixed TOC floats) */}
        <div className="w-[240px] hidden xl:block shrink-0" />
      </motion.div>

      <motion.div
        variants={fadeInSlideToRight}
        initial="hidden"
        animate="animate"
        className="max-w-[800px] w-full mx-auto p-[10px] mt-8"
      >
        <Giscus />
      </motion.div>
    </div>
  );
}
