import Image from 'next/image'
import styles from './page.module.css'
import { getAllPostData } from './libs/api';
import Link from "next/link"
import { MainContainer, Title, SubTitle, PostTitle, PostList, PostBody } from "./styles/pages/Home"

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
              <div>{post.title}</div>
              <div>{post.description}</div>
              <div>{post.date}</div>
            </Link>
          </PostBody>
        ))}
      </PostList>
    </MainContainer>
  )
}
