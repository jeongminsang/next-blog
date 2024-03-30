import { getAllPostData } from '../libs/api';
import readingTime from 'reading-time';
import { MainContainer, Title, SubTitle, BlogTitle, PostList, PostBody, PostContents, PostTitle, PostSubTitle, PostInfo, ThumbnailImg } from "../styles/pages/Blog"

export default function Home() {
  const { posts, slugs } = getAllPostData();
  return (
    <MainContainer>
      <Title>Minsang's Blog</Title>
      <SubTitle>👨‍💻공부하고 경험한 내용을 이곳에 기록합니다.</SubTitle>
      <BlogTitle>All Posts({posts.length})</BlogTitle>
      <PostList>
        {posts.reverse().map((post, i) => (
          <PostBody href={`blog/${slugs[i]}`} key={slugs[i]}>
            <PostContents>
              <PostTitle>{post.data.title}</PostTitle>
              <PostSubTitle>{post.data.description}</PostSubTitle>
              <PostInfo>
                <div>{post.data.date}</div>
                <div>약 {Math.ceil(readingTime(post.content).minutes)}분</div>
              </PostInfo>
            </PostContents>
            <ThumbnailImg
              src={post.data.thumbnail}
              alt='thumbnail'
              width={1000}
              height={1000}
              draggable={false}
            />
          </PostBody>
        ))}
      </PostList>
    </MainContainer>
  )
}
