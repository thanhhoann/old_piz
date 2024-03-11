'use client'
import React, { useState, useEffect } from 'react'
import { Button, Flex, Text, FormControl, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import { appBackgroundColor, appTextColor, inputBackgroundColor, inputFocusBorderColor } from '@/utils/colors'
import { ForgotPasswordRoute, SignUpRoute } from '@/utils/app_routes'
import FormWrapper from './form-wrapper'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { LoginSchema } from '@/schemas'
import { GrFormView, GrFormViewHide } from 'react-icons/gr'
import { ViewIcon, ViewHideIcon } from '@/assets/AssetUtil'

export default function LoginForm() {
  const [showPassword, setShowPassword] = React.useState(false)

  const form = useForm<z.infer<typeof LoginSchema>>({
    mode: 'onChange',
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    console.log(values)
  }

  return (
    <>
      <FormWrapper headerText="Log in with Piz" backButtonText="Dont have an account ?" backButtonLink={SignUpRoute} socialButton>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormControl>
            <Flex direction="column" gap="0.5rem">
              <Input
                type="email"
                placeholder="Email"
                bg={inputBackgroundColor}
                border="none"
                focusBorderColor={inputFocusBorderColor}
                _hover={{ bg: inputBackgroundColor }}
                {...form.register('email')}
              />
              <InputGroup size="md">
                <Input
                  bg={inputBackgroundColor}
                  border="none"
                  focusBorderColor={inputFocusBorderColor}
                  pr="4.5rem"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  id="password"
                  {...form.register('password')}
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
          <Button mt="0.4rem" w="full" type="submit">
            Log in
          </Button>
        </form>
      </FormWrapper>
    </>
  )
}
