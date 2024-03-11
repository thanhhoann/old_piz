import LoggedInfo from '@/components/auth/logged-info'
import { LoginButton } from '@/components/auth/login-button'
import { Button } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import { auth } from './lib/auth'

export default function Home() {
  return (
    <>
      <LoggedInfo />
      <LoginButton>
        <Button>Sign In</Button>
      </LoginButton>
    </>
  )
}
