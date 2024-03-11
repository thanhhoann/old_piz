import React, { useState, useEffect } from 'react'
import FormWrapper from './form-wrapper'
import { SignInRoute } from '@/utils/app_routes'
import { appBackgroundColor, appTextColor, inputBackgroundColor, inputFocusBorderColor } from '@/utils/colors'
import { Button, Flex, Text, FormControl, Input, InputGroup, InputRightElement, Toast } from '@chakra-ui/react'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { SignUpSchema } from '@/schemas'
import { ViewIcon, ViewHideIcon } from '@/assets/AssetUtil'
import FormError from './form-error'

export default function SignUpForm(props) {
  const [showPassword, setShowPassword] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const {
    handleSubmit,
    register,
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

  const onSubmit = (values: z.infer<typeof SignUpSchema>) => {
    setIsSubmitted(true)
    console.log(values)
  }
  return (
    <>
      <FormWrapper
        headerText="Getting started with Piz"
        backButtonText="Already have an account ?"
        backButtonLink={SignInRoute}
        socialButton>
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
            <>{errors.email && <FormError>{errors.email.message}</FormError>}</>
            <>{errors.password && <FormError>{errors.password.message}</FormError>}</>
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
