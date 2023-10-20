import MainLayout from '@/components/layouts'
import { useRouter } from 'next/router'
import React from 'react'

const TaggedItems = () => {
  const router = useRouter()
  const slug = router.query.slug
  return (
    <MainLayout>{slug}</MainLayout>
  )
}

export default TaggedItems