import Image from 'next/image'
import styles from './page.module.css'
import { getAllPostData } from './libs/api';
import Link from "next/link"

export default function Home() {
  const posts = getAllPostData();
  return (
    <div>
      <ul>
        {posts.map((post: any, i: number) => (
          <li key={i}>
            <Link as={`/${post.postId}`} href={`/${post.postId}`}>
              <div>{post.title}</div>
              <div>{post.date}</div>
              <div>{post.description}</div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
