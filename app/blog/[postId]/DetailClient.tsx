"use client";

import { motion } from "framer-motion";
import { fadeInSlideToRight, staggerHalf } from "@/app/utils/motions";
import dayjs from "dayjs";
import readingTime from "reading-time";
import PostDetailContent from "../../components/PostDetailContents";
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
    <div className='flex flex-col max-w-[1400px] w-full mx-auto relative'>
      {/* Fixed TOC Container for XL screens */}
      {/* <div className="fixed inset-0 pointer-events-none z-[50] hidden xl:block">
        <div className="max-w-[1400px] mx-auto w-full h-full relative px-8">
          <div className="absolute right-8 top-[120px] w-[240px] pointer-events-auto h-fit border-y border-white/10 py-6">
            <TOC content={markdowncontent} />
          </div>
        </div>
      </div> */}

      <motion.div
        variants={staggerHalf}
        initial='hidden'
        animate='animate'
        className='flex flex-row justify-center w-full mx-auto'
      >
        {/* Placeholder aside for spacing on the left */}
        <div className='w-[240px] hidden xl:block shrink-0' />

        <motion.section
          variants={fadeInSlideToRight}
          className='flex flex-col w-full max-w-[800px] mx-auto px-8 py-xl'
        >
          <div className='mb-12 space-y-6'>
            <motion.div
              variants={fadeInSlideToRight}
              className='flex justify-between items-center font-mono text-sm tracking-[1.4px] text-text-muted uppercase'
            >
              <span>{dayjs(meta.date).format("YYYY.MM.DD")}</span>
              <span>
                EST_READ: {Math.ceil(readingTime(markdowncontent).minutes)}MIN
              </span>
            </motion.div>

            <motion.h1 className='text-[20px] md:text-[40px] leading-[1.1] tracking-tight font-mono uppercase'>
              {meta.title}
            </motion.h1>

            {/* <div className='h-1 w-24 bg-primary' /> */}
          </div>

          <div className='markdown-body'>
            <PostDetailContent content={content} />
          </div>

          <div className='mt-24 pt-12 border-t border-border-default'>
            <Giscus />
          </div>
        </motion.section>

        {/* Placeholder aside for spacing on the right (where the fixed TOC floats) */}
        <div className='w-[240px] hidden xl:block shrink-0' />
      </motion.div>
    </div>
  );
}
