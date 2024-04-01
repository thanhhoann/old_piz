import Footer from '@/components/common/Footer'
import Nav from '@/components/ui/Nav'
import { appBackgroundColor } from '@/utils/colors'
import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'
import { Providers } from './providers'

const raleway = Raleway({ subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
  title: 'Piz',
  description: 'A Social media Platform.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={raleway.className}>
      <body style={{ backgroundColor: appBackgroundColor, color: '#ffffff' }}>
        <Providers>
          <Nav />
          {children}
        </Providers>
      </body>
    </html>
  )
}
