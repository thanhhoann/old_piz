'use client'
import { LoginSchema } from '@/schemas'
import { authStore } from '@/store/auth-store'
import { HomeRoute, SignUpRoute } from '@/utils/app-routes'
import { inputBackgroundColor, inputFocusBorderColor } from '@/utils/colors'
import { iconStyles } from '@/utils/icon-styles'
import { Button, Flex, FormControl, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { GrFormView, GrFormViewHide } from 'react-icons/gr'
import * as z from 'zod'
import FormErrorMessage from './FormErrorMessage'
import FormWrapper from './FormWrapper'

export interface ISignIn {
  email: string
  password: string
}

export default function SignInForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const authStoreSetUser = authStore.use.setUser()
  const authStoreSetToken = authStore.use.setToken()
  const authStoreSetAuthStatus = authStore.use.setAuthStatus()

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

    if (res) {
      const user_data = res.data.user
      const session_data = res.data.session

      const user = {
        username: user_data?.user_metadata.username,
        email: user_data?.email,
        id: user_data?.id,
        created_at: user_data?.created_at,
        last_sign_in_at: user_data?.last_sign_in_at,
        phone_number: user_data?.phone,
      }

      const tokens = {
        access_token: session_data?.access_token,
        refresh_token: session_data?.refresh_token,
      }

      authStoreSetUser(user)
      authStoreSetToken(tokens)
      authStoreSetAuthStatus(true)
    }
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
                    {showPassword ? <GrFormView style={iconStyles.input} /> : <GrFormViewHide style={iconStyles.input} />}
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
