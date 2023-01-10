'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteToken } from '../../redux/action'

interface Props{
  theme : string | null
}

function Logout({theme} : Props) {

    const router = useRouter()
    const dispatch = useDispatch()

    const handleClick = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('userID')
        localStorage.removeItem('userName')
        dispatch(deleteToken())
       return router.push('/login')
    }

  return (
    <button className={ theme === 'dark' ? 'p-2 bg-white text-black' : 'p-2 bg-black text-white'} onClick={() => handleClick()}>LOGOUT</button>
  )
}

export default Logout