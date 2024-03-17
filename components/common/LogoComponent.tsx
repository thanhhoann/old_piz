import { Logo } from '@/assets/AssetUtil'
import { HomeRoute } from '@/utils/app-routes'
import { Link } from '@chakra-ui/react'
import Image from 'next/image'
import NextLink from 'next/link'

export default function LogoComponent({size}: {size: number}) {
  return (
    <>
      <Link as={NextLink} href={HomeRoute}>
        <Image src={Logo} alt="Logo" width={size} height={size} priority={true} />
      </Link>
    </>
  )
}
