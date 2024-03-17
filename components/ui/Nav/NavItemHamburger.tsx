import { HamburgerNoSelectSVG } from '@/assets/AssetUtil'
import { Menu, MenuButton, Button, MenuList, MenuItem } from '@chakra-ui/react'
import Image from 'next/image'
import { CiHome } from "react-icons/ci";


export default function NavItemHamburger() {
  return (
    <>
      <Menu>
        <MenuButton as={Button} bg='transparent' _hover={{ bg: 'transparent', color: 'white' }}>
          <Image src={HamburgerNoSelectSVG} width={50} height={50} alt="Hamburger" />
        </MenuButton>
        <MenuList>
          <MenuItem>Download</MenuItem>
          <MenuItem>Create a Copy</MenuItem>
          <MenuItem>Mark as Draft</MenuItem>
          <MenuItem>Delete</MenuItem>
          <MenuItem>Attend a Workshop</MenuItem>
        </MenuList>
      </Menu>
    </>
  )
}
