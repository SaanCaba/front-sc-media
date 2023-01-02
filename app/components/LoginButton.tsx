import Link from 'next/link'
import React from 'react'

function LoginButton() {
  return (
    <button>
        <Link href='/login'>
        LOGIN
        </Link>
    </button>
  )
}

export default LoginButton