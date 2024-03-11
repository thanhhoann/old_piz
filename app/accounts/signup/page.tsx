'use client'
import Image from 'next/image'
import { Logo } from '@/assets/AssetUtil'
import CustomInput, { CustomPasswordInput } from '@/app/ui/CustomInput'
import { AbsoluteCenter, Text, Box, Button, Divider, Flex, Heading, Link } from '@chakra-ui/react'
import { SignInRoute, SignUpRoute } from '@/utils/app_routes'
import NextLink from 'next/link'
import { appBackgroundColor } from '@/utils/colors'
import CustomDivider from '@/app/ui/CustomDivider'

export default function SignUp() {
  return (
    <>
      <Heading size="md">Getting started with Piz</Heading>
      <Flex direction="column" gap="1rem" width="300px">
        <CustomInput type="text" text="User Name" />
        <CustomInput type="text" text="Email" />
        <CustomPasswordInput />
        <Button>Create account</Button>

        <CustomDivider />

        <Link as={NextLink} href={SignInRoute}>
          <Button variant="ghost" border="1px" borderColor="white" color="white" width="100%" _hover={{ bg: 'white', color: 'black' }}>
            Sign In with Piz
          </Button>
        </Link>
      </Flex>
    </>
  )
}
