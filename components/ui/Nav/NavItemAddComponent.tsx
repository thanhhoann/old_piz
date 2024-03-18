import { iconStyles } from '@/utils/icon-styles'
import { Box, useDisclosure } from '@chakra-ui/react'
import { FaRegPenToSquare } from 'react-icons/fa6'
import NavItem from './NavItem'
import UserPostModal from './UserPostModal'

export default function NavItemAddComponent({ isMobile }: { isMobile?: boolean }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const iconStyleInactive = isMobile ? iconStyles.nav_mobile.inactive : iconStyles.nav_desktop.inactive

  return (
    <>
      <Box onClick={onOpen} cursor="pointer">
        <NavItem icon={<FaRegPenToSquare style={iconStyleInactive} />} />
      </Box>

      <UserPostModal isOpen={isOpen} onClose={onClose} />
    </>
  )
}
