import React from 'react'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Heart, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ProductType } from '../../../types/allProduct.types';
import Image from 'next/image';
import AddBtn from '../AddBtn/AddBtn';
import WishListIcon from '../WishListIcon/WishListIcon';
export default function SingleProduct({currentProduct , isWishListed}:{currentProduct:ProductType , isWishListed:boolean}) {

  // console.log('currentttttt',currentProduct)



  
  return (
    <>
    
    
    <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5'>
        
        <div className="inner p-5">
           
             <Card className="w-full max-w-sm inner p-5 ring-0 hover:ring-1 hover:ring-green-600 cursor-pointer group">
            <div className='flex justify-end '>
            <WishListIcon id={currentProduct.id} isWishListed={isWishListed}/>
            </div>
           <Link href={`/products/${currentProduct.id}`}>
      <CardHeader>
        <CardTitle>
          <Image width={5000} height={5000} src={currentProduct.imageCover} alt={currentProduct.title} />
        </CardTitle>
        <CardDescription>
          <h2 className='text-green-600 text-xl'>{currentProduct.category.name}</h2>
          <p className='text-black  font-semibold my-3'>{currentProduct.title}</p>

          <div className='flex justify-between items-center'>
            <div className='star-left'>
              <span >{currentProduct.price} EGP</span>
            </div>
            <div className='star-right'>
              <span className='flex items-center'>{currentProduct.ratingsAverage} <Star size={16} className='text-[#FFC908]' fill='#FFC908'/></span>
            </div>
          </div>


          </CardDescription>
       
      </CardHeader> 
           </Link>
     
     
         <AddBtn id={currentProduct.id}/>
    </Card>
           
        </div>
        </div>
    
    
    </>
  )
}
