'use client'
import React, {useEffect, useState} from 'react'
import Swal from 'sweetalert2'
import { changePass } from '../../utils/changePass'


function Profile() {

const [active, setActive] = useState(false)
const [newPassword, setNewPassword] = useState('')
const [repeatPss, setRepeatPss] = useState('')
const [userId, setUserId] = useState<null | string>('')

    useEffect(() => {
        if(localStorage.getItem('userID') !== null || localStorage.getItem('userID') !== undefined ){
            setUserId(localStorage.getItem('userID'))
        }
    }, [])


    const handleChangePass = async () => {
        if(newPassword.length === 0 || repeatPss.length === 0) return  Swal.fire({
            icon:'error',
            text:'Por favor coloque una contraseña!'
        })
        if(newPassword !== repeatPss){
            return Swal.fire({
                icon:'error',
                text:'Las contraseñas no son iguales!'
            })
        }
    let msg =  await changePass(userId, newPassword)
    Swal.fire({
        icon:'success',
        text:msg
    })
      return setActive(false)
    }

  return (
    <div className='relative'>
        {
            active && (
                <div className='absolute '>
                    <div  className='gap-2 w-screen flex items-center justify-center h-screen bg-black bg-opacity-75'>
                        <div className='gap-2'>
                            <input placeholder='New Password...' className='p-2 mr-2 focus:outline-none' type="password" onChange={(e) => setNewPassword(e.target.value) } />
                            <input placeholder='Repeat the new password...' className='p-2 ml-2 focus:outline-none' type="password" onChange={(e) => setRepeatPss(e.target.value)} />
                        </div>
                        <div>
                            <button onClick={() => handleChangePass()} className='bg-[#789fde] p-2 rounded text-white'>Change Password!</button>
                        </div>
                    </div>
                </div>
            )
        }
    <div className='flex justify-center bg-[#789fde] h-screen items-center'>
        <div className='flex flex-col'>
        <div className='m-2'>Username:</div>
        <div> 
            <button onClick={() => setActive(true)} className='p-2 bg-black rounded text-white m-2'>Cambiar contraseña!</button>
        </div>
        <div>
            <button className='p-2 bg-black rounded text-white m-2'>Ver Productos</button>
        </div>
        </div>
    </div>
    </div>

  )
}

export default Profile