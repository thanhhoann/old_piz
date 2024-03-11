import { warningBackgroundColor } from '@/utils/colors'
import { WarningIcon } from '@chakra-ui/icons'
import { Box, Flex, Text } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'

export default function FormError({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Box my='0.6rem' p="0.2rem" bg={warningBackgroundColor} color='black' border='1px' rounded='0.4rem'>
        <Flex  alignItems="center" gap='2rem' pl='0.5rem'>
          <WarningIcon />
          <Text>{children}</Text>
        </Flex>
      </Box>
    </>
  )
}
