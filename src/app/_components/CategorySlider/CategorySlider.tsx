import { getAllCategories } from "@/api/allCategory.api";
import Image from "next/image";
import Slidering from "../Slidering/Slidering";


export default async function CategorySlider() {

  const {data} = await getAllCategories()


  return (
 <>


<div className="w-[90%] mx-auto my-5">
<h2 className="text-xl mb-4">Shop Popular Categories</h2>


 <Slidering data={data}/>

</div>
 
 </>
  );
}
