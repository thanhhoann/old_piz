import SearchBar from '@/components/search-page/SearchBar'
import UserList from '@/components/search-page/UserList'
import { appBackgroundColor, searchBarBackgroundColor, searchBarBorderColor } from '@/utils/colors.utils'
import { Avatar, Box, Button, Center, Flex, Stack, Text } from '@chakra-ui/react'

export default function SearchPage() {
  return (
    <>
      <Center py="1rem" bg={appBackgroundColor} m="1rem" pos="sticky" top="0" zIndex="999">
        <SearchBar />
      </Center>

      <Stack mt="1rem" gap="0.7rem">
        <UserList />
      </Stack>
    </>
  )
}
