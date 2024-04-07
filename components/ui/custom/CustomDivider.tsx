import { appBackgroundColor } from '@/utils/colors.utils'
import { Box, Text, Divider, AbsoluteCenter } from '@chakra-ui/react'

export default function CustomDivider() {
  return (
    <>
      <Box position="relative">
        <Divider />
        <AbsoluteCenter bg={appBackgroundColor} px="4">
          <Text mx="0.1rem">or</Text>
        </AbsoluteCenter>
      </Box>
    </>
  )
}
