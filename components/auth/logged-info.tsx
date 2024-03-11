import { auth } from '@/app/lib/auth'
import { useSession } from 'next-auth/react'
import React, { useState, useEffect } from 'react'

export default async function LoggedInfo(props) {
  const session = await auth()
  return <>Welcome {session?.user?.name}!</>
}
