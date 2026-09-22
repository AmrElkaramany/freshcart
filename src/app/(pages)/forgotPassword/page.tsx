"use client"

import { ForgotPasswording } from "@/AuthenticationAction/Authentication.action"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { toast } from "react-toastify"

export default function ForgotPassword() {
const [email, setEmail] = useState("")
const router = useRouter()

    async function handleSubmit(e:React.FormEvent<HTMLFormElement>){
        e.preventDefault()
        const response = await ForgotPasswording(email)
        console.log(response)
        if(response.statusMsg=="success"){
            toast.success(response.message)
            router.push(`/verifyResetCode`)
        }
        else {
            toast.error(response.message)
        }
    }

  return (
    <>
    <div className='w-[50%] mx-auto shadow rounded-2xl p-5'>
        <form onSubmit={handleSubmit}>
            <input onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='Enter Your Email' className='w-full focus:outline-blue-500 p-5 rounded-2xl border border-green-600' />
            <button type="submit" className='px-6 py-4 my-4 bg-green-600 rounded-2xl block text-white w-full'>Send Reset Code</button>
        </form>

    </div>
    
    </>
  )
}
