


import React from 'react'
import {CircularProgress} from "react-loader-spinner"

export default async function loading() {



   
  return (
    <>
 
<div className="h-screen flex justify-center items-center">
  <div className="animate-spin">
<CircularProgress
height="100"
width="100"
color="#4fa94d"
ariaLabel="circular-progress-loading"
wrapperStyle={{}}
wrapperClass="wrapper-class"
visible={true}
strokeWidth={2}
animationDuration={1}
/>
  </div>
</div>

    
    
    </>
  )
}
