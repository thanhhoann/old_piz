'use client'

import { Box, Flex, Heading, TextField, Button } from '@radix-ui/themes'
import Image from 'next/image'
import { Logo } from '@assets/AssetUtil'

import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const formSchema = z.object({
  username: z.string().min(2).max(50),
  email: z.string().min(5),
  phone_number: z.string().min(10).max(10),
  password: z.string().min(2),
})

// TODO: decide forms should be in ui/ or signup/ & signin/ and auth functions afterwards
export default function SignIn() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      email: '',
      phone_number: '',
      password: '',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // This will be type-safe and validated.
    console.log(values)
  }
  return (
    <>
      <Flex direction="column" align="center" justify="center" pt="4" gap="4">
        <Image src={Logo} width={50} height={50} alt="Piz Logo" />
        <Heading as="h2" color="pink">
          Sign up with Piz
        </Heading>
        <Box style={{ width: '200px', color: 'white' }}>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <Flex direction="column" gap="1">
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      {/* <FormLabel>Username</FormLabel> */}
                      <FormControl>
                        {/* <Input placeholder="Username, phone or email" {...field} /> */}
                        <TextField.Input placeholder="Username" {...field} />
                      </FormControl>
                      {/* <FormDescription>This is your public display name.</FormDescription> */}
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      {/* <FormLabel>Username</FormLabel> */}
                      <FormControl>
                        {/* <Input placeholder="Username, phone or email" {...field} /> */}
                        <TextField.Input placeholder="Email" {...field} />
                      </FormControl>
                      {/* <FormDescription>This is your public display name.</FormDescription> */}
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone_number"
                  render={({ field }) => (
                    <FormItem>
                      {/* <FormLabel>Username</FormLabel> */}
                      <FormControl>
                        {/* <Input placeholder="Username, phone or email" {...field} /> */}
                        <TextField.Input placeholder="Phone Number" {...field} />
                      </FormControl>
                      {/* <FormDescription>This is your public display name.</FormDescription> */}
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      {/* <FormLabel>Username</FormLabel> */}
                      <FormControl>
                        {/* <Input placeholder="Username, phone or email" {...field} /> */}
                        <TextField.Input placeholder="Password" {...field} />
                      </FormControl>
                      {/* <FormDescription>This is your public display name.</FormDescription> */}
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" color="pink" variant="soft" style={{ backgroundColor: "white", width: '100%' }}>
                  Submit
                </Button>
              </Flex>
            </form>
          </Form>
        </Box>
      </Flex>
    </>
  )
}
