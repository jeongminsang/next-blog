
import Link from "next/link"
import { readdirSync } from 'fs';
import { getPostDetailData } from '../libs/api';
import 'dayjs/locale/ko';
import dayjs from 'dayjs';
import readingTime from 'reading-time';
import PostDetailContent from '../components/PostDetailContents';
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
  const { meta, content } = await getPostDetailData(params.postId);

  return (
    <>
      <div>
        <title title={meta.title} />
        <div>{meta.title}</div>
        <div>{dayjs(meta.date).locale("ko").format("YYYY년 M월 D일")}</div>
        <div>{Math.ceil(readingTime(content).minutes)}분</div>
        <div>
          <PostDetailContent content={content} />
        </div>
        <button>
          <Link as={`/`} href={`/`}>
            <span>뒤로가기</span>
          </Link>
        </button>
      </div>
    </>
  )
}

export default DetailDataPage;