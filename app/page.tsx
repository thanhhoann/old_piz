import { LoginButton } from '@/components/auth/login-button'
import { Button } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'

export default function Home() {
  return (
    <>
      <LoginButton>
        <Button>Sign In</Button>
      </LoginButton>
    </>
  )
}
