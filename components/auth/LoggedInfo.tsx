'use client'
import { Text, Box, Button, Flex } from '@chakra-ui/react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
// import { auth } from '@/app/lib/auth'
// import { useSession } from 'next-auth/react'
import React, { useState, useEffect } from 'react'
import { LoginButton } from './LoginBtn'
import { useRouter } from 'next/navigation'

export default function LoggedInfo() {
  const [user, setUser] = React.useState<any | null>()

  const router = useRouter()

  const supabase = createClientComponentClient()
  useEffect(() => {
    async function getUser() {
      const {
        data: { user },
      } = await supabase.auth.getUser()
      setUser(user)
    }

    getUser()
  }, [])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.refresh()
    setUser(null)
  }

  return (
    <>
      {user ? (
        <Flex direction="column" gap="1rem">
          <Text>
            Logged in as: <Text as="b">{user?.email}</Text>
          </Text>

          <Text>
            Username: <Text as="b">{user?.user_metadata?.username}</Text>
          </Text>
          <Button onClick={handleLogout}>Log out</Button>
        </Flex>
      ) : (
        <LoginButton>
          <Button>Sign In</Button>
        </LoginButton>
      )}
    </>
  )
}
