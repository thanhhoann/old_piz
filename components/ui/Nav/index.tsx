'use client'
import FooterWrapper from '@/components/common/FooterWrapper'
import { SignInRoute, SignUpRoute } from '@/utils/app-routes.utils'
import { minWidth, screenSizes } from '@/utils/screen-sizes.utils'
import { Center, Skeleton } from '@chakra-ui/react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'
import useMedia from 'use-media'
import LogoComponent from '../../common/LogoComponent'
import NavItemList from './NavItemList'

export default function Nav() {
  const [user, setUser] = React.useState<any | null>()
  const pathName = usePathname()
  const supabase = createClientComponentClient()
  const [isLoading, setLoading] = React.useState(true)
  const isDesktop = useMedia(minWidth(screenSizes.DESKTOP))

  async function getUser() {
    const {
      data: { user },
    } = await supabase.auth.getUser()
    setUser(user)
  }
  useEffect(() => {
    getUser()
  }, [])

  let timer = setTimeout(() => setLoading(false), 200)
  useEffect(() => {
    return () => {
      clearTimeout(timer)
    }
  }, [isLoading])

  const pathname = usePathname()

  if (pathname == SignInRoute || pathname == SignUpRoute) return <></>

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
