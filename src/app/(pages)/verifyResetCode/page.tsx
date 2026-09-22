"use client"

import { ForgotPasswording, verifyResetCoding } from "@/AuthenticationAction/Authentication.action"
import { useRouter, useSearchParams } from "next/navigation"
import { useState } from "react"
import { toast } from "react-toastify"

export default function VerifyResetCode() {
const [resetCode, setResetCode] = useState("")
const router = useRouter()
const email = useSearchParams()
console.log(email)

    async function handleSubmit(e:React.FormEvent<HTMLFormElement>){
        e.preventDefault()
        const response = await verifyResetCoding(resetCode)
        console.log(response)
        if(response.status=="Success"){
            toast.success("Verify Code Successfully")
            router.push(`/resetPassword`)
        }
        else {
            toast.error(response.message)
        }
    }

  return (
    <>
    <div className='w-[50%] mx-auto shadow rounded-2xl p-5'>
        <form onSubmit={handleSubmit}>
            <input onChange={(e)=>setResetCode(e.target.value)} type="text" placeholder='Enter Your Code' className='w-full focus:outline-blue-500 p-5 rounded-2xl border border-green-600' />
            <button type="submit" className='px-6 py-4 my-4 bg-green-600 rounded-2xl block text-white w-full'>Confirm Reset Code</button>
        </form>

    </div>
    
    </>
  )
}
