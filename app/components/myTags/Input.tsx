import React from 'react'

interface Props{
    method: (e : any) => any
    type: string
    value?: string | number
    placeholder?:string
    name:string
    styles: string
}

function Input({method, type, value, placeholder,name, styles} : Props) {
 console.log(styles)
    return (
    <input className={styles} placeholder={placeholder} name={name} onChange={(e) => method(e)} type={type} value={value} />
  )
}

export default Input