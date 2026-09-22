import { getLoaggedUserCart } from "@/cartAction/getLoggedUserCart.action";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";


export default async function CartIcon() {
  const response = await getLoaggedUserCart();
  console.log("response", response);

  return (
    <>
      <Link
        className="relative flex items-center hover:text-green-600  transition-all duration-300"
        href={"/cart"}
      >
        Cart <ShoppingCart className="hover-fill-green-600" />
        <span className="bg-green-600 px-1 rounded-full absolute -top-3 -right-3 text-white">{response.numOfCartItems}</span>
      </Link>
    </>
  );
}
