'use client'
import LoggedInfo from '@/components/auth/LoggedInfo'
import { useUserStore } from '@/store/user-store'
import { Flex } from '@chakra-ui/react'
import { createSelectorFunctions } from 'auto-zustand-selectors-hook'

export default function Home() {
  const userStore = createSelectorFunctions(useUserStore)
  const username = userStore.use.username()
  return (
    <>
      <Flex direction="column" justifyContent="center" alignItems="center" gap="2rem" mt="4rem">
        <LoggedInfo />
      </Flex>
    </>
  )
}
