"use client"

import { ForgotPasswording, resetPasswording, verifyResetCoding } from "@/AuthenticationAction/Authentication.action"
import { useRouter,useSearchParams } from "next/navigation"
import { useState } from "react"
import { toast } from "react-toastify"

export default function ResetPassword() {
const [newPassword, setNewPassword] = useState("")
const [email, setEmail] = useState("")

const router = useRouter()
// const email = useSearchParams()
console.log(email)

    async function handleSubmit(e:React.FormEvent<HTMLFormElement>){
        e.preventDefault()
        const response = await resetPasswording(  email ,  newPassword  )
        console.log(response)
        if(response.token){
            toast.success("password changed Successfully")
            router.push(`/login`)
        }
        else {
            toast.error(response.message)
        }
    }

  return (
    <>
    <div className='w-[50%] mx-auto shadow rounded-2xl p-5'>
        <form onSubmit={handleSubmit}>
            <input onChange={(e)=>setEmail(e.target.value)}  type="text" placeholder='Enter Your Email' className='w-full my-3 focus:outline-blue-500 p-5 rounded-2xl border border-green-600' />
            <input onChange={(e)=>setNewPassword(e.target.value)} type="text" placeholder='Enter New Password' className='w-full focus:outline-blue-500 p-5 rounded-2xl border border-green-600' />
            <button type="submit" className='px-6 py-4 my-4 bg-green-600 rounded-2xl block text-white w-full'>Confirm Reset Code</button>
        </form>

    </div>
    
    </>
  )
}
