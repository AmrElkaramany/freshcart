'use client'


import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { CategoryType } from '@/types/allCategory.types';
import { ProductType } from '@/types/allProduct.types';
import Image from 'next/image';
import AddBtn from '../AddBtn/AddBtn';

export default function SwiperSlider ({data} :{data:ProductType}) {


  // console.log('catttt' , data)

    const [selectedImage, setselectedImage] = useState(data.imageCover)
      //  console.log('productDetail',data);
  return (
   <>
   




      
       <div className='w-[90%] mx-auto'>
          <div className='flex  items-center'>
            <div className='w-full md:w-1/4'>
               <Image width={500} height={500} src={selectedImage} alt="" />
   
   
          
             <Swiper
      spaceBetween={0}
      slidesPerView={4}
      modules={[Autoplay]}
        autoplay={{delay:3000}}
    >

        {data.images.map((image)=>   <SwiperSlide onClick={()=>setselectedImage(image)}><img src={image} alt="" /></SwiperSlide>)}
   
      
    </Swiper>
           
   
           </div>
           <div className='w-full md:w-3/4'>
               <h2 className='text-green-600 text-xl font-semibold'>{data.title}</h2>
               <p className='my-3'>{data.description}</p>
               
             <div className='flex justify-between items-center'>
               <div className='star-left'>
                 <span >{data.price} EGP</span>
               </div>
               <div className='star-right'>
                 <span className='flex items-center'>{data.ratingsAverage} <Star size={16} className='text-[#FFC908]' fill='#FFC908'/></span>
               </div>
             </div>
   
         <AddBtn showAlways id={data.id}/>
   
           </div>
          </div>
       </div>
       
   
   
   
   
   </>
  )
}
