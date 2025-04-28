import React from 'react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"
import CardList from '@/components/CardList'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import {  BadgeCheck, Candy, Citrus, Shield } from 'lucide-react'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
  
import {
    Sheet,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Button } from '@/components/ui/button'
import EidtUser from '@/components/EidtUser'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import AppLineChart from '@/components/AppLineChart'

  

const singleUserPage = () => {
  return (
    <div>
<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Dashbord</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/users">users</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Abdul Halim </BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>

{/* CONTAINER  */}
<div className='w-full flex flex-col xl:flex-row gap-8 mt-2'>
    {/* LEFT  */}
<div className=' w-full xl:w-1/3 space-y-6 '> 
{/* BADGE CONTAINER  */}
 <div className=' bg-primary-foreground p-4 rounded-lg'> 
    <h1 className=' text-lg font-semibold mb-6'> User Badges </h1> 
  <div className='flex mt-4 gap-4'>
  <HoverCard>
  <HoverCardTrigger>
    <BadgeCheck size={36} className='rounded-full cursor-pointer bg-blue-500/30 p-2 border-2 border-blue-500/50 '/>
  </HoverCardTrigger>
  <HoverCardContent>
  <h2 className='font-bold mb-2'>Verified User </h2>
  <p className='text-sm text-muted-foreground'> This user has been verified by Admin </p>
  </HoverCardContent>
</HoverCard>

  <HoverCard>
  <HoverCardTrigger>
    <Shield size={36} className='rounded-full cursor-pointer bg-blue-500/30 p-2 border-2 border-blue-500/50 '/>
  </HoverCardTrigger>
  <HoverCardContent>
  <h2 className='font-bold mb-2'> Admin </h2>
  <p className='text-sm text-muted-foreground'> This user has been verified by Admin </p>
  </HoverCardContent>
</HoverCard>

  <HoverCard>
  <HoverCardTrigger>
    <Candy size={36} className='rounded-full cursor-pointer bg-blue-500/30 p-2 border-2 border-blue-500/50 '/>
  </HoverCardTrigger>
  <HoverCardContent>
  <h2 className='font-bold mb-2'>Awarded </h2>
  <p className='text-sm text-muted-foreground'> This user has been verified by Admin </p>
  </HoverCardContent>
</HoverCard>

  <HoverCard>
  <HoverCardTrigger>
    <Citrus size={36} className='rounded-full cursor-pointer bg-blue-500/30 p-2 border-2 border-blue-500/50 '/>
  </HoverCardTrigger>
  <HoverCardContent>
  <h2 className='font-bold mb-2'>Popular </h2>
  <p className='text-sm text-muted-foreground'> This user has been verified by Admin </p>
  </HoverCardContent>
</HoverCard>



  </div>
  
 
 </div> 
 {/* INFORMATION CONTAINER  */}
 <div className=' bg-primary-foreground p-4 rounded-lg'> 
    <div className='flex items-center justify-between '>
    <h1 className=' text-lg font-semibold mb-6'> User Information  </h1> 

    <Sheet>
  <SheetTrigger asChild>
    <Button className={'cursor-pointer'}> Edit User</Button>
  </SheetTrigger>
    <EidtUser/>
</Sheet>

    </div>

 <div className='space-y-4 mt-4 '>
    <div className='flex flex-col gap-2 mb-8 '> 
        <p className='text-sm text-muted-foreground  '> Profile Completion </p>
        <Progress value={33} />

    </div>
    <div className='w-full flex items-center   gap-3'>
        <span className='font-bold text-lg'> User Name: </span>
        <span className='font-normal text-lg'> John Doe </span>
    </div>
    <div className='w-full flex items-center   gap-3'>
        <span className='font-bold text-lg'> Email: </span>
        <span className='font-normal text-lg'> demo@gmail.com </span>
    </div>
    <div className='w-full flex items-center   gap-3'>
        <span className='font-bold text-lg'> Phone Num: </span>
        <span className='font-normal text-lg'> +8801888602278 </span>
    </div>
    <div className='w-full flex items-center   gap-3'>
        <span className='font-bold text-lg'> Location: </span>
        <span className='font-normal text-lg'> Bangladesh </span>
    </div>
    <div className='w-full flex items-center   gap-3'>
        <span className='font-bold text-lg'> Role: </span>
        <Badge> Admin </Badge>
    </div>
    <p className='text-sm text-muted-foreground mt-4 '> Joining Date: 2025.01.15</p>

 </div>
 </div>
{/* CARTLIST CONTAINER  */}
 <div className=' bg-primary-foreground p-4 rounded-lg'> 
    <CardList title={'Recent Transactions'}/>
 </div>
</div>
{/* RIGHT  */}
<div className=' w-full xl:w-2/3 space-y-6 '> 
{/* USER CARD CONTAINER  */}
<div className=' bg-primary-foreground p-4 rounded-lg space-y-4'> 
   <div className='flex items-center gap-2'>
    <Avatar>
        <AvatarImage size={12} src={"https://i.ibb.co.com/vxkfcHQp/profile.jpg"}/> 
        <AvatarFallback>AH </AvatarFallback>
    </Avatar>
    <h2 className='text-lg font-semibold'> AH-Travel</h2>
   </div>
   <p className='text-sm text-muted-foreground'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit voluptatem blanditiis velit beatae vitae modi voluptas sint, repellat aliquam. Eveniet ex quaerat magni voluptates unde? Dolore reiciendis natus quod esse libero qui inventore. Numquam, voluptas voluptatem velit ipsa, repellat commodi nostrum repellendus natus corrupti dolor cupiditate assumenda similique dolore tempora sunt inventore! Tempore qui doloremque omnis minima quas esse quis vel, sint enim cum deleniti id deserunt odio nobis quod repudiandae maiores et nesciunt molestiae voluptatibus animi perspiciatis quisquam a quo. Corrupti praesentium amet commodi ratione quidem consectetur distinctio quam?</p>
 </div>

{/* CHART CONTAINER  */}
<div className=' bg-primary-foreground p-4 rounded-lg'> 
<h1 className=" text-lg font-semibold "> User Activities</h1>

    <AppLineChart/>
 </div>
</div>
</div >

    </div>
  )
}

export default singleUserPage