import Image from 'next/dist/client/image'
import React from 'react'

type Props = {
    product: {
        _id: string
        name: string
        img:string
        category:string
    }
}

function Detail({product} : Props) {
  return (
    <div className='bg-[#507c91] w-screen h-screen flex justify-center items-center'>
        <div className='flex flex-col'>
       <span className='text-center text-white font-semibold'>{product.name}</span> 
       <Image src={product.img} width={400} height={380} alt={product.name} />
        </div>
       
    </div>
  )
}

export default Detail