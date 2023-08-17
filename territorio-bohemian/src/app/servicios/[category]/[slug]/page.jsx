'use client'
import { useSearchParams } from 'next/navigation'

export default function Service () {

    const searchParams = useSearchParams()
 
    const search = searchParams.get('product')

    console.log(search)

    return <div></div>
}

