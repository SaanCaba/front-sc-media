import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

type Props ={
  product:{
    name: string
    img: string
    category:string
    _id: string
  }  
}

function Product({product}: Props) {
  return (
            <div>
              <Link href={`home/${product._id}`}>
            <h1>{product.name}</h1>
              </Link>
            <Image style={{width:'auto', height:'auto'}} width={200} height={200} src={product.img} alt={product.name} />
            <span>{product.category}</span>
            </div>
  )
}

export default Product