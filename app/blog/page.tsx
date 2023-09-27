import Image from 'next/image'
import styles from './page.module.css'
import { getAllPostData } from '../libs/api';
import Link from "next/link"
import readingTime from 'reading-time';
import { MainContainer, Title, SubTitle, PostTitle, PostList, PostBody, PostInfo } from "../styles/pages/Home"

export default function Home() {
  const { posts, slugs } = getAllPostData();
  return (
    <MainContainer>
      <Title>Minsang's Blog</Title>
      <SubTitle>👨‍💻공부하고 경험한 내용을 이곳에 기록합니다.</SubTitle>
      <PostTitle>All Posts({posts.length})</PostTitle>
      <PostList>
        {posts.reverse().map((post, i) => (
          <PostBody key={slugs[i]}>
            <Link href={`/${slugs[i]}`}>
              <div>{post.data.title}</div>
              <div>{post.data.description}</div>
              <PostInfo>
                <div>{post.data.date}</div>
                <div>약 {Math.ceil(readingTime(post.content).minutes)}분</div>
              </PostInfo>
            </Link>
          </PostBody>
        ))}
      </PostList>
    </MainContainer>
  )
}
