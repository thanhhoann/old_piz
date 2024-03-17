'use client'
import LinkComponent from '@/components/common/LinkComponent'
import React from 'react'

export interface INavItem {
  href?: string
  icon?: React.ReactNode
}

export default function NavItem({ icon, href = '#' }: INavItem) {
  return <LinkComponent href={href}>{icon}</LinkComponent>
}
