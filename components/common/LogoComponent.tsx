import { Link } from '@chakra-ui/react'
import NextLink from 'next/link'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import { Logo } from '@/assets/AssetUtil'
import { HomeRoute } from '@/utils/app-routes'

export default function LogoComponent({ w, h }: { w: number; h: number }) {
  return (
    <>
      <Link as={NextLink} href={HomeRoute}>
        <Image src={Logo} alt="Logo" width={w} height={h} priority={true} />
      </Link>
    </>
  )
}
