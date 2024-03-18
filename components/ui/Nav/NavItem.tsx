'use client'
import LinkComponent from '@/components/common/LinkComponent'
import { navItemHoverBackgroundColor } from '@/utils/colors'
import { Box, Button } from '@chakra-ui/react'
import React from 'react'

export interface INavItem {
  href?: string
  icon?: React.ReactNode
}

export default function NavItem({ icon, href = '#' }: INavItem) {
  return (
    <>
      <Button bg="transparent" _hover={{ bg: navItemHoverBackgroundColor }} h="full">
        <Box>
          {href ? (
            <LinkComponent href={href}>
              <Box m="1rem">{icon}</Box>
            </LinkComponent>
          ) : (
            <>{icon}</>
          )}
        </Box>
      </Button>
    </>
  )
}
