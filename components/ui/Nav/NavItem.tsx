'use client'
import LinkComponent from '@/components/common/LinkComponent'
import { Box, Button } from '@chakra-ui/react'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import React from 'react'
import NavItemAddComponent from './NavItemAddComponent'

export interface INavItem {
  activeIcon: string | StaticImport
  inactiveIcon: string | StaticImport
  href?: string
  isSelected?: boolean
  isAddComponent?: boolean
}

export default function NavItem({ activeIcon, inactiveIcon, href = '#', isSelected, isAddComponent = false }: INavItem) {
  return (
    <>
      {isAddComponent ? (
        <>
          <NavItemAddComponent icon={activeIcon}/>
        </>
      ) : (
        <LinkComponent href={href}>
          <Image src={isSelected ? activeIcon : inactiveIcon} alt="Nav Item Logo" width={60} height={60} />
        </LinkComponent>
      )}
    </>
  )
}
