"use server"

import getMyToken from "@/utilities/GetMyToken.utilities"



export async function addProductToWishList(id:string){
    const token = await getMyToken()
    if(!token){
        throw new Error('login again!!!')
    }
    const response = await fetch(`https://ecommerce.routemisr.com/api/v1/wishlist`,{
        method:"POST",
        headers:{
            token,
            "Content-type":"application/json"
        },
        body : JSON.stringify({productId : id})
    })
    const payLoad = await response.json()
    return payLoad
}