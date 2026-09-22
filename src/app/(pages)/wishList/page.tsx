import { GetLoggeduserwishlist } from '@/wishListAction/Getloggeduserwishlist.action'
import { WishListinggg } from '@/types/wishList.types';

import WishListReview from './../../_components/wishListReview/wishListReview';

export default async function WishList() {



    const response = await GetLoggeduserwishlist()
  console.log("ffffffffffff",response)

  if(response.data.length ===0){
    return <div className="flex justify-center rounded-2xl p-5 bg-red-300 w-[50%] mx-auto text-4xl"><h1>your wishList is Empty</h1></div>
  }

  return (
    <>
    <div className="w-[80%] mx-auto">
       <h2 className='border-b-2 text-2xl pb-3'>My wishList</h2>
    {response.data.map((product:WishListinggg)=><WishListReview product={product}/>)}
    
    </div>
    </>
  )
}
