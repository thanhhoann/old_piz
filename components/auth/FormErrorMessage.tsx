import { iconStyles } from '@/utils/icon-styles';
import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { PiSealWarning } from "react-icons/pi";


export default function FormErrorMessage({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Box  p='1' my='3' rounded='md'>
        <Flex   alignItems='center' gap='1rem'>
          <PiSealWarning style={iconStyles.input.error} />
          <Text  fontWeight='semibold'>{children}</Text>
        </Flex>
      </Box>
    </>
  )
}
