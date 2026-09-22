"use client"
import { RemoverFromCart } from '@/cartAction/RemoveProductFromCart.action'
import { useRouter } from 'next/navigation';
import React from 'react'
import { toast } from 'react-toastify';

export default function RemoveBtns({id} : {id:string}) {
    const router = useRouter()


    async function deletefromCart(id:string){
        try {
            const response = await RemoverFromCart(id)
            console.log(response)
            if(response.status=="success"){
                toast.success(response.message,{position:"top-right",autoClose:2000 , closeOnClick:true})
                router.refresh()
            }else {
                 toast.success("can't remove now",{position:"top-right",autoClose:2000 , closeOnClick:true})
            }
        } catch (error) {
              toast.success("can't remove now",{position:"top-right",autoClose:2000 , closeOnClick:true})
        }
    }

  return (
       <button onClick={()=>deletefromCart(id)}  className="font-medium text-fg-danger hover:underline cursor-pointer">Remove</button>
  )
}
