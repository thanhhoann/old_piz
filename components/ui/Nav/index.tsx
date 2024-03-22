'use client'
import FooterWrapper from '@/components/common/FooterWrapper'
import { Box, Center, Flex, Skeleton } from '@chakra-ui/react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { usePathname } from 'next/navigation'
import React, { Suspense, useEffect } from 'react'
import useMedia from 'use-media'
import LogoComponent from '../../common/LogoComponent'
import NavItemHamburger from './NavItemHamburger'
import NavItemList from './NavItemList'

export default function Nav() {
  const [user, setUser] = React.useState<any | null>()
  const isDesktop = useMedia({ minWidth: '760px' })
  const pathName = usePathname()
  const supabase = createClientComponentClient()
  const [isLoading, setLoading] = React.useState(true)

  async function getUser() {
    const {
      data: { user },
    } = await supabase.auth.getUser()
    setUser(user)
  }
  useEffect(() => {
    getUser()
  }, [])

  let timer = setTimeout(() => setLoading(false), 1000)
  useEffect(() => {
    return () => {
      clearTimeout(timer)
    }
  }, [isLoading])

  return (
    <>
      {isDesktop ? (
        <>
          <Center my="3">
            <Skeleton isLoaded={!isLoading}>
              <NavItemList username={user?.user_metadata.username} pathName={pathName} />
            </Skeleton>
          </Center>
        </>
      ) : (
        <>
          <Center p="5">
            <LogoComponent size={50} />
          </Center>
          <FooterWrapper>
            <Skeleton isLoaded={!isLoading}>
              <NavItemList pathName={pathName} isMobile />
            </Skeleton>
          </FooterWrapper>
        </>
      )}
    </>
  )
}
