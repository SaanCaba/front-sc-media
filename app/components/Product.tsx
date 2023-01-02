import React from 'react'
import Image from 'next/image';

type Props ={
  product:{
    name: string
    img: string
    category:string
  }  
}

function Product({product}: Props) {
  return (
            <div>
            <h1>{product.name}</h1>
            <Image style={{width:'auto', height:'auto'}} width={200} height={200} src={product.img} alt={product.name} />
            <span>{product.category}</span>
            </div>
  )
}

export default Product