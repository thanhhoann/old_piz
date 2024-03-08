import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'
import Footer from '@/app/ui/Footer'

import { Providers } from './providers'
import { appBackgroundColor } from '@/utils/colors'

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
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
