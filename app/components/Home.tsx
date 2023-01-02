'use client'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import Swal from 'sweetalert2';
import Product from './Product';

// import Products from './Products';

type Props = {
  products : Array<{
    name: string,
    img:string,
    category: string
  }>
}

  

function Home({products}: Props) {
  
    let router = useRouter()
    
    //al final no, lo dejo por las dudas.

    // const ISSERVER = typeof window === "undefined";
    // useEffect(() => {
    // if(localStorage.getItem('token') === undefined || localStorage.getItem('token') === null){
    //   Swal.fire({
    //     text:'Necesitas iniciar sesión!'
    //   })
    //   return router.push('/login')
    // }
    // if (!ISSERVER){
    //   const item = window.localStorage.getItem('token')
    //   if(item === null || item === undefined){
    //    return router.push('/login')
    //   }
    // }
    // },[ISSERVER])

  return (
    <div className='flex flex-wrap'>
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