'use client'
import {
  ActivityNoSelectSVG,
  ActivitySelectSVG,
  AddSVG,
  HamburgerNoSelectSVG,
  HomeNoSelectSVG,
  HomeSelectSVG,
  SearchNoSelectSVG,
  SearchSelectSVG,
  UserNoSelectSVG,
  UserSelectSVG,
} from '@/assets/AssetUtil'
import { ActivityRoute, HomeRoute, SearchRoute } from '@/utils/app-routes'
import { Box, Center, Flex } from '@chakra-ui/react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import useMedia from 'use-media'
import LogoComponent from '../../common/LogoComponent'
import NavItem, { INavItem } from './NavItem'
import NavItemHamburger from './NavItemHamburger'

export default function Nav() {
  const [navItems, setNavItems] = React.useState<INavItem[]>()
  const [user, setUser] = React.useState<any | null>()
  const [currentNavItem, setCurrentNavItem] = React.useState(HomeRoute)
  let pathName = ''
  pathName = usePathname()
  let router = useRouter()

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

  useEffect(() => {
    if (pathName == HomeRoute) {
      setNavItems([
        { activeIcon: HomeSelectSVG, inactiveIcon: HomeNoSelectSVG, href: HomeRoute, isSelected: true },
        { activeIcon: SearchSelectSVG, inactiveIcon: SearchNoSelectSVG, href: SearchRoute, isSelected: false },
        { activeIcon: AddSVG, inactiveIcon: AddSVG, isAddComponent: true },
        { activeIcon: ActivitySelectSVG, inactiveIcon: ActivityNoSelectSVG, href: ActivityRoute, isSelected: false },
        {
          activeIcon: UserSelectSVG,
          inactiveIcon: UserNoSelectSVG,
          href: '/' + user?.user_metadata?.username,
          isSelected: false,
        },
      ])
    }
    if (pathName == SearchRoute) {
      setNavItems([
        { activeIcon: HomeSelectSVG, inactiveIcon: HomeNoSelectSVG, href: HomeRoute, isSelected: false },
        { activeIcon: SearchSelectSVG, inactiveIcon: SearchNoSelectSVG, href: SearchRoute, isSelected: true },
        { activeIcon: AddSVG, inactiveIcon: AddSVG, isAddComponent: true },
        { activeIcon: ActivitySelectSVG, inactiveIcon: ActivityNoSelectSVG, href: ActivityRoute, isSelected: false },
        {
          activeIcon: UserSelectSVG,
          inactiveIcon: UserNoSelectSVG,
          href: '/' + user?.user_metadata?.username,
          isSelected: false,
        },
      ])
    }
    if (pathName == ActivityRoute) {
      setNavItems([
        { activeIcon: HomeSelectSVG, inactiveIcon: HomeNoSelectSVG, href: HomeRoute, isSelected: false },
        { activeIcon: SearchSelectSVG, inactiveIcon: SearchNoSelectSVG, href: SearchRoute, isSelected: false },
        { activeIcon: AddSVG, inactiveIcon: AddSVG, isAddComponent: true },
        { activeIcon: ActivitySelectSVG, inactiveIcon: ActivityNoSelectSVG, href: ActivityRoute, isSelected: true },
        {
          activeIcon: UserSelectSVG,
          inactiveIcon: UserNoSelectSVG,
          href: '/' + user?.user_metadata?.username,
          isSelected: false,
        },
      ])
    }
    if (pathName == '/' + user?.user_metadata?.username) {
      setNavItems([
        { activeIcon: HomeSelectSVG, inactiveIcon: HomeNoSelectSVG, href: HomeRoute, isSelected: false },
        { activeIcon: SearchSelectSVG, inactiveIcon: SearchNoSelectSVG, href: SearchRoute, isSelected: false },
        { activeIcon: AddSVG, inactiveIcon: AddSVG, isAddComponent: true },
        { activeIcon: ActivitySelectSVG, inactiveIcon: ActivityNoSelectSVG, href: ActivityRoute, isSelected: false },
        {
          activeIcon: UserSelectSVG,
          inactiveIcon: UserNoSelectSVG,
          href: '/' + user?.user_metadata?.username,
          isSelected: true,
        },
      ])
    }
  }, [pathName])

  const isNarrow = useMedia({ minWidth: '760px' })

  return (
    <>
      {isNarrow ? (
        <>
          <Flex w="100vw" justifyContent="space-between" alignItems="center" p={5}>
            <LogoComponent w={50} h={50} />
            <Center>
              <Flex gap="3rem" alignItems="center">
                {navItems?.map((item) => <NavItem {...item} />)}
              </Flex>
            </Center>
            <NavItemHamburger />
          </Flex>
        </>
      ) : (
        <>
          <Flex w="100vw" justifyContent="space-between" alignItems="center" py={5}>
            <Box />
            <Box ml="3rem">
              <LogoComponent w={50} h={50} />
            </Box>
            <Image src={HamburgerNoSelectSVG} width={50} height={50} alt="Hamburger" />
          </Flex>
          <footer
            style={{
              position: 'fixed',
              bottom: 0,
              left: 0,
              width: '100vw',
              color: '#fff',
              padding: '10px',
              textAlign: 'center',
            }}>
            <Center>
              <Flex px="1rem" py="0.5rem" gap="3rem" alignItems="center">
                {navItems?.map((item) => <NavItem {...item} />)}
              </Flex>
            </Center>
          </footer>
        </>
      )}
    </>
  )
}
