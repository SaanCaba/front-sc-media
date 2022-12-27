import React from 'react'
import Logout from './Logout'

function NavBar() {
  return (
    //ocultar boton logout si hay token!
    <div>
       <Logout /> 
    </div>
  )
}

export default NavBar