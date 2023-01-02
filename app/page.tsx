import Link from 'next/link'
import styles from './page.module.css'

export default async function HomePage() {
  //landing
  return (
    <div className='flex justify-center items-center h-screen w-full bg-[#789fde]'>
      <div className='flex flex-col'>
      <div className='flex justify-center'>
      <span className='text-2xl font-semibold'>¡Bienvenido/as!</span>
      </div>
      <div>
      <Link href='/home'>
      <button className='p-2 font-semibold'>Home</button>
      </Link>
      <Link href='/login'>
      <button className='p-2 font-semibold'>Login</button>
      </Link>
      <Link href='/register'>
      <button className='p-2 font-semibold'>Register</button>
      </Link>
      </div>
      </div>
    </div>
  )
}