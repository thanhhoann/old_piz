'use client'
import { SignInRoute } from '@/utils/app-routes'
import { useRouter } from 'next/navigation'

interface LoginButtonProps {
  children: React.ReactNode
  mode?: 'modal' | 'redirect'
  asChild?: boolean
}

export const LoginButton = ({ children, mode = 'redirect', asChild }: LoginButtonProps) => {
  const router = useRouter()
  const handleClick = () => {
    router.push(SignInRoute)
  }

  if (mode == 'modal') {
    return (
      <>
        <span>hi</span>
      </>
    )
  }

  return (
    <>
      <span onClick={handleClick} className="cursor-pointer">
        {children}
      </span>
    </>
  )
}
