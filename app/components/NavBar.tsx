'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setToken } from '../../redux/action'
import LoginButton from './LoginButton'
import Logout from './Logout'
import PublishProduct from './PublishProduct'

function NavBar() {

  let user = useSelector((state: any) => state.userToken)
  console.log(user)
  let dispatch = useDispatch()
  const [theme, setTheme] = useState<null | string>('')

  useEffect(() => {
    let tema = localStorage.getItem('theme')
    setTheme(tema)
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
    <div className={theme === 'dark' ? ' bg-[#343538] z-50': 'z-50' }>
    <div className='flex w-screen justify-center gap-2'>
      {
        user === true ? <Logout theme={theme} /> : <LoginButton />
      }
      <PublishProduct theme={theme} />
      <Link href='/home'>
      <button className={ theme === 'dark' ? 'p-2 bg-white text-black' : 'p-2 bg-black text-white'}>Home</button>
      </Link>
      {
        user === true ? (
          <Link href='/profile'>
      <button className={ theme === 'dark' ? 'p-2 bg-white text-black' : 'p-2 bg-black text-white'}>Profile</button>
         </Link>
        ) : ''
      }
    </div>
    </div>

  )
}

export default NavBar