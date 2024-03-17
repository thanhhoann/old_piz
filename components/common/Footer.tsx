'use client'

import { useMedia } from 'use-media'

export default function Footer() {
  const isMobile = useMedia({ minWidth: '760px' })
  return (
    <>
      {isMobile && (
        <footer
          style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            width: '100%',
            color: '#fff',
            padding: '10px',
            textAlign: 'center',
          }}>
          @2024 Piz
        </footer>
      )}
    </>
  )
}
