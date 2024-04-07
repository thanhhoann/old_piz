import { authStore } from '@/store/auth-store'
import { Avatar, Flex, Heading } from '@chakra-ui/react'

export default function InfoSection({ avatarURL }: { avatarURL: string }) {
  const authStoreUser = authStore.use.user()

  const username = authStoreUser?.username

  return (
    <>
      <Avatar size="2xl" name="User" src={avatarURL} />
    </>
  )
}
