import { inputBackgroundColor } from '@/utils/colors.utils'
import { useMobile, minWidth } from '@/utils/screen-sizes.utils'
import { Avatar, Box, Button, Flex, Stack, Text } from '@chakra-ui/react'
import { useMedia } from 'use-media'

type PostTypes = {
  username: string
  post_content: string
  post_likes: number
  post_dislikes: number
}

export default function Post({ username, post_content, post_likes, post_dislikes }: PostTypes) {
  const mobile = useMobile('max_width', 'l')
  return (
    <>
      <Flex w={mobile ? '300px' : '500px'} flexDir="column" gap="2rem" p="1rem" rounded="lg">
        <Flex gap="1rem">
          <Avatar size="md" />
          <Stack>
            <Text fontWeight="800">{username}</Text>
            <Text>{post_content}</Text>
          </Stack>
        </Flex>

        <Flex gap="1rem" py="0.4rem" px="1rem" rounded="1rem">
          <PostButton title="Likes" content={post_likes} />
          <PostButton title="Dislikes" content={post_dislikes} />
        </Flex>
      </Flex>
    </>
  )
}

export function PostButton({ title, content }: { title: string; content: number }) {
  return (
    <>
      <Button size="sm" bg={inputBackgroundColor} colorScheme="teal" variant="solid">
        {title} {content}
      </Button>
    </>
  )
}
