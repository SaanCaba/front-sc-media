'use client'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import Product from './Product';

// import Products from './Products';

type Props = {
  products : Array<{
    name: string,
    img:string,
    category: string
    _id: string
  }>
}

  

function Home({products}: Props) {
  
    let router = useRouter()
    const [theme, setTheme] = useState<null | string>('')
    // al final no, lo dejo por las dudas.

    const ISSERVER = typeof window === "undefined";
    useEffect(() => {
      let tema = localStorage.getItem('theme')
      setTheme(tema)
      console.log(theme)
    if(localStorage.getItem('token') === undefined || localStorage.getItem('token') === null){
      Swal.fire({
        text:'Necesitas iniciar sesión!'
      })
      return router.push('/login')
    }
    if (!ISSERVER){
      const item = window.localStorage.getItem('token')
      if(item === null || item === undefined){
       return router.push('/login')
      }
    }

    },[ISSERVER, theme])

  return (
    <div className={theme === 'dark' ? 'bg-[#343538] text-white h-screen flex flex-wrap gap-5' : 'flex h-screen flex-wrap gap-5'}>
      {
        products.map((e, i) => {
          return(
            <Product key={i} product={e} />
            )
          })
      }
    </div>
  )
}

export default Home