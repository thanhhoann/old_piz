import * as z from 'zod'

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, {
    message: 'Please enter your password',
  }),
})

export const SignUpSchema = z.object({
  username: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(1, {
    message: 'Please enter your password',
  }),
})

export interface SignUpInterface {
  username?: string
  email: string
  password: string
}

export interface SignInInterface {
  email: string
  password: string
}
