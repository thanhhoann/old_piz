import { Link } from '@chakra-ui/react'
import NextLink from 'next/link'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'

export default function Logo({ link }: { link: string }) {
  return (
    <>
      <Link as={NextLink} href={link}>
        <Image src={Logo} alt="Logo" width={70} height={70} priority={true} />
      </Link>
    </>
  )
}
