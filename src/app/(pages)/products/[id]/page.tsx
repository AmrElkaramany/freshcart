
import { getProductsDetails } from '@/api/productDetail.api'


import SwiperSlider from '@/app/_components/swiperslider/swiperslider';

export default async function ProductDetail({params} : {params:Promise<{id:string}>}) {

   let {id} = await params

   
   let {data} = await getProductsDetails(id)

   
  return (
    <>
 

 <SwiperSlider data={data}/>
    
    
    </>
  )
}
