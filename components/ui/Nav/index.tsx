'use client'
import { Center, Flex } from '@chakra-ui/react'
import LogoComponent from '../../common/LogoComponent'
import NavItem, { INavItem } from './NavItem'
import {
  ActivityNoSelectSVG,
  ActivitySelectSVG,
  AddSVG,
  HamburgerSVG,
  HomeNoSelectSVG,
  HomeSelectSVG,
  Logo,
  SearchNoSelectSVG,
  SearchSelectSVG,
  UserNoSelectSVG,
  UserSelectSVG,
  ViewIcon,
} from '@/assets/AssetUtil'
import { ActivityRoute, HomeRoute, ProfileRoute, SearchRoute } from '@/utils/app-routes'
import { useRouter, usePathname } from 'next/navigation'
import React, { useEffect } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import Image from 'next/image'

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
    console.log(user)
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

  return (
    <>
      <Flex w="100vw" justifyContent="space-between" p={5}>
        <LogoComponent w={50} h={50} />
        <Center>
          <Flex gap={10}>{navItems?.map((item) => <NavItem {...item} />)}</Flex>
        </Center>
        <Image src={HamburgerSVG} width={50} height={50} alt="Hamburger" />
      </Flex>
    </>
  )
}
