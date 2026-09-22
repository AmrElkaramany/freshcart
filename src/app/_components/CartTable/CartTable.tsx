
import { CartType, cartTyping } from '@/types/cart.types'
import Image from 'next/image'
import RemoveBtns from '../RemoveBtns/RemoveBtns'
import { Button } from '@/components/ui/button'
import ClearCartBtn from '../ClearCartBtn/ClearCartBtn'
import UpdateQuantity from '../UpdateQuantity/UpdateQuantity'
import CheckOutBtn from '../CheckOutBtn/CheckOutBtn'

export default function CartTable({cart} : {cart:CartType}) {


console.log("cartttttttttttttttttttttttttt",cart)


  return (
    <>

    {cart.data.products.length==0 ? <div><h1 className='text-slate-400 text-4xl text-center'>your cart is Empty</h1></div> : <>
    
     <div className='flex justify-between w-[80%] mx-auto items-center'>
        <div className=' my-3 '>
            <h2 className='text-4xl my-2'>my Cart</h2>
            <h1 className='text-4xl '>total Cart Price : <span className='text-green-500'>{cart.data.totalCartPrice} EGP</span></h1>
        </div>
    <div>
      <div className=''>
       <ClearCartBtn/>
    </div>
    <div className=''>
       <CheckOutBtn cartId={cart.cartId}/>
    </div>
    </div>
     </div>
    <div className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default w-[80%] mx-auto">

  <table className="w-full text-sm text-left rtl:text-right text-body">
    <thead className="text-sm text-body bg-neutral-secondary-medium border-b border-default-medium">
      <tr>
        <th scope="col" className="px-16 py-3">
          <span >Image</span>
        </th>
        <th scope="col" className="px-6 py-3 font-medium">
          Product
        </th>
        <th scope="col" className="px-6 py-3 font-medium">
          Qty
        </th>
        <th scope="col" className="px-6 py-3 font-medium">
          Price
        </th>
        <th scope="col" className="px-6 py-3 font-medium">
          Action
        </th>
      </tr>
    </thead>
    <tbody>
        {cart.data.products.map((product)=> <tr key={product.product.id} className="bg-neutral-primary-soft border-b border-default hover:bg-neutral-secondary-medium">
        <td className="p-4">
          <Image src={product.product.imageCover} width={100} height={100} className="w-16 md:w-24 max-w-full max-h-full" alt="Apple Watch" />
       
        </td>
        <td className="px-6 py-4 font-semibold text-heading">
         {product.product.title}
        </td>
        <td className="px-6 py-4">
        <UpdateQuantity count={product.count} id={product.product._id}/>
        </td>
        <td className="px-6 py-4 font-semibold text-heading">
         {product.price * product.count} EGP
        </td>
        <td className="px-6 py-4">
        <RemoveBtns id={product.product._id}/>
        </td>
      </tr>)}
     
      
    </tbody>
  </table>
    </div>
    
    </>}
    
   

    
    
    
    </>
  )
}
