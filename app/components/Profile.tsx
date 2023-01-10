'use client'
import React, {useEffect, useState} from 'react'
import Swal from 'sweetalert2'
import { changePass } from '../../utils/changePass'
import {MdDarkMode, MdLightMode} from 'react-icons/md'

function Profile() {

const [active, setActive] = useState(false)
const [newPassword, setNewPassword] = useState('')
const [repeatPss, setRepeatPss] = useState('')
const [userId, setUserId] = useState<null | string>('')
const [username, setUsername] = useState<null | string>('')
const [dark, setDark] = useState<null | string>('')

    useEffect(() => {
        if(localStorage.getItem('userID') !== null || localStorage.getItem('userID') !== undefined ){
            setUserId(localStorage.getItem('userID'))
            setUsername(localStorage.getItem('userName'))
        }
        let theme = localStorage.getItem('theme')
        setDark(theme)
    }, [dark])



    const handleChangePass = async () => {
       let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/
       if(regex.test(newPassword) === false || regex.test(repeatPss) === false){
        return Swal.fire({
            icon: 'error',
            background:'#b03f37',
            html: `
            <nav class='bg-[#f05c51] text-white rounded p-2'>
            <ul class='font-semibold'>
               <li > Minimo 8 caracteres, máximo 15.</li>
                <li> Al menos una letra mayúscula.</li>
                <li>Al menos una letra minucula.</li>
                <li>Al menos un dígito.</li>
                 <li>No espacios en blanco.</li>
                 <li>Al menos 1 caracter especial.</li>
            </ul>
            </nav>
            `,
            confirmButtonText:'Continue',
            confirmButtonColor:'#97c77d'
        })
       } 
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
        setNewPassword('')
        setRepeatPss('')
      return setActive(false)
    }

    const handleTheme = () => {
        let tema = localStorage.getItem('theme')
        console.log(tema)
        setDark(tema)
        if(tema === 'dark'){
            localStorage.setItem('theme', 'light')
        }else{
            localStorage.setItem('theme', 'dark') 
        }
    }
    console.log(dark)

  return (
    <div className='relative'>
        {
            active && (
                <div className='absolute '>
                    <div className='gap-2  w-screen flex items-center justify-center h-screen bg-black bg-opacity-75'>
                        <div className='flex flex-col'>
                        <div className='mb-1'>
                            <button onClick={() => setActive(false)} className='w-full bg-[#f05c51] text-white font-semibold'>X</button>
                        </div>
                       <div className='flex'>
                        <div  className='gap-2'>
                            <input placeholder='New Password...' className='p-2 mr-2 focus:outline-none' type="password" onChange={(e) => setNewPassword(e.target.value) } />
                            <input placeholder='Repeat the new password...' className='p-2 ml-2 focus:outline-none' type="password" onChange={(e) => setRepeatPss(e.target.value)} />
                        </div>
                       
                        <div>
                            <button onClick={() => handleChangePass()} className='bg-[#789fde] p-2 rounded text-white'>Change Password!</button>
                        </div>
                        </div>
                        </div>
                        
                    </div>
                    
                </div>
            )
        }
    <div className='flex justify-center bg-[#789fde] h-screen items-center'>
        <div className='flex flex-col'>
        <div className='m-2 flex justify-center'>
            <span className='font-semibold'>{username && username.toUpperCase()}</span>
            </div>
        <div> 
            <button onClick={() => setActive(true)} className='p-2 bg-black rounded text-white m-2'>Cambiar contraseña!</button>
        </div>
        <div>
            <button className='p-2 bg-black rounded text-white m-2'>Ver Productos</button>
        </div>
        <div>
            <button onClick={()=>handleTheme()}>{dark === 'dark' ? 'claro' : 'oscuro' }</button>
        </div>
        </div>
    </div>
    </div>

  )
}

export default Profile