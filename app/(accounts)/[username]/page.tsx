import FormWrapper from '@/components/auth/FormWrapper'
import LoggedInfo from '@/components/auth/LoggedInfo'
import ProfileBtn from '@/components/auth/ProfileBtn'
import { Center, Text } from '@chakra-ui/react'
import React from 'react'

export default function ProfilePage({ params }: { params: { username: string } }) {
  let username = params.username == 'undefined' ? 'please sign in' : params.username
  return (
    <>
      <Center h="70vh">
        <LoggedInfo />
      </Center>
    </>
  )
}
