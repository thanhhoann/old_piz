'use client'
import UserAvatar from '@/components/common/UserAvatar'
import { authStore } from '@/store/auth-store'
import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Input,
  Stack,
  Stat,
  StatArrow,
  StatGroup,
  StatHelpText,
  StatLabel,
  StatNumber,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from '@chakra-ui/react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useEffect, useState } from 'react'

export default function ProfilePage({ params }: { params: { username: string } }) {
  const [loading, setLoading] = useState(true)
  const [username, setUsername] = useState(null)
  const [avatar_url, setAvatarUrl] = useState<string | null>(null)
  const [posts, setPosts] = useState([])

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
      <Center mt="3rem">
        <Flex flexDir="column" w="50vw">
          <Flex alignItems="center" justifyContent="space-between" gap={2} w="full">
            <Box>
              <Stack>
                <Heading>{user?.username}</Heading>
                {/* <Flex gap="0.5rem"> */}
                {/* <AvatarGroup size="xs" max={2}> */}
                {/*   <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" /> */}
                {/*   <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" /> */}
                {/*   <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" /> */}
                {/*   <Avatar name="Prosper Otemuyiwa" src="https://bit.ly/prosper-baba" /> */}
                {/*   <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" /> */}
                {/* </AvatarGroup> */}
                {/* <Text fontSize="1.2rem" color="gray.600"> */}
                {/*   14.1k followers */}
                {/* </Text> */}
                {/* </Flex> */}
                <StatGroup gap='8'>
                  <Stat>
                    <StatLabel>Followers</StatLabel>
                    <StatNumber>345</StatNumber>
                  </Stat>

                  <Stat>
                    <StatLabel>Views</StatLabel>
                    <StatNumber>45</StatNumber>
                  </Stat>
                </StatGroup>
              </Stack>
            </Box>
            <Box>
              <UserAvatar
                url={avatar_url}
                size={150}
                onUpload={(url: string) => {
                  setAvatarUrl(url)
                }}
              />
            </Box>
          </Flex>

          <Button my="2rem" variant="outline" color="white">
            Edit profile
          </Button>

          <Tabs pos="relative" isFitted variant="unstyled">
            <TabList>
              <Tab>Posts</Tab>
              <Tab>Likes</Tab>
              <Tab>Dislikes</Tab>
            </TabList>
            <TabIndicator mt="-1.5px" height="2px" bg="white" borderRadius="1px" />
            <TabPanels>
              <TabPanel>
                <Center h="30vh">
                  <Button variant="outline" color="white">
                    Start your first post
                  </Button>
                </Center>
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
              <TabPanel>
                <p>three!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Flex>
      </Center>
    </>
  )
}
