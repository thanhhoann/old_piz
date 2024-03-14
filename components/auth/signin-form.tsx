'use client'
import React, { useState, useEffect } from 'react'
import { Button, Flex, Text, FormControl, Input, InputGroup, InputRightElement, Toast } from '@chakra-ui/react'
import { appBackgroundColor, appTextColor, inputBackgroundColor, inputFocusBorderColor } from '@/utils/colors'
import { ForgotPasswordRoute, HomeRoute, SignUpRoute } from '@/utils/app-routes'
import FormWrapper from './form-wrapper'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { ISignIn, LoginSchema } from '@/schemas'
import { ViewIcon, ViewHideIcon } from '@/assets/AssetUtil'
import FormError from './form-error'
import { useRouter } from 'next/navigation'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

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
    console.log(values)
    handleSignIn(values)
    resetField('email')
    resetField('password')
  }

  return (
    <>
      <FormWrapper headerText="Log in with Piz" backButtonText="Dont have an account ?" backButtonLink={SignUpRoute} socialButton>
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
            <>{errors.email && <FormError>{errors.email.message}</FormError>}</>
            <>{errors.password && <FormError>{errors.password.message}</FormError>}</>
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
