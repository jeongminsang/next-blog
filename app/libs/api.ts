import fs, { readdirSync, readFileSync } from "fs";
import matter from "gray-matter";
import { join } from "path";
import markdownToHtml from "../libs/markdownToHtml";
import axios from "axios";

const POSTDIRECOTRY = join(process.cwd(), "app/contents");
const TOKEN = process.env.NEXT_PUBLIC_NOTION_TOKEN;
const DATABASE_ID = process.env.NEXT_PUBLIC_NOTION_DATABASE_ID;

export const getAllPostData = () => {
  const posts = readdirSync(POSTDIRECOTRY).map((file) => {
    const post = readFileSync(`${POSTDIRECOTRY}/${file}`, "utf-8");
    return matter(post);
  });
  const slugArr = fs.readdirSync(POSTDIRECOTRY);
  const slugs = slugArr.reverse().map((slug) => slug.replace(/\.mdx$/, ""));
  return { posts, slugs };
};

export const getPostDetailData = async (postId: number) => {
  const post = readFileSync(`app/contents/${postId}.mdx`, "utf-8");
  const { data, content } = matter(post);

  return {
    meta: data,
    content: await markdownToHtml(content),
    markdowncontent: content,
  };
};

export async function getProjectData() {
  try {
    const response = await axios.post(
      `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
      {
        sorts: [
          {
            property: "Name",
            direction: "ascending",
          },
        ],
        page_size: 100,
      },
      {
        headers: {
          Accept: "application/json",
          "Notion-Version": "2022-06-28",
          "Content-Type": "application/json",
          Authorization: `Bearer ${TOKEN}`,
        },
      }
    );
    return { props: { data: response.data } };
  } catch (error) {
    console.error(error);
  }
}
