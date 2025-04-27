import { Calendar, ChevronsDown, ChevronsUpDown, ChevronUp, Home, Inbox, Plus, Projector, Search, Settings, User2 } from 'lucide-react'
import React from 'react'
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupAction, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuBadge, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem } from './ui/sidebar'
import Link from 'next/link'
import Image from 'next/image'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu'
import { Separator } from './ui/separator'
import { Collapsible, CollapsibleContent } from '@radix-ui/react-collapsible'
import { CollapsibleTrigger } from './ui/collapsible'
import { Button } from './ui/button'

const AppsideBar = () => {

const one = [
  {
    title:'Home',
    url:"/",
    icon: Home
  },
  {
    title:'Inbox',
    url:"#",
    icon: Inbox
  },
  {
    title:'Calendar',
    url:"#",
    icon: Calendar
  },
  {
    title:'Search',
    url:"#",
    icon: Search
  },
  {
    title:'Settings',
    url:"#",
    icon: Settings
  },






]



  return (
    <Sidebar collapsible='icon'>
      {/* HERE IS HEADING START */}
      <SidebarHeader  className={'py-4'}>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href={'/'}>
                <Image className='rounded-full '
                loading='lazy'
                 src={'https://i.ibb.co.com/vxkfcHQp/profile.jpg'}  
                alt='logo' width={20} height={20}/>
                <span> AH-Travel </span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
       {/* HERE IS HEADING END */}

      <Separator/>
      <SidebarContent>
        <SidebarGroup>
          {/* HERE IS MAPPING START */}
          <SidebarGroupLabel>
            application
          </SidebarGroupLabel>
          <SidebarGroupContent> 
            <SidebarMenu>
              {
                one.map(item=>(
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link className=' ' href={`${item.url}`}>
                       <item.icon/>
                       <span>{item.title} </span>
                      </Link>
                    </SidebarMenuButton>
                    {
                      item.title === "Inbox" && (<SidebarMenuBadge>24</SidebarMenuBadge>)
                    } 
                  </SidebarMenuItem>
                ))
              }
            </SidebarMenu>
          </SidebarGroupContent>
          
        </SidebarGroup>
         {/* HERE IS MAPPING  END */}

         {/* PROJECT CREATE START HERE  */}

         <SidebarGroup>
          <SidebarGroupLabel  >
          project <Plus className='ml-auto'/> 
          </SidebarGroupLabel>  
          <SidebarGroupContent>
             <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                   <Link href={'/#'}> <Projector/> See All Project </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                   <Link href={'/#'}> <Plus/> Add Project</Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
             </SidebarMenu>
          </SidebarGroupContent>
    
        </SidebarGroup>
         {/* PROJECT CREATE END HERE */}

                {/* COLLAPSE START HERE */}
        <Collapsible className="group/collapsible" >
        <SidebarGroup>
          <SidebarGroupLabel asChild>
          <CollapsibleTrigger >
                collapse
          <ChevronsUpDown className="h-4 w-4 ml-auto " />
        </CollapsibleTrigger>
          </SidebarGroupLabel>
 
          <CollapsibleContent className=" ">
          <SidebarGroupContent>
             <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                   <Link href={'/#'}> <Projector/> See All Project </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                   <Link href={'/#'}> <Plus/> Add Project</Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
             </SidebarMenu>
          </SidebarGroupContent>
          </CollapsibleContent>
        </SidebarGroup>
        </Collapsible>
         {/* COLLAPSE END HERE */}

         {/* NESTED GROUP START HERE  */}
         <SidebarGroup>
          <SidebarGroupLabel>
          Nested Item <Plus className='ml-auto'/> 
          </SidebarGroupLabel>
          <SidebarGroupContent>
             <SidebarMenu>

              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                   <Link href={'/#'}> <Projector/> See All Project 01 </Link>
                </SidebarMenuButton>
                <SidebarMenuSub> 
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton asChild>
                        <Link href={"/#"}> 
                          <Plus/> Add Project
                        </Link>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                  
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton asChild>
                        <Link href={"/#"}> 
                          <Plus/> Add category
                        </Link>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>

                </SidebarMenuSub>
              </SidebarMenuItem>
             </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
         {/* NESTED GROUP END HERE  */}
         
      </SidebarContent>

              {/* FOOTER START HERE  */}
      <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuButton>
                     <User2/> Abdul Halim <ChevronUp className='ml-auto'/>
                  </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem> Account</DropdownMenuItem>
                  <DropdownMenuItem> Settings</DropdownMenuItem>
                  <DropdownMenuItem> Sing Out</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuItem>
          </SidebarMenu>
      </SidebarFooter>
          {/* FOOTER END HERE  */}
    </Sidebar>
  )
}

export default AppsideBar