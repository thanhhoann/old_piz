'use client'

import { useMedia } from 'use-media'
import FooterWrapper from './FooterWrapper'

export default function Footer() {
  const isMobile = useMedia({ minWidth: '760px' })
  return <>{isMobile && <FooterWrapper>@2024 Piz</FooterWrapper>}</>
}
