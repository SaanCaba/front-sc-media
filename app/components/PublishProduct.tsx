import Link from 'next/dist/client/link'
import React from 'react'

function PublishProduct() {


  return (
    <>
        <Link href='/newproduct'>
        <button className='p-2 bg-black text-white'>Publish Product!</button>
        </Link>
    </>
  )
}

export default PublishProduct