'use client'
import LinkComponent from '@/components/common/LinkComponent'
import { Box, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import UserPostModal from './UserPostModal'

export interface INavItem {
  href?: string
  icon?: React.ReactNode
  openModal?: boolean
}

export default function NavItem({ icon, href, openModal }: INavItem) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const hanldeOpenModal = () => {
    if (openModal) {
      onOpen()
    }
  }

  return (
    <>
      <Box onClick={hanldeOpenModal}>
        {href ? (
          <LinkComponent href={href}>
            <Box m="1rem">{icon}</Box>
          </LinkComponent>
        ) : (
          <Box m="1rem">{icon}</Box>
        )}
      </Box>

      <UserPostModal isOpen={isOpen} onClose={onClose} />
    </>
  )
}
