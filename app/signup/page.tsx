'use client'
import Image from 'next/image'
import { Logo } from '@/app/assets/AssetUtil'
import CustomInput from '@/app/ui/CustomInput'
import { Button, Flex, Heading } from '@chakra-ui/react'

export default function SignUp() {
  return (
    <>
      <Flex direction="column" justifyContent="center" alignItems="center" gap="2rem" mt="3rem">
        <Image src={Logo} alt="Logo" width={70} height={70} />
        <Heading size="md">Getting started with Piz</Heading>
        <Flex direction="column" gap="1rem" width="300px">
          <CustomInput text="User Name" />
          <CustomInput text="Email" />
          {/* <CustomInput text="Phone Number" /> */}
          <CustomInput text="Password" />

          <Button>Create account</Button>
        </Flex>
      </Flex>
    </>
  )
}
