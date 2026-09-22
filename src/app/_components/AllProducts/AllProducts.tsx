import { getAllProducts } from '@/api/allProducts.api'
import React from 'react'
import SingleProduct from '../singleProduct/singleProduct';
import { ProductType } from '@/types/allProduct.types';
import { GetLoggeduserwishlist } from '@/wishListAction/Getloggeduserwishlist.action';
import { WishListinggg } from '@/types/wishList.types';


export default async function AllProducts() {

let {data} = await getAllProducts()
console.log('currentProduct',data);



    const wishList = await GetLoggeduserwishlist()
  console.log("ffffffffffff",wishList)

  const WishListIds = wishList.data.map((wishList:WishListinggg)=>wishList.id) // [id1,id2,id3]

  return (
    <>
    <title>Product</title>
    <div className='w-[90%] mx-auto my-5'>
      <div className='flex flex-wrap'>
        {data.map((currentProduct:ProductType )=>
          <SingleProduct key={currentProduct.id} currentProduct={currentProduct} isWishListed={WishListIds.includes(currentProduct.id)}/>
        )}
      </div>
    </div>
    </>
  )
}
