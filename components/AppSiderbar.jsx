import { Calendar, ChevronUp, Home, Inbox, Plus, Projector, Search, Settings, User2 } from 'lucide-react'
import React from 'react'
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupAction, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarMenuSubButton } from './ui/sidebar'
import Link from 'next/link'
import Image from 'next/image'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu'
import { Separator } from './ui/separator'

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
      <Separator/>
      <SidebarContent>
        <SidebarGroup>
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
                
                  </SidebarMenuItem>
                ))
              }
            </SidebarMenu>
          </SidebarGroupContent>
          
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>
            project
          </SidebarGroupLabel>
          <SidebarGroupAction>
            <Plus /> <span className="sr-only">Add Project</span>
          </SidebarGroupAction>
          <SidebarContent>
             <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                   <Link href={'/#'}> <Projector/> See All Project </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
             </SidebarMenu>
          </SidebarContent>
        </SidebarGroup>

      </SidebarContent>
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
    </Sidebar>
  )
}

export default AppsideBar