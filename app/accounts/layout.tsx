import { Flex, Heading } from '@chakra-ui/react'
import Image from 'next/image'
import { Logo } from '../assets/AssetUtil'

export default function AccountsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Flex direction="column" justifyContent="center" alignItems="center" gap="2rem" mt="7rem">
        <Image src={Logo} alt="Logo" width={70} height={70} />
          {children}
      </Flex>
    </>
  )
}
