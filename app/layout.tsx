import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'
import '@radix-ui/themes/styles.css'
import { Theme, ThemePanel } from '@radix-ui/themes'
import '@/styles/theme-config.css'
import Footer from '@app/ui/Footer'

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
      <body style={{ backgroundColor: 'black', color: '#ffffff' }}>
        <Theme accentColor="sky" grayColor="slate" panelBackground="solid" scaling="90%">
          {children}
          <Footer />
          {/* <ThemePanel /> */}
        </Theme>
      </body>
    </html>
  )
}
