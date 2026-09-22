'use client'
import { addProductToWishList } from "@/wishListAction/Addproducttowishlist.action";
import { Removeproductfromwishlist } from "@/wishListAction/Removeproductfromwishlist.types";
import { Heart } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

export default function WishListIcon({id,isWishListed}:{id:string,isWishListed:boolean}) {

    const [wishList, setwIshList] = useState(isWishListed)

    const router = useRouter()
    async function TooggleWishList(){

        if(wishList){
            try {
              setwIshList(false)
             router.refresh()
                const response = await Removeproductfromwishlist(id)
            console.log("removecart",response)
            if(response.status=="success"){
                  toast.success(response.message,{position:"bottom-left" , autoClose:2000 , closeOnClick:true})
            }
            } catch (error) {
                 toast.error("can't remove  wishList now",{position:"bottom-left" , autoClose:2000 , closeOnClick:true})
            }
        }
        else {
             try {
              setwIshList(true)
               router.refresh()
            const response = await addProductToWishList(id)
            console.log('wishlistttttttt',response)
            if(response.status=="success"){
                toast.success(response.message,{position:"bottom-left" , autoClose:2000 , closeOnClick:true})
            }
        } catch (error) {
            toast.error("can't add product to wishList now",{position:"bottom-left" , autoClose:2000 , closeOnClick:true})
        }
        }
       
    }

  return (
    <>
      <div onClick={()=>TooggleWishList()} className="bg-gray-300 p-2 rounded-full">
        <Heart className={wishList ? "text-green-600 fill-green-600" : ""} />
      </div>
    </>
  );
}
