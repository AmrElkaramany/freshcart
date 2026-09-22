import React from 'react'
import Navbar from '../navbar/Navbar'
import CartIcon from '../CartIcon/CartIcon'

export default function NavbarWrapper() {
  return (
    <>
    
    <Navbar cartIcon={<CartIcon/>}/>
    
    </>
  )
}
