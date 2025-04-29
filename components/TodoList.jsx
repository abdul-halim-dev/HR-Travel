'use client'

import React, { useState } from 'react'
import { ScrollArea } from './ui/scroll-area'
import { Card } from './ui/card'
import { Checkbox } from './ui/checkbox'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
// import { Calendar } from "@/components/ui/calendar"
import { Button } from './ui/button'
import { Calendar1 } from 'lucide-react'



const TodoList = () => {

  // const [date, setDate] = useState(new Date());
  const [open , setopen] = useState(false)

  return (
    <div className=' '>
<h1 className='text-lg font-semibold mb-6'> Todo List </h1>
<Popover open={open} onOpenChange={setopen} className="w-full">
  <PopoverTrigger asChild  className="w-full">
    <Button  className="w-full"> 
      <Calendar1/> 
      {/* {date ? date.toDateString() : <span> pick a date</span>} */}

    </Button>
  </PopoverTrigger>
  <PopoverContent className={'w-full p-0'}>
  {/* <Calendar 
    mode="single"
    selected={date}
    onSelect={(date)=>{setDate(date)
      setopen(false)
    }}
    className="rounded-md  h-[330px] "
  /> */}

  This is the calendar 
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

// 'use client'

// import React, { useState } from 'react'
// import { ScrollArea } from './ui/scroll-area'
// import { Card } from './ui/card'
// import { Checkbox } from './ui/checkbox'
// import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
// import { Calendar } from './ui/calendar'
// import { Button } from './ui/button'
// import { Calendar as CalendarIcon } from 'lucide-react'

// const TodoList = () => {
//   const [date, setDate] = useState(new Date())
//   const [open, setOpen] = useState(false)
//   const [todos, setTodos] = useState([
//     { id: 1, text: 'Complete project documentation', completed: false },
//     { id: 2, text: 'Review pull requests', completed: true },
//     { id: 3, text: 'Update dependencies', completed: false },
//     { id: 4, text: 'Schedule team meeting', completed: true },
//     { id: 5, text: 'Fix responsive layout issues', completed: false },
//   ])

//   const toggleTodo = (id) => {
//     setTodos(todos.map(todo => 
//       todo.id === id ? { ...todo, completed: !todo.completed } : todo
//     ))
//   }

//   return (
//     <div className="space-y-4 p-4">
//       <h1 className="text-lg font-semibold">Todo List</h1>
      
//       {/* Date Picker */}
//       <Popover open={open} onOpenChange={setOpen}>
//         <PopoverTrigger asChild>
//           <Button
//             variant="outline"
//             className="w-full justify-start text-left font-normal"
//           >
//             <CalendarIcon className="mr-2 h-4 w-4" />
//             {date ? date.toDateString() : <span>Pick a date</span>}
//           </Button>
//         </PopoverTrigger>
//         <PopoverContent className="w-auto p-0">
//           <Calendar
//             mode="single"
//             selected={date}
//             onSelect={(selectedDate) => {
//               setDate(selectedDate || new Date())
//               setOpen(false)
//             }}
//             initialFocus
//           />
//         </PopoverContent>
//       </Popover>

//       {/* Todo Items */}
//       <ScrollArea className="h-[300px] rounded-md border">
//         <div className="p-2 space-y-2">
//           {todos.map((todo) => (
//             <Card key={todo.id} className="p-3">
//               <div className="flex items-center space-x-3">
//                 <Checkbox
//                   id={`todo-${todo.id}`}
//                   checked={todo.completed}
//                   onCheckedChange={() => toggleTodo(todo.id)}
//                 />
//                 <label
//                   htmlFor={`todo-${todo.id}`}
//                   className={`text-sm ${
//                     todo.completed ? 'line-through text-muted-foreground' : ''
//                   }`}
//                 >
//                   {todo.text}
//                 </label>
//               </div>
//             </Card>
//           ))}
//         </div>
//       </ScrollArea>
//     </div>
//   )
// }

// export default TodoList