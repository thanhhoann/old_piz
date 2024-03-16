import LoggedInfo from '@/components/auth/LoggedInfo'
import { LoginButton } from '@/components/auth/LoginBtn'
import { Button, Text, Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import { auth } from './lib/auth'
import Image from 'next/image'
import { Logo } from '@/assets/AssetUtil'
import ProfileBtn from '@/components/auth/ProfileBtn'

export default function Home() {
  return (
    <>
      <Flex direction="column" justifyContent="center" alignItems="center" gap="2rem" mt="4rem">
        <Image src={Logo} alt="Logo" width={70} height={70} priority={true} />
        <Heading>Piz</Heading>
        <Text as="em">
          A social media for <Text as="mark">nerds</Text>.
        </Text>

        <LoggedInfo />
        <ProfileBtn />
      </Flex>
    </>
  )
}
