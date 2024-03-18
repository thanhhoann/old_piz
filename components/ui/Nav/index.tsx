'use client'
import FooterWrapper from '@/components/common/FooterWrapper'
import { Box, Center, Flex } from '@chakra-ui/react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'
import useMedia from 'use-media'
import LogoComponent from '../../common/LogoComponent'
import NavItemHamburger from './NavItemHamburger'
import NavItemList from './NavItemList'

export default function Nav() {
  const [user, setUser] = React.useState<any | null>()
  const isNarrow = useMedia({ minWidth: '760px' })
  const pathName = usePathname()
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

  return (
    <>
      {isNarrow ? (
        <>
          <Center my='3' >
            {/* <Flex  justifyContent="space-around" alignItems="center"  p='2'> */}
              {/* <LogoComponent size={50} /> */}
              <NavItemList username={user?.user_metadata.username} pathName={pathName} />
              {/* <NavItemHamburger /> */}
            {/* </Flex> */}
          </Center>
        </>
      ) : (
        <>
          {/* <Flex w="100vw" justifyContent="space-between" alignItems="center" py={5}> */}
            {/* <Box /> */}
            <Center p='5'>
              <LogoComponent size={50} />
            </Center>
            {/* <NavItemHamburger /> */}
          {/* </Flex> */}
          <FooterWrapper>
            <NavItemList pathName={pathName} isMobile/>
          </FooterWrapper>
        </>
      )}
    </>
  )
}
