'use client'
import { Logo } from '@/assets/AssetUtil'
import LoggedInfo from '@/components/auth/LoggedInfo'
import { useUserStore } from '@/store/user-store'
import { Flex, Heading, Text } from '@chakra-ui/react'
import { createSelectorFunctions } from 'auto-zustand-selectors-hook'
import Image from 'next/image'

export default function Home() {
  const userStore = createSelectorFunctions(useUserStore)
  const username = userStore.use.username()
  return (
    <>
      <Flex direction="column" justifyContent="center" alignItems="center" gap="2rem" mt="4rem">
        <Image src={Logo} alt="Logo" width={70} height={70} priority={true} />
        <Heading>Piz</Heading>
        <Text as="em">
          A social media for <Text as="mark">{username}</Text>.
        </Text>

        <LoggedInfo />
        {/* <ProfileBtn /> */}
      </Flex>
    </>
  )
}
