import { getAllPostData } from "../libs/api";
import BlogClient from "./BlogClient";

export default function Blog() {
  const { posts, slugs } = getAllPostData();
  const sortedPosts = [...posts].reverse();
  const sortedSlugs = [...slugs].reverse();

  return (
    <BlogClient posts={sortedPosts} slugs={sortedSlugs} />
  );
}
