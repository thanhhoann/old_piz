import React, { useState, useEffect } from 'react'
import FormWrapper from './FormWrapper'
import { HomeRoute, SignInRoute } from '@/utils/app-routes'
import { appBackgroundColor, appTextColor, inputBackgroundColor, inputFocusBorderColor } from '@/utils/colors'
import { Button, Flex, Text, FormControl, Input, InputGroup, InputRightElement, Toast, useToast } from '@chakra-ui/react'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { SignUpSchema } from '@/schemas'
import { ViewIcon, ViewHideIcon } from '@/assets/AssetUtil'
import FormErrorMessage from './FormErrorMessage'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'

export interface ISignUp {
  username?: string
  email: string
  password: string
}

export default function SignUpForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const {
    handleSubmit,
    register,
    resetField,
    formState: { errors, touchedFields },
  } = useForm<z.infer<typeof SignUpSchema>>({
    mode: 'onChange',
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      username: '',
      email: '',
      password: '',
    },
  })

  const router = useRouter()
  const supabase = createClientComponentClient()
  const toast = useToast()

  const handleSignUp = async ({ username, email, password }: ISignUp) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { username: username },
        emailRedirectTo: `${location.origin}/api/auth/callback`,
      },
    })
    if (error)
      toast({
        title: 'Failed to create account.',
        description: error.message,
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
    else if (data) {
      toast({
        title: 'Account created.',
        description: "We've created your account for you.",
        status: 'success',
        duration: 3000,
        isClosable: true,
      })
    }
    // router.push(HomeRoute)
  }

  const onSubmit = (values: z.infer<typeof SignUpSchema>) => {
    setIsSubmitted(true)
    console.log(values)
    handleSignUp(values)
    resetField('username')
    resetField('email')
    resetField('password')
  }

  return (
    <>
      <FormWrapper headerText="Getting started with Piz" backButtonText="Already have an account ?" backButtonLink={SignInRoute}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl>
            <Flex direction="column" gap="0.5rem">
              {/* user name */}
              <Input
                id="username"
                type="text"
                placeholder="Username"
                border="none"
                bg={inputBackgroundColor}
                focusBorderColor={inputFocusBorderColor}
                _hover={{ bg: inputBackgroundColor }}
                {...register('username')}
              />
              {/* email */}
              <Input
                id="email"
                type="email"
                placeholder="Email"
                border="none"
                bg={inputBackgroundColor}
                focusBorderColor={inputFocusBorderColor}
                _hover={{ bg: inputBackgroundColor }}
                {...register('email')}
              />
              {/* password */}
              <InputGroup size="md">
                <Input
                  id="password"
                  placeholder="Password"
                  pr="4.5rem"
                  border="none"
                  bg={inputBackgroundColor}
                  focusBorderColor={inputFocusBorderColor}
                  type={showPassword ? 'text' : 'password'}
                  {...register('password')}
                />
                <InputRightElement>
                  <Button
                    size="sm"
                    bg={inputBackgroundColor}
                    _hover={{ bg: inputBackgroundColor }}
                    onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <ViewHideIcon /> : <ViewIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </Flex>
          </FormControl>

          {/* message */}
          <>
            <>{errors.username && <FormErrorMessage>{errors.username.message}</FormErrorMessage>}</>
            <>{errors.email && <FormErrorMessage>{errors.email.message}</FormErrorMessage>}</>
            <>{errors.password && <FormErrorMessage>{errors.password.message}</FormErrorMessage>}</>
          </>

          {/* log in button */}
          <Button mt="0.4rem" w="full" type="submit" isDisabled={touchedFields.email && touchedFields.password ? false : true}>
            Sign Up
          </Button>
        </form>
      </FormWrapper>
    </>
  )
}
