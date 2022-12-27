'use client'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

function Home() {

    let token = localStorage.getItem('token')
    let router = useRouter()

    useEffect(() => {
        if(token === undefined || token === null){
            return router.push('/login')
        }
    })
  return (
    <div>
        Home!
    </div>
  )
}

export default Home