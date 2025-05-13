import { readdirSync } from "fs";
import { getPostDetailData } from "../../libs/api";
import "dayjs/locale/ko";
import dayjs from "dayjs";
import readingTime from "reading-time";
import PostDetailContent from "../../components/PostDetailContents";
import TOC from "../../components/TOC";
import Giscus from "../../components/Giscus";
import ReadingProgressBar from "../../components/ReadingProgressBar";
import {
  MainContainer,
  PostContainer,
  PostSection,
  PostTitle,
  PostInfo,
  TagAside,
  TOCAside,
  GiscusContainer,
} from "../../styles/pages/DetailDataPage";
import { fadeInSlideToRight, staggerHalf } from "@/app/utils/motions";
dayjs.locale("ko");

interface Params {
  params: Promise<{ postId: number }>;
}

// export const generateStaticParams = async () => {
//   const paths = readdirSync("./app/contents");
//   return paths;
// };
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
  };
};

const DetailDataPage = async ({ params }: Params) => {
  const { postId } = await params;
  const { meta, content, markdowncontent } = await getPostDetailData(postId);

  return (
    <MainContainer
      variants={fadeInSlideToRight}
      initial='hidden'
      animate='animate'
    >
      {/* <ReadingProgressBar /> */}
      <PostContainer variants={staggerHalf}>
        <TagAside variants={fadeInSlideToRight} />
        <PostSection variants={fadeInSlideToRight}>
          <PostTitle>{meta.title}</PostTitle>
          <PostInfo>
            📅 {dayjs(meta.date).locale("ko").format("YYYY년 M월 D일")}
          </PostInfo>
          <PostInfo>
            ⌛ 약 {Math.ceil(readingTime(markdowncontent).minutes)}분
          </PostInfo>
          <PostDetailContent content={content} />
        </PostSection>
        <TOCAside variants={fadeInSlideToRight}>
          <TOC content={markdowncontent} />
        </TOCAside>
      </PostContainer>
      <GiscusContainer variants={fadeInSlideToRight}>
        <Giscus />
      </GiscusContainer>
    </MainContainer>
  );
};

export default DetailDataPage;
