'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteToken } from '../../redux/action'

function Logout() {

    const router = useRouter()
    const dispatch = useDispatch()

    const handleClick = () => {
        localStorage.removeItem('token')
        dispatch(deleteToken())
       return router.push('/login')
    }

  return (
    <button className='p-2 bg-black text-white' onClick={() => handleClick()}>LOGOUT</button>
  )
}

export default Logout