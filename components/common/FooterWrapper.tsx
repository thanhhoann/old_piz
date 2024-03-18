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
          padding: '10px',
          textAlign: 'center',
          fontWeight: '800',
        }}>
        {children}
      </footer>
    </>
  )
}
