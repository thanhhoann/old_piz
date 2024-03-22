'use client'
import { LoginSchema } from '@/schemas'
import { authStore } from '@/store/auth-store'
import { HomeRoute, SignUpRoute } from '@/utils/app-routes'
import { inputBackgroundColor, inputFocusBorderColor } from '@/utils/colors'
import { iconStyles } from '@/utils/icon-styles'
import { Button, Flex, FormControl, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { GrFormView, GrFormViewHide } from 'react-icons/gr'
import * as z from 'zod'
import FormErrorMessage from './FormErrorMessage'
import FormWrapper from './FormWrapper'

export default function SignInForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const router = useRouter()
  const signIn = authStore.use.signIn()

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

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    setIsSubmitted(true)
    signIn(values)
    router.push(HomeRoute)
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

          {/* error message */}
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
