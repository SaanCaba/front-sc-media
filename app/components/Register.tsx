'use client'
import { FormEvent, useEffect, useState } from 'react';
import axios from 'axios'
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';

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
  const data = await register(userdata)
  console.log(data)
  if(typeof data === 'string'){
    if(data.includes('ERROR')){
      return Swal.fire({
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

  return (
    <div>
        <h1>Register</h1>
        <input onChange={(e) => handleChange(e)} value={userdata.username} type='text' name='username' placeholder='Username' />
        <input onChange={(e) => handleChange(e)} value={userdata.password} type='password' name='password' placeholder='Password' />
        <button onClick={() => handleSend()}>Register!</button> 
    </div>
  );
}