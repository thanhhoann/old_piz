'use client'
import Post from '@/components/posts/Post'
import { Center, Flex } from '@chakra-ui/react'

export default function Home() {
  const post = {
    username: 'thanh_hoan',
    post_content:
      'We suffer more often in imagination than in reality. Ignorance is the cause of fear. While we wait for life, life passes. Life is long, if you know how to use it.',
    post_likes: 35,
    post_dislikes: 23,
  }
  return (
    <>
      <Center>
        <Flex flexDirection="column" gap="1rem">
          <Post username={post.username} post_content={post.post_content} post_likes={post.post_likes} post_dislikes={post.post_dislikes} />
          <Post username={post.username} post_content={post.post_content} post_likes={post.post_likes} post_dislikes={post.post_dislikes} />
          <Post username={post.username} post_content={post.post_content} post_likes={post.post_likes} post_dislikes={post.post_dislikes} />
          <Post username={post.username} post_content={post.post_content} post_likes={post.post_likes} post_dislikes={post.post_dislikes} />
          <Post username={post.username} post_content={post.post_content} post_likes={post.post_likes} post_dislikes={post.post_dislikes} />
        </Flex>
      </Center>
    </>
  )
}
