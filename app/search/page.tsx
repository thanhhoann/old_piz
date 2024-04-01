import SearchBar from '@/components/search/SearchBar'
import { appBackgroundColor, searchBarBackgroundColor, searchBarBorderColor } from '@/utils/colors'
import { Avatar, Box, Button, Center, Flex, Stack, Text } from '@chakra-ui/react'

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

export default function SearchPage() {
  return (
    <>
      <Center py="1rem" bg={appBackgroundColor} m="1rem" pos="sticky" top="0" zIndex="999">
        <SearchBar />
      </Center>

      <Stack mt="1rem" gap="0.7rem">
        {mock_users?.map((user) => (
          <>
            <Flex mx="1rem" p="1rem" border="1px solid" rounded="1rem" borderColor={searchBarBorderColor} bg={searchBarBackgroundColor}>
              <Avatar mr="1rem" size="lg" />
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
      </Stack>
    </>
  )
}
