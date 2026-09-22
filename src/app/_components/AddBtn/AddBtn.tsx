'use client'
import { AddProductToCart } from '@/cartAction/AddToCart.Action'
import { Button } from '@/components/ui/button'
import { Loader } from 'lucide-react'
import { getSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { toast } from 'react-toastify'

export default function AddBtn( {id ,showAlways=false} : {id:string,showAlways?:boolean} ) {


    const router = useRouter()

    const [isLoading, setIsLoading] = useState(false)

  
    async function AddToCart(id : string){
    
             const session = await getSession()
             if(!session){
              router.push('/login')
              return
             }
      
      try {
       
        setIsLoading(true)
            const response = await AddProductToCart(id)
            console.log(response)
             if(!session){
        router.push("/login")
        return
      }
            if(response.status=="success"){
                router.refresh()
                toast.success(response.message,{position:"top-right" , autoClose:2000, closeOnClick:true})
            }else {
                toast.error("somthing went wrong",{position:"top-right" , autoClose:2000, closeOnClick:true})

            }
      } catch (error) {
         toast.error("somthing went wrong",{position:"top-right" , autoClose:2000, closeOnClick:true})
      }finally{
        setIsLoading(false)
      }
    }

  return (
    <>
     <Button onClick={()=>AddToCart(id)}  className={`w-full my-3 bg-green-500 hover:bg-green-600 transition-all duration-300 cursor-pointer ${!showAlways ? "opacity-0 group-hover:opacity-100" : ""}`}>{isLoading ? <Loader className='animate-spin'/> : "Add To Cart"}</Button>
    
    </>
  )
}
