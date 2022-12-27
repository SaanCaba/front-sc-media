'use client'
import { FormEvent, useState } from 'react';
import axios from 'axios'
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

type LoginProps = {
  username: string,
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

  const handleSend = async () => {
    const data = await login(userdata)
    if(typeof data === 'string'){
      if(data.includes('ERROR')){
        return Swal.fire({
          text: data
        }) ;
      }
    }
    localStorage.setItem('token', JSON.stringify(data?.data))
    console.log(data)
     Swal.fire({
      text:data.data.message
    })
    return router.push('/')
  }

  return (
     <div>
        <h1>Login</h1>
        <input onChange={(e) => handleChange(e)} value={userdata.username} type='text' name='username' placeholder='Username' />
        <input onChange={(e) => handleChange(e)} value={userdata.password} type='password' name='password' placeholder='Password' />
        <button onClick={() => handleSend()}>Login!</button> 
        <h2>No tienes cuenta?</h2>
        <Link href='/register'>
        Registrate!
        </Link>
    </div>
  );
}