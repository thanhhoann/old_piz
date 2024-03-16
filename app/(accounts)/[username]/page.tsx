import React from 'react'

export default function ProfilePage({ params }: { params: { username: string } }) {
  return <>Hi user @{params.username}</>
}
