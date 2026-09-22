import { Button } from '@/components/ui/button'
import { CreditCardMinus } from 'lucide-react'
import Link from 'next/link'

export default function CheckOutBtn({cartId}:{cartId:string}) {
  return (
     <>
     <Link href={`/checkOut/${cartId}`}>
     <Button  className="cursor-pointer bg-green-500 hover:bg-green-600 p-5">CheckOut <CreditCardMinus /></Button>
     </Link>
    </>
  )
}
