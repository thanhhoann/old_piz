import React, { useState, useEffect } from 'react'
import { Button, Center, Text, Flex, Heading, Link } from '@chakra-ui/react'
import Image from 'next/image'
import { Logo } from '@/app/assets/AssetUtil'
import { FaFacebook } from 'react-icons/fa'
import NextLink from 'next/link'
import { appBackgroundColor, appTextColor } from '@/utils/colors'
import { ForgotPasswordRoute } from '@/utils/app_routes'
import CustomDivider from '@/app/ui/CustomDivider'

interface FormWrapperProps {
  children: React.ReactNode
  headerText: string
  backButtonText: string
  backButtonLink: string
  socialButton?: boolean
}

export default function FormWrapper({ children, headerText, backButtonText, backButtonLink, socialButton }: FormWrapperProps) {
  return (
    <>
      <Flex direction="column" justifyContent="center" alignItems="center" gap="2rem" mt="3rem">
        <Image src={Logo} alt="Logo" width={70} height={70} />
        <Heading size="md">{headerText}</Heading>
        <Flex direction="column" gap="1rem" width="300px">
          {children}
          <Center bg={appBackgroundColor} px="4" mt="0.2rem" mb="0.6rem">
            <Link as={NextLink} style={{ color: appTextColor }} href={backButtonLink}>
              {backButtonText}
            </Link>
          </Center>
          {socialButton && <CustomDivider />}
        </Flex>
        {socialButton && (
          <Button width="70%" gap="1rem">
            <FaFacebook size={23} />
            <Text>Continue with Facebook</Text>
          </Button>
        )}
      </Flex>
    </>
  )
}
