 import AppAreaChart from '@/components/AppAreaChart'
import AppBarChart from '@/components/AppBarChart'
 
 
import React from 'react'
 
 const page = () => {
  const one = true
   return (
     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4'>
      
      <div className='bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2'> 
        <AppBarChart/>
      </div>
      <div className='bg-primary-foreground p-4 rounded-lg '> 
    
      </div>
      <div className='bg-primary-foreground p-4 rounded-lg '> </div>
      <div className='bg-primary-foreground p-4 rounded-lg '> </div>
      <div className='bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2 '> </div>
      <AppAreaChart/>
      </div>
   )
 }
 
 export default page