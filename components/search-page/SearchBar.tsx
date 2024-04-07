import { searchBarBackgroundColor, searchBarBorderColor } from '@/utils/colors.utils'
import { Input } from '@chakra-ui/react'

export default function SearchBar() {
  return (
    <>
      <Input
        type="tel"
        placeholder="Search"
        border="1px solid white"
        borderColor={searchBarBorderColor}
        rounded="0.7rem"
        bg={searchBarBackgroundColor}
        focusBorderColor="white"
      />
    </>
  )
}
