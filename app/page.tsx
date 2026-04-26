"use client";

import { motion } from "framer-motion";
import { fadeIn, fadeInStagger } from "./utils/motions";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className='flex flex-col'>
      {/* Main Content Area */}
      <main className='max-w-[1200px] w-full mx-auto px-8 py-xl'>
        <motion.div
          variants={fadeInStagger}
          initial='hidden'
          animate='animate'
          className='flex flex-col md:flex-row gap-12 items-start'
        >
          {/* <motion.div variants={fadeIn} className='shrink-0'>
            <Image
              width={200}
              height={200}
              alt='Profile'
              src='/me.jpg'
              draggable={false}
              priority
              className='grayscale border border-border-default transition-all duration-300 hover:grayscale-0'
            />
          </motion.div> */}

          <div className='flex flex-col gap-8 max-w-2xl font-mono'>
            <motion.h2
              variants={fadeIn}
              className='text-3xl tracking-tight uppercase'
            >
              PROFILE
            </motion.h2>

            <motion.div
              variants={fadeIn}
              className='text-text-secondary leading-relaxed space-y-6'
            >
              <p>
                안녕하세요, 프론트엔드 엔지니어 정민상입니다.
                <br />
                LLM을 활용해 개발 워크플로우를 자동화하고 최적화하는데 집중하고
                있습니다.
                <br />
                복잡한 문제를 구조화하고 끝까지 파고드는 걸 좋아합니다.
              </p>
              <p>일상에서는 독서와 운동으로 리듬을 유지합니다.</p>
            </motion.div>

            <motion.div variants={fadeIn} className='flex gap-4'>
              <button
                className='btn-primary cursor-pointer'
                onClick={() => router.push("/blog")}
              >
                POSTS →
              </button>
              {/* <button className='btn-outline'>CONTACT_SECURE</button> */}
            </motion.div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
