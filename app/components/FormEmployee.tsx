'use client'
import React, {FormEvent, useState} from 'react'
import Button from './myTags/Button'
import Input from './myTags/Input'

function FormEmployee() {
    const[data, setData] = useState({
        firstName: '',
        lastName : '',
        salary: 0,
        photo : ''
    })

    const handleChange = (e : FormEvent<HTMLInputElement>) => {
        setData({
            ...data,
            [e.currentTarget.name] : e.currentTarget.value
        })
    }
  return (
    <form  className='flex justify-center h-screen items-center'>
        <div className='gap-3 flex flex-col' style={{width:'400px'}}>
    <Input styles={'border-2 border-black rounded p-2'} name={'firstName'} type={'text'} value={data.firstName} placeholder={'FirstName...'} method={handleChange} />
    <Input styles={'border-2 border-black rounded p-2'} name={'lastName'} type={'text'} value={data.lastName} placeholder={'LastName...'} method={handleChange} />
    <Input styles={'border-2 border-black rounded p-2'} name={'salary'} type={'number'} value={data.salary} placeholder={'Salary...'} method={handleChange} />
    <Input styles={'border-2 border-black rounded p-2'} name={'photo'} type={'file'} value={data.photo} placeholder={'Photo...'} method={handleChange} />
        <Button styles={'p-2 bg-black text-white'} message={'Create!'} type={'submit'} />
        </div>
   </form>
  )
}

export default FormEmployee