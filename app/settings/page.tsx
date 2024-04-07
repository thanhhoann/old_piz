'use client'
import UserAvatar from '@/components/auth/UserAvatar'
import { authStore } from '@/store/auth-store'
import { Box, Button, Center, Flex, Input, Text } from '@chakra-ui/react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useEffect, useState } from 'react'

export default function SettingsPage() {
  const [loading, setLoading] = useState(true)
  const [username, setUsername] = useState(null)
  const [avatar_url, setAvatarUrl] = useState<string | null>(null)

  const supabase = createClientComponentClient()
  const user = authStore.use.user()

  useEffect(() => {
    let ignore = false
    async function getProfile() {
      setLoading(true)

      const { data, error } = await supabase.from('profiles').select(`avatar_url`).eq('id', user?.id).single()

      if (!ignore) {
        if (error) {
          console.warn(error)
        } else if (data) {
          console.log(data)
          setAvatarUrl(data.avatar_url)
        }
      }

      setLoading(false)
    }

    getProfile()

    return () => {
      ignore = true
    }
  }, [user])

  async function updateProfile(event: any) {
    event.preventDefault()

    setLoading(true)

    const updates = {
      id: user?.id,
      username,
      avatar_url: avatar_url,
      updated_at: new Date(),
    }

    const { error } = await supabase.from('profiles').upsert(updates)

    if (error) {
      alert(error.message)
    } else {
      setAvatarUrl(avatar_url)
    }
    setLoading(false)
  }

  return (
    <>
      <Center h="70vh">
        <form onSubmit={updateProfile} className="form-widget">
          <Flex flexDir="column" gap={2}>
            <UserAvatar
              url={avatar_url}
              size={150}
              onUpload={(url: string) => {
                setAvatarUrl(url)
              }}
            />
            <Box>
              <Text>Email</Text>
              <Input id="email" type="email" value={user?.email} disabled />
            </Box>
            <Box>
              <Text>New Username</Text>
              <Input
                id="username"
                type="text"
                value={username || ''}
                required
                placeholder={user?.username}
                onChange={(e: any) => setUsername(e.target.value)}
              />
            </Box>

            <Button type="submit" disabled={loading}>
              {loading ? 'Loading ...' : 'Update'}
            </Button>
            <Button onClick={() => supabase.auth.signOut()}>Sign Out</Button>
          </Flex>
        </form>
      </Center>
    </>
  )
}
