'use client'
import { ChakraProvider } from '@chakra-ui/react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { SessionProvider } from 'next-auth/react'
import { useEffect } from 'react'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <ChakraProvider>{children}</ChakraProvider>
    </SessionProvider>
  )
}

