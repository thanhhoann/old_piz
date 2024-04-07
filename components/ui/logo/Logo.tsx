import { Logo } from '@/assets/AssetUtil'
import { HomeRoute } from '@/utils/app-routes.utils'
import { Link } from '@chakra-ui/react'
import Image from 'next/image'
import NextLink from 'next/link'

export default function LogoComponent() {
  return (
    <>
      <Link as={NextLink} href={HomeRoute}>
        <Image src={Logo} alt="Logo" width={70} height={70} priority={true} />
      </Link>
    </>
  )
}
