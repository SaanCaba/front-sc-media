import Link from 'next/link'
import React from 'react'

function LoginButton() {
  return (
    <button className='p-2 bg-black text-white'>
        <Link href='/login'>
        LOGIN
        </Link>
    </button>
  )
}

export default LoginButton