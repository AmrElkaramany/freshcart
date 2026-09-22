'use client'
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import img1 from "../../../../public/finalProject assets/images/one.jpeg"
import img2 from "../../../../public/finalProject assets/images/two.jpeg"
import img3 from "../../../../public/finalProject assets/images/three.jpeg"
import img5 from "../../../../public/finalProject assets/images/banner-4.jpeg"
import img6 from "../../../../public/finalProject assets/images/slider-2.jpeg"
import { Autoplay } from 'swiper/modules';

export default function MainSlider() {
  return (
 <>
  <div className="w-[90%] mx-auto flex items-center my-5 ">
    <div className="w-3/4">

          <Swiper
      spaceBetween={50}
      slidesPerView={1}
      modules={[Autoplay]}
      autoplay={{delay:3000}}
    >
      <SwiperSlide>
        <Image src={img1} alt="" className="w-full h-100 object-cover" />
      </SwiperSlide>
        <SwiperSlide>
        <Image src={img2} alt="" className="w-full h-100 object-cover" />
      </SwiperSlide>
        <SwiperSlide>
        <Image src={img3} alt="" className="w-full h-100 object-cover" />
      </SwiperSlide>


    </Swiper>
    </div>
    <div className="w-1/4">
        <Image src={img5} alt="" className="w-full h-50 object-cover"/>
        <Image src={img6} alt="" className="w-full h-50 object-cover"/>
    </div>
  </div>
 
 
 </>
  );
}
