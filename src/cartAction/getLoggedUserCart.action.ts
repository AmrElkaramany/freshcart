'use server'
import getMyToken from "@/utilities/GetMyToken.utilities"




export async function getLoaggedUserCart(){

    const token = await getMyToken()
    if(!token){
        throw new Error('login first,please!')
    }
    const response = await fetch(`https://ecommerce.routemisr.com/api/v2/cart`,{
        method:"GET",
        headers:{
            token,
            "Content-type":"application/json"
        }
    })
    const payLoad = await response.json()
    return payLoad
}