'use client'
import { FormEvent, useEffect, useState } from 'react';
import axios from 'axios'
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
import Input from './myTags/Input';
import Button from './myTags/Button';

type RegisterProps = {
    username: string,
    password: string
}

const register = async (info: RegisterProps ) => {
  const data = await axios.post('http://localhost:3001/register', info)
  .catch((err) => {
    return err.response.data.message
  })
  return data
} 

export default function Register() {
  const [userdata, setUserdata] = useState({
    email: '',
    username: '',
    password: ''
  });
  const router = useRouter()

  const handleChange = (e : FormEvent<HTMLInputElement>) => {
    setUserdata({
      ...userdata,
      [e.currentTarget.name] : e.currentTarget.value
    })
  }
  const handleSend = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const data = await register(userdata)
  console.log(data)
  if(typeof data === 'string'){
    if(data.includes('ERROR')){
      return await Swal.fire({
        text: data
      }) ;
    }
  }
  await Swal.fire({
    text:data.data.message
  })
  return router.push('/login')
  // setRoute(true)
  }

  console.log(userdata)
  return (
    <form onSubmit={(e) => handleSend(e)}>
        <h1>Register</h1>
        <div className='flex flex-col gap-3'>
        <Input styles={"border-2 border-black focus:outline-none"} method={handleChange} value={userdata.username} type={'text'} name={'username'} placeholder={'Username...'} />
        <Input styles={"border-2 border-black focus:outline-none"} method={handleChange} value={userdata.email} type={'email'} name={'email'} placeholder={'Email...'}  />
        <Input styles={"border-2 border-black focus:outline-none"} method={handleChange} value={userdata.password} type={'password'} name={'password'} placeholder={'Password...'}  />
        </div>
        <Button styles={'p-2 rounded bg-black text-white'} type={'submit'}  message={'Register!'} />
    </form>
  );
}