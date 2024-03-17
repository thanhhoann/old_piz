import { ActivityRoute, HomeRoute, SearchRoute } from '@/utils/app-routes'
import { iconStyles } from '@/utils/icon-styles'
import { Center, Flex } from '@chakra-ui/react'
import { FaRegHeart } from 'react-icons/fa'
import { LuUser } from 'react-icons/lu'
import { TbSearch } from 'react-icons/tb'
import { VscHome } from 'react-icons/vsc'
import NavItem from './NavItem'
import NavItemAddComponent from './NavItemAddComponent'

type NavItemListProps = {
  pathName?: string
  username?: string
}

export default function NavItemList({ username, pathName }: NavItemListProps) {
  const userRoute = '/' + username
  return (
    <>
      <Center>
        <Flex gap="3rem" alignItems="center">
          <NavItem
            href={HomeRoute}
            icon={pathName == HomeRoute ? <VscHome style={iconStyles.nav.active} /> : <VscHome style={iconStyles.nav.inactive} />}
          />
          <NavItem
            href={SearchRoute}
            icon={pathName == SearchRoute ? <TbSearch style={iconStyles.nav.active} /> : <TbSearch style={iconStyles.nav.inactive} />}
          />
          <NavItemAddComponent />
          <NavItem
            href={ActivityRoute}
            icon={pathName == ActivityRoute ? <FaRegHeart style={iconStyles.nav.active} /> : <FaRegHeart style={iconStyles.nav.inactive} />}
          />
          <NavItem
            href={userRoute}
            icon={pathName == userRoute ? <LuUser style={iconStyles.nav.active} /> : <LuUser style={iconStyles.nav.inactive} />}
          />
        </Flex>
      </Center>
    </>
  )
}
