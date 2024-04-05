'use client'
import { appBackgroundColor, searchBarBackgroundColor, searchBarBorderColor } from '@/utils/colors.utils'
import { maxWidth, screenSizes } from '@/utils/screen-sizes.utils'
import { Avatar, Button, Flex, Stack, Text } from '@chakra-ui/react'
import { useMedia } from 'use-media'

const mock_users = [
  {
    avatar: '',
    user_name: 'avid_dex',
    full_name: 'Avid December',
    no_followers: '8',
    follow_url: '#',
  },
  {
    avatar: '',
    user_name: 'avid_dex',
    full_name: 'Avid December',
    no_followers: '8',
    follow_url: '#',
  },
  {
    avatar: '',
    user_name: 'avid_dex',
    full_name: 'Avid December',
    no_followers: '8',
    follow_url: '#',
  },
  {
    avatar: '',
    user_name: 'avid_dex',
    full_name: 'Avid December',
    no_followers: '8',
    follow_url: '#',
  },
  {
    avatar: '',
    user_name: 'avid_dex',
    full_name: 'Avid December',
    no_followers: '8',
    follow_url: '#',
  },
  {
    avatar: '',
    user_name: 'avid_dex',
    full_name: 'Avid December',
    no_followers: '8',
    follow_url: '#',
  },
]

export default function UserList() {
  const isMobileS = useMedia(maxWidth(screenSizes.MOBILE_S))
  return (
    <>
      {mock_users?.map((user) => (
        <>
          <Flex mx="1rem" p="1rem" border="1px solid" rounded="1rem" borderColor={searchBarBorderColor} bg={searchBarBackgroundColor}>
            {!isMobileS && <Avatar mr="1rem" size="md" />}
            <Flex w="full" justify="space-between">
              <Stack>
                <Stack gap="0.1rem">
                  <Text fontWeight="800">{user.user_name}</Text>
                  <Text fontWeight="200">{user.full_name}</Text>
                </Stack>
                <Text>{user.no_followers} followers</Text>
              </Stack>
              <Button
                as="a"
                href={user.follow_url}
                border="1px solid"
                borderColor={searchBarBorderColor}
                bg={appBackgroundColor}
                color="white"
                _hover={{ bg: appBackgroundColor }}>
                Follow
              </Button>
            </Flex>
          </Flex>
        </>
      ))}
    </>
  )
}
