"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn, fadeInStagger } from "../utils/motions";
import dayjs from "dayjs";

interface BlogClientProps {
  posts: any[];
  slugs: string[];
}

export default function BlogClient({ posts, slugs }: BlogClientProps) {
  return (
    <div className='flex flex-col'>
      {/* Hero Header */}
      <header className='max-w-[1200px] w-full mx-auto px-8 py-12 md:py-xl flex flex-col md:flex-row md:items-end justify-between border-b border-border-default'>
        <h1 className='font-mono text-[40px] md:text-[180px] lg:text-[120px] leading-none tracking-tighter opacity-10 select-none'>
          POSTS
        </h1>
      </header>

      {/* Article Feed */}
      <main className='max-w-[1200px] w-full mx-auto px-8 py-0'>
        <motion.div
          variants={fadeInStagger}
          initial='hidden'
          animate='animate'
          className='flex flex-col'
        >
          {posts.map((post, i) => (
            <motion.article
              key={slugs[i]}
              variants={fadeIn}
              className='py-12 border-b border-border-default group cursor-pointer transition-all duration-300 font-mono'
            >
              <Link
                href={`blog/${slugs[i]}`}
                className='flex flex-col md:grid md:grid-cols-12 gap-8 items-start no-underline'
              >
                <div className='md:col-span-2'>
                  <span className='text-sm tracking-[1.4px] text-text-muted opacity-60'>
                    {dayjs(post.data.date).format("YYYY.MM.DD")}
                  </span>
                </div>
                <div className='md:col-span-8 group-hover:opacity-50 transition-opacity duration-200'>
                  <h2 className='text-primary text-[30px] mb-4 leading-tight uppercase'>
                    {post.data.title}
                  </h2>
                  <p className='text-text-secondary max-w-2xl text-[16px] leading-relaxed'>
                    {post.data.description}
                  </p>
                </div>
                <div className='md:col-span-2 flex justify-end'>
                  <span className='text-text-muted group-hover:text-primary transition-colors text-xl'>
                    →
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>

        {/* Load More Placeholder */}
        <div className='flex justify-center py-24'>
          <button className='border border-border-default px-12 py-4 font-mono text-sm uppercase tracking-[1.4px] hover:bg-white/5 transition-all'>
            LOAD_OLDER_ENTRIES
          </button>
        </div>
      </main>
    </div>
  );
}
