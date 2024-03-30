import React from 'react'

export default function FooterWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <footer
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          width: '100%',
          textAlign: 'center',
          fontWeight: '800',
          zIndex: 9999,
        }}>
        {children}
      </footer>
    </>
  )
}
