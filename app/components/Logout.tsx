'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

function Logout() {

    const router = useRouter()

    const handleClick = () => {
        localStorage.removeItem('token')
       return router.push('/login')
    }

  return (
    <button onClick={() => handleClick()}>LOGOUT</button>
  )
}

export default Logout