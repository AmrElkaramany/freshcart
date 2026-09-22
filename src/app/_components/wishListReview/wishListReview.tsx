'use client'
import { Button } from '@/components/ui/button'
import { WishListinggg } from '@/types/wishList.types'
import { Removeproductfromwishlist } from '@/wishListAction/Removeproductfromwishlist.types'
import { Loader } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { toast } from 'react-toastify'
import AddBtn from '../AddBtn/AddBtn'

export default function WishListReview({product}:{product:WishListinggg}) {

    console.log('aaaaaaaaaaaa',product)
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)
   async function RemoveWishList(){
       try {
        setIsLoading(true)
         const response = await Removeproductfromwishlist(product.id)
        console.log('delete',response)
        if(response.status=="success"){
            toast.success(response.message,{position:"bottom-left",autoClose:2000 , closeOnClick:true})
            router.refresh()
        }
       } catch (error) {
            toast.error("can't remove from wishList",{position:"bottom-left",autoClose:2000 , closeOnClick:true})
        
       }finally{
        setIsLoading(false)
       }
    }
  return (
    <>
   
   <div className='flex justify-between items-center'>
    <div className='flex items-center gap-4'>
        <div>
            <Image src={product.imageCover} alt={product.title} width={200} height={200}/>
        </div>

         <div>
        <h2 className='text-xl'>{product.title}</h2>
        <p className='text-green-500 text-xl'>{product.price} EGP</p>
    </div>
    </div>
    
    <div>
        <Button disabled={isLoading} onClick={()=>RemoveWishList()} className="bg-green-600 hover:bg-red-500 px-16 text-xl cursor-pointer py-6">{isLoading ? <Loader className='animate-spin'/> : "Remove"}</Button>
        <AddBtn showAlways id={product.id}/>
    </div>
   </div>
    
    </>
  )
}
