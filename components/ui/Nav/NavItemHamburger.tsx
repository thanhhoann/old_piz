import { LikedRoute, SavedRoute, SettingsRoute } from '@/utils/app-routes'
import { menuItemBackgroundColor, menuItemHoverBackgroundColor } from '@/utils/colors'
import { iconStyles } from '@/utils/icon-styles'
import { Box, IconButton, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { RxHamburgerMenu } from 'react-icons/rx'

export default function NavItemHamburger() {
  const menuList = [
    { name: 'Settings', href: SettingsRoute },
    { name: 'Saved Posts', href: SavedRoute },
    { name: 'Liked Posts', href: LikedRoute },
    { name: 'Log out', href: '#' },
  ]

  return (
    <>
      <Box mr="1rem" position="relative" zIndex="9999">
        <Menu>
          {({ isOpen }) => (
            <>
              <MenuButton
                isActive={isOpen}
                as={IconButton}
                aria-label="Options"
                bg="transparent"
                _hover={{ bg: 'transparent' }}
                _active={{ bg: 'transparent' }}>
                <RxHamburgerMenu style={isOpen ? iconStyles.nav.active : iconStyles.nav.inactive} />
              </MenuButton>
              <MenuList bg='transparent' border="none">
                {menuList.map((item) => (
                  <MenuItem
                    as="a"
                    href={item.href}
                    bg={menuItemBackgroundColor}
                    _hover={{ bg: menuItemHoverBackgroundColor }}
                    border="1px"
                    borderColor="white"
                    rounded="lg"
                    my="0.5rem">
                    {item.name}
                  </MenuItem>
                ))}
              </MenuList>
            </>
          )}
        </Menu>
      </Box>
    </>
  )
}
