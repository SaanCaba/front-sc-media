import React from 'react'

interface Props{
    method?: () => any 
    type: 'submit' | 'reset' | 'button' | undefined;
    styles:string
    message: string
}

function Button({method, type, styles, message}:Props) {
  return (
    <button onClick={method !== undefined ? () => method() : undefined } className={styles} type={type}>{message}</button>
  )
}

export default Button