import { readdirSync } from "fs";
import { getPostDetailData } from "../../libs/api";
import "dayjs/locale/ko";
import dayjs from "dayjs";
import DetailClient from "./DetailClient";

dayjs.locale("ko");

interface Params {
  params: Promise<{ postId: string }>;
}

export const generateStaticParams = async () => {
  const paths = readdirSync("./app/contents");
  return paths.map((path) => ({ postId: path.replace(".mdx", "") }));
};

export const generateMetadata = async ({ params }: Params) => {
  const { postId } = await params;
  const { meta } = await getPostDetailData(postId);
  return {
    title: meta.title,
    description: meta.description,
    date: meta.date,
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: "article",
      publishedTime: meta.date,
      authors: ["Minsang"],
      images: [
        {
          url: meta.thumbnail || "/blogSc.png",
          width: 1200,
          height: 630,
          alt: meta.title,
        },
      ],
    },
  };
};

const DetailDataPage = async ({ params }: Params) => {
  const { postId } = await params;
  const { meta, content, markdowncontent } = await getPostDetailData(postId);

  return (
    <DetailClient meta={meta} content={content} markdowncontent={markdowncontent} />
  );
};

export default DetailDataPage;
