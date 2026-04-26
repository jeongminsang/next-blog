import { getAllPostData } from "../libs/api";
import BlogClient from "./BlogClient";

export default function Blog() {
  const { posts, slugs } = getAllPostData();

  return <BlogClient posts={posts} slugs={slugs} />;
}
