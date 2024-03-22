import { ActivityRoute, HomeRoute, SearchRoute, SettingsRoute } from '@/utils/app-routes'
import { iconStyles } from '@/utils/icon-styles'
import { Flex } from '@chakra-ui/react'
import { FaRegHeart } from 'react-icons/fa'
import { LuUser } from 'react-icons/lu'
import { SlSettings } from 'react-icons/sl'
import { TbSearch } from 'react-icons/tb'
import { VscHome } from 'react-icons/vsc'

import { FaRegPenToSquare } from 'react-icons/fa6'
import NavItem from './NavItem'

type NavItemListProps = {
  pathName?: string
  username?: string
  isMobile?: boolean
}

export default function NavItemList({ isMobile, username, pathName }: NavItemListProps) {
  const userRoute = '/' + username
  const iconStyleActive = isMobile ? iconStyles.nav_mobile.active : iconStyles.nav_desktop.active
  const iconStyleInactive = isMobile ? iconStyles.nav_mobile.inactive : iconStyles.nav_desktop.inactive
  return (
    <>
      <Flex gap="2rem" alignItems="center">
        <NavItem
          href={HomeRoute}
          icon={pathName == HomeRoute ? <VscHome style={iconStyleActive} /> : <VscHome style={iconStyleInactive} />}
        />
        <NavItem
          href={SearchRoute}
          icon={pathName == SearchRoute ? <TbSearch style={iconStyleActive} /> : <TbSearch style={iconStyleInactive} />}
        />
        <NavItem icon={<FaRegPenToSquare style={iconStyleInactive} />} openModal />
        <NavItem
          href={ActivityRoute}
          icon={pathName == ActivityRoute ? <FaRegHeart style={iconStyleActive} /> : <FaRegHeart style={iconStyleInactive} />}
        />
        <NavItem
          href={userRoute}
          icon={pathName == userRoute ? <LuUser style={iconStyleActive} /> : <LuUser style={iconStyleInactive} />}
        />
        <NavItem
          href={SettingsRoute}
          icon={pathName == SettingsRoute ? <SlSettings style={iconStyleActive} /> : <SlSettings style={iconStyleInactive} />}
        />
      </Flex>
    </>
  )
}
