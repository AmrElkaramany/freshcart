
// cashing in next 


export const getAllProducts = async()=>{
    
  let response = await fetch(`https://ecommerce.routemisr.com/api/v1/products`,{
    // cache:"no-cache"  ssr    
    // cache:"force-cache"  //ssg 
    next:{revalidate:60}  // isr
  })
  let data = await response.json()
  return data
  
}



/* 

ssr 
csr 
ssg 
isr


*/