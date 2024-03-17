'use client'
import FooterWrapper from '@/components/common/FooterWrapper'
import { Box, Flex } from '@chakra-ui/react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'
import useMedia from 'use-media'
import LogoComponent from '../../common/LogoComponent'
import NavItemHamburger from './NavItemHamburger'
import NavItemList from './NavItemList'

export default function Nav() {
  const [user, setUser] = React.useState<any | null>()

  let pathName = usePathname()

  const supabase = createClientComponentClient()
  async function getUser() {
    const {
      data: { user },
    } = await supabase.auth.getUser()
    setUser(user)
  }
  useEffect(() => {
    getUser()
  }, [])

  const isNarrow = useMedia({ minWidth: '760px' })

  return (
    <>
      {isNarrow ? (
        <>
          <Flex w="100vw" justifyContent="space-between" alignItems="center" p={5}>
            <LogoComponent size={50}/>
            <NavItemList username={user?.user_metadata.username} pathName={pathName} />
            <NavItemHamburger />
          </Flex>
        </>
      ) : (
        <>
          <Flex w="100vw" justifyContent="space-between" alignItems="center" py={5}>
            <Box />
            <Box ml="3rem">
              <LogoComponent size={50}/>
            </Box>
            <NavItemHamburger />
          </Flex>
          <FooterWrapper>
            <NavItemList pathName={pathName} />
          </FooterWrapper>
        </>
      )}
    </>
  )
}
