'use client'
import { FormEvent, useEffect, useState } from 'react';
import axios from 'axios'
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useDispatch, useSelector } from "react-redux";
import Input from './myTags/Input';
import Button from './myTags/Button';
import { setToken } from '../../redux/action';

type LoginProps = {
  name: string,
  password: string
}


const login = async (info: LoginProps ) => {
  const data = await axios.post('http://localhost:3001/login', info)
  .catch(err => {
    return err.response.data.message
  })
  return data

} 

export default function Login() {
  const [userdata, setUserdata] = useState({
    name: '',
    password: ''
  });


  const dispatch = useDispatch()
  
  const router = useRouter()
  const handleChange = (e : FormEvent<HTMLInputElement>) => {
    setUserdata({
      ...userdata,
      [e.currentTarget.name] : e.currentTarget.value
    })
  }

  const handleSend = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = await login(userdata)
    if(typeof data === 'string'){
      if(data.includes('ERROR')){
        return Swal.fire({
          text: data
        }) ;
      }
    }
    localStorage.setItem('token', data?.data.data)
    localStorage.setItem('userID', data?.data.id)
    localStorage.setItem('userName', data?.data.username)
    Swal.fire({
      text:data.data.message
    })
    dispatch(setToken())
    return router.push('/home')
  }



  return (
     <form onSubmit={(e) => handleSend(e)}>
        <h1 className='text-center p-2 font-bold'>Login</h1>
        <div className='flex flex-col gap-3'>
        <Input styles={'border-2 border-black rounded p-2'} method={handleChange} type={'text'} value={userdata.name} name={'name'} placeholder={'Name...'} />
        <Input styles={'border-2 border-black rounded p-2'} method={handleChange} type={'password'} value={userdata.password} name={'password'} placeholder={'Password...'} />
        </div>
        <Button styles={'p-2 bg-black text-white rounded'} message={'Login!'} type={'submit'} />
        <h2>No tienes cuenta?</h2>
        <Link href='/register'>
        Registrate!
        </Link>
    </form>
  );
}