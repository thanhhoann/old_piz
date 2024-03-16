'use client'
import { HomeRoute, SignUpRoute } from '@/utils/app-routes'
import { inputBackgroundColor, inputFocusBorderColor } from '@/utils/colors'
import { Button, Flex, FormControl, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import React, { useState } from 'react'
import FormWrapper from './FormWrapper'

import { ViewHideIcon, ViewIcon } from '@/assets/AssetUtil'
import { LoginSchema } from '@/schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import FormErrorMessage from './FormErrorMessage'

export interface ISignIn {
  email: string
  password: string
}

export default function SignInForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [user, setUser] = React.useState<any | null>()

  const {
    handleSubmit,
    register,
    resetField,
    formState: { errors, touchedFields },
  } = useForm<z.infer<typeof LoginSchema>>({
    mode: 'onChange',
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const router = useRouter()
  const supabase = createClientComponentClient()

  const handleSignIn = async ({ email, password }: ISignIn) => {
    const res = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    if (res) setUser(res.data.user)
    router.push(HomeRoute)
  }

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    setIsSubmitted(true)
    handleSignIn(values)
    resetField('email')
    resetField('password')
  }

  return (
    <>
      <FormWrapper headerText="Log in with Piz" backButtonText="Dont have an account ?" backButtonLink={SignUpRoute}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl>
            <Flex direction="column" gap="0.5rem">
              {/* email */}
              <Input
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
            <>{errors.email && <FormErrorMessage>{errors.email.message}</FormErrorMessage>}</>
            <>{errors.password && <FormErrorMessage>{errors.password.message}</FormErrorMessage>}</>
          </>

          {/* log in button */}
          <Button mt="0.4rem" w="full" type="submit" isDisabled={touchedFields.email && touchedFields.password ? false : true}>
            Log in
          </Button>
        </form>
      </FormWrapper>
    </>
  )
}
