'use client'

import React, { useState } from 'react'
import { ScrollArea } from './ui/scroll-area'
import { Card } from './ui/card'
import { Checkbox } from './ui/checkbox'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { Calendar } from "@/components/ui/calendar"
import { Button } from './ui/button'

import { format } from 'date-fns'
import { Calendar1 } from 'lucide-react'



const TodoList = () => {

  const [date, setDate] = useState(new Date());
  const [open , setopen] = useState(false)

  return (
    <div className=' '>
<h1 className='text-lg font-semibold mb-6'> Todo List </h1>
<Popover open={open} onOpenChange={setopen} className="w-full">
  <PopoverTrigger asChild  className="w-full">
    <Button  className="w-full"> 
      <Calendar1/> 
      {date ? date.toDateString() : <span> pick a date</span>}

    </Button>
  </PopoverTrigger>
  <PopoverContent className={'w-full p-0'}>
  <Calendar 
    mode="single"
    selected={date}
    onSelect={(date)=>{setDate(date)
      setopen(false)
    }}
    className="rounded-md  h-[330px] "
  />
  </PopoverContent>
</Popover>


        <ScrollArea className='max-h-[300px] mt-4 overflow-y-auto '> 
            <div className=' flex flex-col gap-2'>
            <Card className={'px-2'}>
                <div className='flex items-center gap-4'>
                  <Checkbox id={'item1'} />
                  <label htmlFor="item1" className='text-sm text-muted-foreground'> You can subscribe the box as your wish</label>
                </div>
             </Card>
            <Card className={'px-2'}>
                <div className='flex items-center gap-4'>
                  <Checkbox id={'item1'} checked  />
                  <label htmlFor="item1" className='text-sm text-muted-foreground'> You can subscribe the box as your wish</label>
                </div>
             </Card>
            <Card className={'px-2'}>
                <div className='flex items-center gap-4'>
                  <Checkbox id={'item1'} checked  />
                  <label htmlFor="item1" className='text-sm text-muted-foreground'> You can subscribe the box as your wish</label>
                </div>
             </Card>
            <Card className={'px-2'}>
                <div className='flex items-center gap-4'>
                  <Checkbox id={'item1'}  />
                  <label htmlFor="item1" className='text-sm text-muted-foreground'> You can subscribe the box as your wish</label>
                </div>
             </Card>
            <Card className={'px-2'}>
                <div className='flex items-center gap-4'>
                  <Checkbox id={'item1'} checked  />
                  <label htmlFor="item1" className='text-sm text-muted-foreground'> You can subscribe the box as your wish</label>
                </div>
             </Card>
            <Card className={'px-2'}>
                <div className='flex items-center gap-4'>
                  <Checkbox id={'item1'} checked  />
                  <label htmlFor="item1" className='text-sm text-muted-foreground'> You can subscribe the box as your wish</label>
                </div>
             </Card>
            <Card className={'px-2'}>
                <div className='flex items-center gap-4'>
                  <Checkbox id={'item1'}  />
                  <label htmlFor="item1" className='text-sm text-muted-foreground'> You can subscribe the box as your wish</label>
                </div>
             </Card>
            <Card className={'px-2'}>
                <div className='flex items-center gap-4'>
                  <Checkbox id={'item1'} checked  />
                  <label htmlFor="item1" className='text-sm text-muted-foreground'> You can subscribe the box as your wish</label>
                </div>
             </Card>
            <Card className={'px-2'}>
                <div className='flex items-center gap-4'>
                  <Checkbox id={'item1'}  />
                  <label htmlFor="item1" className='text-sm text-muted-foreground'> You can subscribe the box as your wish</label>
                </div>
             </Card>
            <Card className={'px-2'}>
                <div className='flex items-center gap-4'>
                  <Checkbox id={'item1'} checked  />
                  <label htmlFor="item1" className='text-sm text-muted-foreground'> You can subscribe the box as your wish</label>
                </div>
             </Card>
            <Card className={'px-2'}>
                <div className='flex items-center gap-4'>
                  <Checkbox id={'item1'} checked  />
                  <label htmlFor="item1" className='text-sm text-muted-foreground'> You can subscribe the box as your wish</label>
                </div>
             </Card>


            </div>
        </ScrollArea>
    </div>
  )
}

export default TodoList