import { Logo } from '@/assets/AssetUtil'
import CustomDivider from '@/components/common/CustomDivider'
import { HomeRoute } from '@/utils/app-routes.utils'
import { appBackgroundColor, appTextColor } from '@/utils/colors.utils'
import { Button, Center, Flex, Heading, Link, Text } from '@chakra-ui/react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import Image from 'next/image'
import NextLink from 'next/link'
import React from 'react'
import { FaFacebook } from 'react-icons/fa'

interface FormWrapperProps {
  children: React.ReactNode
  headerText: string
  backButtonText: string
  backButtonLink: string
  socialButton?: boolean
}

export default function FormWrapper({ children, headerText, backButtonText, backButtonLink, socialButton }: FormWrapperProps) {
  const supabase = createClientComponentClient()
  const signInWithFacebook = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'facebook',
    })
  }

  return (
    <>
      <Flex direction="column" justifyContent="center" alignItems="center" gap="2rem" mt="3rem">
        <Link as={NextLink} href={HomeRoute}>
          <Image src={Logo} alt="Logo" width={70} height={70} priority={true} />
        </Link>
        <Heading size="md">{headerText}</Heading>
        <Flex direction="column" gap="1rem" width="300px">
          {children}
          <Center bg={appBackgroundColor} px="4" mt="0.2rem" mb="0.6rem">
            <Link as={NextLink} style={{ color: appTextColor }} href={backButtonLink}>
              {backButtonText}
            </Link>
          </Center>
          {socialButton && (
            <>
              <CustomDivider />
              <Button onClick={signInWithFacebook} width="100%" gap="1rem">
                <FaFacebook size={23} />
                <Text>Continue with Facebook</Text>
              </Button>
            </>
          )}
        </Flex>
      </Flex>
    </>
  )
}
