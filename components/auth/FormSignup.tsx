import { SignUpSchema } from '@/schemas'
import { SignInRoute } from '@/utils/app-routes'
import { inputBackgroundColor, inputFocusBorderColor } from '@/utils/colors'
import { iconStyles } from '@/utils/icon-styles'
import { SignUpProps } from '@/utils/types'
import { Button, Flex, FormControl, Input, InputGroup, InputRightElement, useToast } from '@chakra-ui/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { GrFormView, GrFormViewHide } from 'react-icons/gr'
import * as z from 'zod'
import FormErrorMessage from './FormErrorMessage'
import FormWrapper from './FormWrapper'

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

  const handleSignUp = async ({ username, email, password }: SignUpProps) => {
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
                    {showPassword ? <GrFormViewHide style={iconStyles.input} /> : <GrFormView style={iconStyles.input} />}
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
