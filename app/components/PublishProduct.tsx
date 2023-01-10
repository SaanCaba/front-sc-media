import Link from 'next/dist/client/link'
import React from 'react'
interface Props{
  theme : string | null
}
function PublishProduct({theme}:Props) {


  return (
    <>
        <Link href='/newproduct'>
        <button className={ theme === 'dark' ? 'p-2 bg-white text-black' : 'p-2 bg-black text-white'}>Publish Product!</button>
        </Link>
    </>
  )
}

export default PublishProduct