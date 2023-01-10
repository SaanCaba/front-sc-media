import Link from 'next/link'
import Button from './components/myTags/Button'
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
        <Button styles={'p-2 font-semibold'} message={'Home'} type={'button'}  />
     
      </Link>
      <Link href='/login'>
        <Button styles={'p-2 font-semibold'} message={'Login'} type={'button'} />
      </Link>
      <Link href='/register'>
        <Button styles={'p-2 font-semibold'} message={'Register'} type={'button'} />
      </Link>
      </div>
      </div>
    </div>
  )
}