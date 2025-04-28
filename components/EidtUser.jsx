
// 'use client'
// import React from 'react'
// import {
//     SheetContent,
//     SheetDescription,
//     SheetHeader,
//     SheetTitle,
//   } from "@/components/ui/sheet"
//   import { zodResolver } from "@hookform/resolvers/zod"
//   import { useForm } from "react-hook-form"
//   import { z } from "zod"
// import { Form, FormField } from './ui/form'
// import { Button } from './ui/button'


// import {
 
//     FormControl,
//     FormDescription,
 
//     FormItem,
//     FormLabel,
//     FormMessage,
//   } from "@/components/ui/form"

//   const formSchema = z.object({
//     username: z.string() .max(50) .min(2, {
//       message: "Username must be at least 2 characters.",
//     }),
//     email:z.string().email({message: "Invalied email Address"}),
//     phone:z.string().min(10).max(15),
//     location:z.string().min(2),
//     role:z.enum("admin","user")
// } )
   


// const EidtUser = () => {
//     const form = useForm<z.infer<typeof formSchema>>({
//         resolver: zodResolver(formSchema),
//         defaultValues: {
//           username: "John Doe",
//           email: "demo@gmail.com",
//           phone: "+8801888602278",
//           location: "Bangladesh",
//           role:"Admin"
//         },
//       })
//   return (
//     <SheetContent>
//     <SheetHeader>
//       <SheetTitle className={'mb-4'}> Edit User</SheetTitle>
//       <SheetDescription>
//       <Form {...form}>
//       <form className="space-y-8">
//       {/* onSubmit={form.handleSubmit(onSubmit)}  */}
//         <FormField
//           control={form.control}
//           name="username"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Username</FormLabel>
//               <FormControl>
//                 <Input   {...field} />
//               </FormControl>
//               <FormDescription>
//                 This is your public username
//               </FormDescription>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         <Button type="submit">Submit</Button>
//       </form>
//     </Form>
//       </SheetDescription>
//     </SheetHeader>
//   </SheetContent>
//   )
// }

// export default EidtUser
'use client'
import React from 'react'
import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Form, FormField } from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  

// Form validation schema
const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }).max(50),
  email: z.string().email({
    message: "Invalid email address",
  }),
  phone: z.string().min(10).max(15),
  location: z.string().min(2),
  role: z.enum(["admin", "user"])
})

export default function EditUser() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "John Doe",
      email: "demo@gmail.com",
      phone: "+8801888602278",
      location: "Bangladesh",
      role: "admin"
    }
  })

  function onSubmit(values) {
    console.log(values)
    // Handle form submission here
  }

  return (
    <SheetContent>
      <SheetHeader>
        <SheetTitle className="mb-4">Edit User</SheetTitle>
        <SheetDescription asChild>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter username" {...field} />
                    </FormControl>
                    <FormDescription>
                      This is your public display name
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              {/* Add other fields with the same pattern */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter email" {...field} />
                    </FormControl>
                    <FormDescription> 
                        Only Admin can see your email..
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="+8801888602278"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter Phone" {...field} />
                    </FormControl>
                    <FormDescription> 
                        Only Admin can see your phone number..
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="Bangladesh"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Location</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter Location" {...field} />
                    </FormControl>
                    <FormDescription> 
                        This is the public location
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="role"
                render={({ field }) => (
                  <FormItem>
                   
                    <FormControl>
                    <Select>
                        <SelectTrigger >
                            <SelectValue placeholder="Role" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Admin">Admin</SelectItem>
                            <SelectItem value="User">User</SelectItem>
                        </SelectContent>
                    </Select>

                    </FormControl>
                    <FormDescription> 
                         Only verified user can be admin...
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </SheetDescription>
      </SheetHeader>
    </SheetContent>
  )
}