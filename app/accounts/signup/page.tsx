'use client'
import Image from 'next/image'
import { Logo } from '@/app/assets/AssetUtil'
import CustomInput, { CustomPasswordInput } from '@/app/ui/CustomInput'
import { AbsoluteCenter, Text, Box, Button, Divider, Flex, Heading, Link } from '@chakra-ui/react'
import { SignInRoute, SignUpRoute } from '@/utils/app_routes'
import NextLink from 'next/link'
import { appBackgroundColor } from '@/utils/colors'

export default function SignUp() {
  return (
    <>
      <Flex direction="column" justifyContent="center" alignItems="center" gap="2rem" mt="3rem">
        <Image src={Logo} alt="Logo" width={70} height={70} />
        <Heading size="md">Getting started with Piz</Heading>
        <Flex direction="column" gap="1rem" width="300px">
          <CustomInput type="text" text="User Name" />
          <CustomInput type="text" text="Email" />
          {/* <CustomInput text="Phone Number" /> */}
          <CustomPasswordInput />
          <Button>Create account</Button>

          <Box position="relative">
            <Divider />
            <AbsoluteCenter bg={appBackgroundColor} px="4">
              <Text mx="0.1rem">or</Text>
            </AbsoluteCenter>
          </Box>

          <Link as={NextLink} href={SignInRoute}>
            <Button variant="ghost" border="1px" borderColor="white" color="white" width="100%" _hover={{ bg: 'white', color: 'black' }}>
              Sign In with Piz
            </Button>
          </Link>
        </Flex>
      </Flex>
    </>
  )
}
