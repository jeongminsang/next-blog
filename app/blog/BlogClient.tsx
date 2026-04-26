"use client";

import readingTime from "reading-time";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn, fadeInStagger } from "../utils/motions";

interface BlogClientProps {
  posts: any[];
  slugs: string[];
}

export default function BlogClient({ posts, slugs }: BlogClientProps) {
  return (
    <div className="flex flex-col max-w-[800px] w-full mx-auto px-4">
      <h1 className="mt-[26px] mb-[10px] px-[10px] text-[32px] font-bold">Blog</h1>
      <h4 className="mt-0 mb-[10px] px-[10px] text-[18px] font-light opacity-80">👨‍💻공부하고 경험한 내용을 이곳에 기록합니다.</h4>
      <h3 className="mt-[10px] mb-0 px-[10px] text-[20px] font-semibold">All Posts({posts.length})</h3>
      <motion.div
        variants={fadeInStagger}
        initial="hidden"
        animate="animate"
        className="grid grid-cols-1 sm:grid-cols-2 gap-0 mt-[20px]"
      >
        {posts.map((post, i) => (
          <motion.div variants={fadeIn} key={slugs[i]}>
            <Link
              href={`blog/${slugs[i]}`}
              className="flex flex-col justify-between p-[10px] m-[10px] rounded-[10px] transition-transform duration-200"
            >
              <div className="relative w-full mx-auto">
                <Image
                  src={post.data.thumbnail}
                  alt="thumbnail"
                  width={1000}
                  height={1000}
                  draggable={false}
                  priority
                  className="object-cover w-full h-[230px] rounded-[20px] transition-transform duration-200 hover:bg-hv-cr"
                />
                <div className="flex flex-col justify-between absolute w-full h-[230px] mx-auto rounded-[20px] top-0 left-0 p-[20px] text-center bg-transparent transition-all duration-200 opacity-100 hover:bg-black/70 group">
                  <div className="flex justify-between opacity-0 transition-opacity duration-200 text-white group-hover:opacity-100">
                    <div>약 {Math.ceil(readingTime(post.content).minutes)}분</div>
                    <svg
                      width="16px"
                      height="16px"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="bi bi-arrow-up-right-circle-fill w-[30px] h-[30px]"
                    >
                      <path d="M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8zm5.904 2.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707l-4.096 4.096z" />
                    </svg>
                  </div>
                  <div className="text-white text-[14px] text-left opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    {post.data.description}
                  </div>
                </div>
              </div>
              <div className="max-w-full md:max-w-[350px]">
                <div className="mb-[5px] min-[500px]:mt-[5px] font-medium">{post.data.title}</div>
                <div className="flex flex-row text-[14px] text-gray-500">
                  <div className="flex items-center mr-[5px]">{post.data.date}</div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
