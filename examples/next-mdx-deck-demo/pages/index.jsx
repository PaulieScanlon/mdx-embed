import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

export default function index() {
  const router = useRouter()

  useEffect(() => {
    router.replace('/slides/1')
  })
  return <div />
}
