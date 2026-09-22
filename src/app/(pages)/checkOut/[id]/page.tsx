'use client'
import { Button } from '@/components/ui/button'
import { Field, FieldError } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { DollarSign, Loader } from 'lucide-react'
import { useParams, useRouter } from 'next/navigation'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { chekOutSchema, ChekOutSchemaType } from '@/app/schema/chekOut.schema'
import { onlinePayment } from '@/CheckoutAction/Checkoutsession.action'

export default function CheckOut() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const {id}:{id:string} = useParams()
  console.log(id)


  const form =  useForm<ChekOutSchemaType>({
          defaultValues:{
              details:"",
              phone:"",
              city : "",
          },
          resolver:zodResolver(chekOutSchema),
          mode:"all"
  })


  const handleCheckOut = async(values:ChekOutSchemaType)=>{
    console.log(values)
    setIsLoading(true)

   // call api 

   try {
        setIsLoading(true)
        const response = await onlinePayment( id ,  "http://localhost:3000/" , values  )
        console.log("paymentttttt",response)
        if(response.status=="success"){
          window.location.href = response.session.url
        }
   } catch (error) {
    
   }finally{
    setIsLoading(false)
   }

   
  }


  interface FormField {
    name: "details" | "phone" | "city" 
    type:string,
    placeholder:string,
    autoComplete:string,

  }

  const FormFields : FormField[] = [
    {name:"details" , type:"text" , placeholder:"Enter Your Details",autoComplete:"details" },
    {name:"phone" , type:"tel" , placeholder:"Enter Your Phone",autoComplete:"phone" },
    {name:"city" , type:"text" , placeholder:"Enter Your City",autoComplete:"city" },
  ]


  return (
    <>
    


    <div className='w-[90%] lg:w-[60%] mx-auto my-5 rounded-2xl shadow-2xl p-5'>
        <h2 className='text-xl text-center text-green-600'>Checkout</h2>

        <form onSubmit={form.handleSubmit(handleCheckOut)}>
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
          <Button disabled={isLoading} type='submit' className="w-full bg-green-600 hover:bg-green-500 transition-all duration-300 cursor-pointer p-5">{isLoading ? <Loader className='animate-spin'/> : <>pay now <DollarSign /></>}</Button>
        </form>
    </div>
    
    
    
    </>
  )
}
