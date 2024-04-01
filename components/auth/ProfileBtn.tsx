'use client'
import { Button, Link } from '@chakra-ui/react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import NextLink from 'next/link'
import React, { useEffect } from 'react'

export default function ProfileBtn() {
  const [user, setUser] = React.useState<any | null>()

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

  return (
    <>
      <Button>
        <Link as={NextLink} href={`/${user?.user_metadata?.username}`}>
          Profile page
        </Link>
      </Button>
    </>
  )
}
