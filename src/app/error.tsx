
'use client'

import React from 'react'

export default  function eror({error}:{error:Error}) {



   
  return (
    <>
 
 <div className=" h-screen flex items-center justify-center rounded-2xl w-[90%] mx-auto ">

<h1 className="text-xl p-5  bg-red-300">{error.message}</h1>
 </div>

    
    
    </>
  )
}
