import { Toast, useToast } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'

interface CustomToastProps {
  title: string
  desc: string
  status: 'success' | 'error' | 'warning' | 'info'
  duration: number
  isClosable: boolean
}

export default function CustomToast({ title, desc, status, duration, isClosable }: CustomToastProps) {
  const toast = useToast()

  return toast({
    title: title,
    description: desc,
    status: status,
    duration: duration,
    isClosable: isClosable,
  })
}
