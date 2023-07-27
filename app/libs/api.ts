import { readdirSync, readFileSync } from "fs";
import matter from "gray-matter";
import { join } from "path";
import markdownToHtml from "../libs/markdownToHtml";

const postsDirectory = join(process.cwd(), "app/content/blog");

export const getAllPostData = () => {
  const posts = readdirSync(postsDirectory).map((file) => {
    const post = readFileSync(`${postsDirectory}/${file}`, "utf-8");
    return matter(post).data;
  });
  return posts;
};

export const getPostDetailData = async (postId: number) => {
  const post = readFileSync(`app/content/blog/${postId}.mdx`, "utf-8");
  const { data, content } = matter(post);

  return {
    meta: data,
    content: await markdownToHtml(content),
    markdowncontent: content,
  };
};
