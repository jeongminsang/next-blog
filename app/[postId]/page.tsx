
import { readdirSync } from 'fs';
import { getPostDetailData } from '../libs/api';
import 'dayjs/locale/ko';
import dayjs from 'dayjs';
import readingTime from 'reading-time';
import PostDetailContent from '../components/PostDetailContents';
import TOC from '../styles/components/TOC';
import { MainContainer, PostSection, PostTitle, PostInfo, TagAside, TOCAside } from "../styles/pages/DetailDataPage"
dayjs.locale('ko');

interface Params {
  params: {
    postId: number,
  }
}

export const generateStaticParams = async () => {
  const paths = readdirSync('./app/content/blog')
  return paths;
}

export const generateMetadata = async ({ params }: Params) => {
  const { meta } = await getPostDetailData(params.postId);
  return {
    title: meta.title,
    description: meta.description,
    date: meta.date,
  }
}

const DetailDataPage = async ({ params }: Params) => {
  const { meta, content, markdowncontent } = await getPostDetailData(params.postId);

  return (
    <MainContainer>
      <TagAside></TagAside>
      <PostSection>
        <title title={meta.title} />
        <PostTitle>{meta.title}</PostTitle>
        <PostInfo>📅 {dayjs(meta.date).locale("ko").format("YYYY년 M월 D일")}</PostInfo>
        <PostInfo>⌛ 약 {Math.ceil(readingTime(content).minutes)}분</PostInfo>
        <PostDetailContent content={content} />
      </PostSection>
      <TOCAside>
        <TOC content={markdowncontent} />
      </TOCAside>
    </MainContainer>
  )
}

export default DetailDataPage;