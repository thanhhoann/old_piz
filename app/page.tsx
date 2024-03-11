import LoggedInfo from '@/components/auth/logged-info'
import { LoginButton } from '@/components/auth/login-button'
import { Button, Text, Flex, Heading } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import { auth } from './lib/auth'
import Image from 'next/image'
import { Logo } from '@/assets/AssetUtil'

export default function Home() {
  return (
    <>
      <Flex direction="column" justifyContent="center" alignItems="center" gap="2rem" mt="9rem">
        <Image src={Logo} alt="Logo" width={70} height={70} priority={true}/>
        <Heading>Piz</Heading>
        <Text as="em">
          A social media for <Text as='mark'>nerds</Text>.
        </Text>

        {/* <LoggedInfo /> */}
        <LoginButton>
          <Button>Sign In</Button>
        </LoginButton>
      </Flex>
    </>
  )
}
