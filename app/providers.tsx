'use client'
import { authStore } from '@/store/auth-store'
import { SignInRoute } from '@/utils/app-routes.utils'
import { ChakraProvider } from '@chakra-ui/react'
import { SessionProvider } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export function Providers({ children }: { children: React.ReactNode }) {
  const isAuthenticated = authStore.use.isAuthenticated()
  const router = useRouter()

  if (isAuthenticated == false) router.push(SignInRoute)
  // useEffect(() => {
  //   if (isAuthenticated == false) router.push(SignInRoute)
  // }, [])

  return (
    <SessionProvider>
      <ChakraProvider>{children}</ChakraProvider>
    </SessionProvider>
  )
}
