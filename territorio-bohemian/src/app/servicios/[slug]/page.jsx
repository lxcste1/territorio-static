'use client'
import { usePathname } from 'next/navigation'
import services from '@/api/api.js'

export default function Page () {

    const data = services();

    return <div></div>
}
