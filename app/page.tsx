"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn, fadeInStagger } from "./utils/motions";

export default function Home() {
  return (
    <div className='flex flex-col max-w-[800px] w-full mx-auto pt-[100px] px-4'>
      <Image
        width={300}
        height={300}
        alt='프로필 사진'
        src='/me.jpg'
        draggable={false}
        priority
        className='flex self-center rounded-full'
      />
      <motion.div
        variants={fadeInStagger}
        initial='hidden'
        animate='animate'
        className='flex flex-col w-full mx-auto gap-4'
      >
        <motion.h3
          variants={fadeIn}
          className='flex justify-center mt-[20px] mb-[10px] px-[10px] font-extralight text-[22px] pt-[40px]'
        >
          프론트엔드 개발자 정민상입니다.
        </motion.h3>
        <motion.p variants={fadeIn} className='flex justify-center text-center'>
          저는 TypeScript, React, Next.js 에 관심이 많습니다.
          <br />
          문제를 마주하면 항상 깊은 고뇌와 근본적인 원인을 찾으려고 노력합니다.
          <br />
          독서와 운동을 좋아합니다.
          <br />
          <br />
        </motion.p>
      </motion.div>
    </div>
  );
}
