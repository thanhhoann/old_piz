import { WarningIcon } from '@/assets/AssetUtil'
import { Box, Flex, Text } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'

export default function FormErrorMessage({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Box>
        <Flex>
          <WarningIcon />
          <Text>{children}</Text>
        </Flex>
      </Box>
    </>
  )
}
