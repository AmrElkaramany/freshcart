"use client"
import { Heart, LogIn, LogOut, Menu, ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,

  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { signOut, useSession } from 'next-auth/react'
import CartIcon from '../CartIcon/CartIcon'


export default function Navbar({cartIcon}:{cartIcon : React.ReactNode}) {

  const { data: session, status } = useSession()

  const logOut = ()=>{
    signOut({callbackUrl:"/login"})
  }


  return (
    <>
    <div className='bg-gray-100 p-5 fixed w-full z-10'>
        <div className='w-[90%] mx-auto flex justify-between items-center'>
                <div className="left-nav flex items-center gap-5">
                    <Link href="/" className="logo flex items-center gap-1">
                        <ShoppingCart color='green'/>
                        <h2 className='font-semibold text-2xl'>freshCart</h2>
                    </Link>

                    <ul className='hidden lg:flex items-center gap-5 '>
                        <li><Link className='hover:text-green-600 transition-all duration-300' href={'/products'}>Products</Link></li>
                        <li><Link className='hover:text-green-600 transition-all duration-300' href={'/categories'}>Categories</Link></li>
                        <li><Link className='hover:text-green-600 transition-all duration-300' href={'/brands'}>Brands</Link></li>
                    </ul>
                </div>
                <div className="right-nav">
                    <ul className='hidden lg:flex items-center gap-4'>
                      {session ? <>
                        <li><Link className='flex items-center hover:text-green-600  transition-all duration-300' href={'/wishList'}>WishList <Heart className='hover:fill-green-600' fill='black'/></Link></li>
                        <li>{cartIcon}</li>
                        <li><span onClick={()=>logOut()} className='cursor-pointer text-red-600 flex items-center gap-1 hover:text-red-500'>SignOut <LogOut /></span></li>
                      </> : <>
                      <li><Link className='flex items-center hover:text-green-600  transition-all duration-300' href={'/login'}>Login   <LogIn className='hover-fill-green-600'/></Link></li>
                        <li><Link className='flex items-center hover:text-green-600  transition-all duration-300' href={'/register'}>Register</Link></li>
                      </>}
                        
                        
                    </ul>
                </div>


              

                <DropdownMenu>
      <DropdownMenuTrigger className='cursor-pointer lg:hidden' render={<Button variant="outline">  <Menu  /></Button>} />
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuItem>  <li><Link className='hover:text-green-600 transition-all duration-300' href={'/products'}>Products</Link></li></DropdownMenuItem>
          <DropdownMenuItem>
                        <li><Link className='hover:text-green-600 transition-all duration-300' href={'/categories'}>Categories</Link></li>
          </DropdownMenuItem>
          <DropdownMenuItem>
                        <li><Link className='hover:text-green-600 transition-all duration-300' href={'/brands'}>Brands</Link></li>
          </DropdownMenuItem>
          {session ? <>
            <DropdownMenuItem>
                        <li><Link className='flex items-center hover:text-green-600  transition-all duration-300' href={'/wishList'}>WishList <Heart className='hover:fill-green-600' fill='black'/></Link></li>
          </DropdownMenuItem>
          <DropdownMenuItem>
                        <li>{cartIcon}</li>

          </DropdownMenuItem>
          <DropdownMenuItem>
            <span className='cursor-pointer text-red-600 flex items-center gap-1 hover:text-red-500'>SignOut <LogOut /></span>
          </DropdownMenuItem>
          </> : <>
           <DropdownMenuItem>
                        <li><Link className='flex items-center hover:text-green-600  transition-all duration-300' href={'/login'}>Login   <LogIn className='hover-fill-green-600'/></Link></li>

          </DropdownMenuItem>
          <DropdownMenuItem>
                        <li><Link className='flex items-center hover:text-green-600  transition-all duration-300' href={'/register'}>Register</Link></li>

          </DropdownMenuItem>
          </>}
        
         
         
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
        </div>
    </div>
    
    
    </>
  )
}
