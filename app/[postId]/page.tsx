
import Link from "next/link"
import { readdirSync } from 'fs';
import { getPostDetailData } from "../libs/api";

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
  }
}

const DetailDataPage = async ({ params }: Params) => {
  const { meta, content } = await getPostDetailData(params.postId);

  return (
    <>
      <div>
        <title title={meta.title} />
        <div>
          <div dangerouslySetInnerHTML={{ __html: content }} />
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