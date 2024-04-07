import { Link } from '@chakra-ui/react'
import NextLink from 'next/link'
import React, { useState, useEffect } from 'react'

export default function LinkComponent({ children, href }: { children: React.ReactNode; href: string }) {
  return (
    <>
      <Link as={NextLink} href={href}>
        {children}
      </Link>
    </>
  )
}
