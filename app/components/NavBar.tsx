'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setToken } from '../../redux/action'
import Logout from './Logout'
import PublishProduct from './PublishProduct'

function NavBar() {

  let user = useSelector((state: any) => state.userToken)
  let dispatch = useDispatch()

  useEffect(() => {
    if(user === false){
     let token = localStorage.getItem('token')
     if(token === undefined || token === null){
      return 
     }else{
      dispatch(setToken())
     }
    }

  }, [user]) 

  return (
    //ocultar boton logout si hay token!
    <div className='flex gap-2'>
      {
        user === true ? <Logout /> : ''
      }
      <PublishProduct />
      <Link href='/home'>
      <button className='p-2 bg-black text-white'>Home</button>
      </Link>
    </div>
  )
}

export default NavBar