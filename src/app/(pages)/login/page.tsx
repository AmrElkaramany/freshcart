'use client'
import { loginSchema, loginSchemaType } from '@/app/schema/login.scheam'
import { registerSchema, registerSchemaType } from '@/app/schema/register.schema'
import { Button } from '@/components/ui/button'
import { Field, FieldError } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader, LogIn, MailBadge } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import {signIn} from "next-auth/react"

export default function Login() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()


  const form =  useForm<loginSchemaType>({
          defaultValues:{
              email:"",
              password:"",
          },
          resolver:zodResolver(loginSchema),
          mode:"all"
  })


  const handleLogin = async(values:loginSchemaType)=>{
    console.log(values)
    setIsLoading(true)

    try {
        const response = await signIn("credentials",{
          email :values.email,
          password:values.password,
          redirect:false,
          callbackUrl:"/"
        })
        console.log("loginnnnnnnn",response)
        if(response?.ok){
          toast.success("Login Successfully",{position:"top-right",delay:2000,autoClose:1500})
          setTimeout(() => {
          router.push("/") 
          }, 2000);
        }
        else {
          toast.error(response?.error || "something went wrong",{position:"top-right",delay:2000,autoClose:1500})
        }


    } catch (error) {
      toast.error( "something went wrong",{position:"top-right",delay:2000,autoClose:1500})
    }finally{
      setIsLoading(false)
    }

  
  }


  interface FormField {
    name: "email" | "password" 
    type:string,
    placeholder:string,
    autoComplete:string,

  }

  const FormFields : FormField[] = [
    {name:"email" , type:"email" , placeholder:"Enter Your Email",autoComplete:"email" },
    {name:"password" , type:"password" , placeholder:"Enter Your Password",autoComplete:"new-password" },
  ]


  return (
    <>
    


    <div className='w-[90%] lg:w-[60%] mx-auto my-5 rounded-2xl shadow-2xl p-5'>
        <h2 className='text-xl text-center'>Welcome to FreshCart 😊, Signup here:</h2>

        <form onSubmit={form.handleSubmit(handleLogin)}>
          {FormFields.map((myInput)=><Controller
              key={myInput.name}
              name={myInput.name}
              control={form.control}
              render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
                  <Input
                  className='my-4 p-5'
                    {...field}
                    id={field.name}
                    aria-invalid={fieldState.invalid}
                    placeholder={myInput.placeholder}
                    autoComplete={myInput.autoComplete}
                    type={myInput.type}
                  />
              
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
  )}
/>)}
          <p className='mb-3'>New to FreshCart? <Link href={'/register'} className='text-green-600 hover:underline'>Signup now!!</Link></p>
          <Link href={'/forgotPassword'}>
            <p className="text-green-600 hover:underline cursor-pointer text-md mb-2">Forgot Password ?</p>
          </Link>
          
          <Button disabled={isLoading} type='submit' className="w-full bg-green-600 hover:bg-green-500 transition-all duration-300 cursor-pointer p-5">{isLoading ? <Loader className='animate-spin'/> : <>Login <LogIn /></>}</Button>
        </form>
    </div>
    
    
    
    </>
  )
}
