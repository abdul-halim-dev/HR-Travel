 import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import React from 'react'
 
 const page = () => {
  const one = true
   return (
     <div className=''>
      
      <Button  className={'bg-custom-color'} size={'xl'} > click here</Button>
      

      <button className={cn(one ? "text-red-600": "text-green-600")}> hello </button>
      
      
      page</div>
   )
 }
 
 export default page