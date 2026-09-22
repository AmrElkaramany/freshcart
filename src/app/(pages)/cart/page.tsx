import CartTable from "@/app/_components/CartTable/CartTable"
import { getLoaggedUserCart } from "@/cartAction/getLoggedUserCart.action"


export default  async function Cart() {

  const response = await getLoaggedUserCart()
  console.log("responseeeeeeeeeeeee",response)

  return (
      <CartTable cart={response}/>
  )
}
