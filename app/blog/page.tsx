import { getAllPostData } from "../libs/api";
import readingTime from "reading-time";
import {
  MainContainer,
  Title,
  SubTitle,
  BlogTitle,
  PostList,
  PostBody,
  PostContents,
  PostTitle,
  PostSubTitle,
  PostInfo,
  ThumbnailImg,
  ImageCover,
  ImageContainer,
} from "../styles/pages/Blog";
import { fadeIn, fadeInStagger } from "../utils/motions";

export default function Home() {
  const { posts, slugs } = getAllPostData();
  return (
    <MainContainer>
      <Title>Blog</Title>
      <SubTitle>👨‍💻공부하고 경험한 내용을 이곳에 기록합니다.</SubTitle>
      <BlogTitle>All Posts({posts.length})</BlogTitle>
      <PostList variants={fadeInStagger} initial='hidden' animate='animate'>
        {posts.reverse().map((post, i) => (
          <PostBody href={`blog/${slugs[i]}`} key={slugs[i]} variants={fadeIn}>
            <ImageContainer>
              <ThumbnailImg
                src={post.data.thumbnail}
                alt='thumbnail'
                width={1000}
                height={1000}
                draggable={false}
                priority
              />
              <ImageCover>
                <div>
                  <div>약 {Math.ceil(readingTime(post.content).minutes)}분</div>
                  <svg
                    width='16px'
                    height='16px'
                    viewBox='0 0 16 16'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='currentColor'
                    className='bi bi-arrow-up-right-circle-fill'
                  >
                    <path d='M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8zm5.904 2.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707l-4.096 4.096z' />
                  </svg>
                </div>
                <PostSubTitle>{post.data.description}</PostSubTitle>
              </ImageCover>
            </ImageContainer>
            <PostContents>
              <PostTitle>{post.data.title}</PostTitle>
              <PostInfo>
                <div>{post.data.date}</div>
              </PostInfo>
            </PostContents>
          </PostBody>
        ))}
      </PostList>
    </MainContainer>
  );
}
