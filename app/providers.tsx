'use client'
import { authStore } from '@/store/auth-store'
import { SignInRoute } from '@/utils/app-routes'
import { ChakraProvider } from '@chakra-ui/react'
import { SessionProvider } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export function Providers({ children }: { children: React.ReactNode }) {
  const isAuthenticated = authStore.use.isAuthenticated()
  const router = useRouter()

  useEffect(() => {
    if (isAuthenticated == false) router.push(SignInRoute)
  }, [])
  return (
    <SessionProvider>
      <ChakraProvider>{children}</ChakraProvider>
    </SessionProvider>
  )
}
