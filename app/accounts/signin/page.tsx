'use client'
import Image from 'next/image'
import { Logo } from '@/app/assets/AssetUtil'
import CustomInput, { CustomPasswordInput } from '@/app/ui/CustomInput'
import { Text, AbsoluteCenter, Box, Button, Divider, Flex, Heading, Center, Link } from '@chakra-ui/react'
import { appBackgroundColor, appTextColor } from '@/utils/colors'
import NextLink from 'next/link'
import { ForgotPasswordRoute, SignUpRoute } from '@/utils/app_routes'
import CustomDivider from '@/app/ui/CustomDivider'

export default function SignUp() {
  return (
    <>
      <Flex direction="column" justifyContent="center" alignItems="center" gap="2rem" mt="7rem">
        <Image src={Logo} alt="Logo" width={70} height={70} />
        <Heading size="md">Log in with your Piz account</Heading>
        <Flex direction="column" gap="1rem" width="300px">
          <CustomInput type="text" text="User Name or Email" />
          <CustomPasswordInput />
          <Button _hover={{ bg: 'black', color: 'white' }}>Log in</Button>
          <Center bg={appBackgroundColor} px="4" mt="0.2rem" mb="0.6rem">
            <Link as={NextLink} style={{ color: appTextColor }} href={ForgotPasswordRoute}>
              Forgot password ?
            </Link>
          </Center>

          <CustomDivider />

          <Link as={NextLink} href={SignUpRoute}>
            <Button variant="ghost" border="1px" borderColor="white" color="white" width="100%" _hover={{ bg: 'white', color: 'black' }}>
              Create an account
            </Button>
          </Link>
        </Flex>
      </Flex>
    </>
  )
}
