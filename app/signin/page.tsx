'use client'

import { Box, Flex, Heading, TextField } from '@radix-ui/themes'
import Image from 'next/image'
import { Logo } from '@assets/AssetUtil'

import { Button } from '@/components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const formSchema = z.object({
  username: z.string().min(2).max(50),
  email: z.string().min(5),
  phone_number: z.string().min(10).max(10),
})

// TODO: decide forms should be in ui/ or signup/ & signin/ and auth functions afterwards
export default function SignIn() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      email: '',
      phone_number: '',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // This will be type-safe and validated.
    console.log(values)
  }

  return <></>
}
