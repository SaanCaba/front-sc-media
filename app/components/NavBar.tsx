'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteToken, setToken } from '../../redux/action'
import Button from './myTags/Button'

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

  const handleLogout = () =>{
    localStorage.removeItem('token')
    localStorage.removeItem('userID')
    localStorage.removeItem('userName')
    dispatch(deleteToken())
  }

  return (
    //ocultar boton logout si hay token!
    <div className='flex w-full justify-center'>
      {
        user === true ? (
          <Link href='/login'>
          <Button method={handleLogout} type={'button'} message={'Logout'} styles={'p-2 bg-black text-white'} />
          </Link>
        )
        : (
          <Link href='/login'>
          <Button type={'button'} styles={'p-2 bg-black text-white'} message={'Login'}></Button>
          </Link>
        )
      }
    </div>

  )
}

export default NavBar