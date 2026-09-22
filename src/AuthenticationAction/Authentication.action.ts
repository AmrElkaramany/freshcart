
"use server"

import getMyToken from "@/utilities/GetMyToken.utilities"

export async function ForgotPasswording(email:string){
     
    
    const response = await fetch(`https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords`,{
        method:"POST",
        headers:{
            
            "Content-type":"application/json"
        },
        body:JSON.stringify({email})
    })
    const payLoad = await response.json()
    return payLoad
}




export async function verifyResetCoding(resetCode:string){
    const response = await fetch(`${process.env.API}/auth/verifyResetCode`,{
         method:"POST",
        headers:{
            
            "Content-type":"application/json"
        },
        body:JSON.stringify({resetCode})
    })
     const payLoad = await response.json()
    return payLoad
}

export async function resetPasswording(email:string , newPassword:string){
    const response = await fetch(`https://ecommerce.routemisr.com/api/v1/auth/resetPassword`,{
        method:"PUT",
        headers:{
            
            "Content-type":"application/json"
        },
        body:JSON.stringify({email,newPassword})
    })
     const payLoad = await response.json()
    return payLoad
}