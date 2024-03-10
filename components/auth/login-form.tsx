import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { Logo } from '@/app/assets/AssetUtil'
import CustomInput, { CustomPasswordInput } from '@/app/ui/CustomInput'
import { Text, AbsoluteCenter, Box, Button, Divider, Flex, Heading, Center, Link } from '@chakra-ui/react'
import { appBackgroundColor, appTextColor } from '@/utils/colors'
import NextLink from 'next/link'
import { ForgotPasswordRoute, SignUpRoute } from '@/utils/app_routes'
import CustomDivider from '@/app/ui/CustomDivider'
import FormWrapper from './form-wrapper'

export default function LoginForm() {
  return (
    <>
      <FormWrapper headerText="Log in with Piz" backButtonText="Dont have an account ?" backButtonLink={SignUpRoute} socialButton>
        <CustomInput type="text" text="User Name or Email" />
        <CustomPasswordInput />
        <Button _hover={{ bg: 'black', color: 'white' }}>Log in</Button>
      </FormWrapper>
    </>
  )
}
