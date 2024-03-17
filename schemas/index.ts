import * as z from 'zod'

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, {
    message: 'Please enter your password',
  }),
})

export const SignUpSchema = z.object({
  username: z
    .string()
    .min(3, {
      message: 'Please fill in your username',
    })
    .refine((s) => !s.includes(' '), "Username can't contain spaces"),
  email: z.string().email(),
  password: z.string().min(1, {
    message: 'Please enter your password',
  }),
})
