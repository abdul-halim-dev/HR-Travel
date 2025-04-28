'use client';

import { LogOut, Moon, Settings, Sun, User } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";
import { Sidebar, SidebarTrigger, useSidebar } from "./ui/sidebar";

const Navbar = () => {
    const {Theme, setTheme} = useTheme()
    const {toggleSidebar} = useSidebar()
  return (
    <nav className="p-4 flex items-center justify-between sticky top-0 bg-background z-20 ">
      {/* LEFT SIDE  */}
      <SidebarTrigger/>


      {/* HOW TO USE CUSTOM CREATE BUTTON INSTEAD OF USEIN DEFAULT SIDERBARTRIGGER  */}
      {/* <Button variant={'outline'} onClick={toggleSidebar} >
        custom button
      </Button> */}
     
      {/* RIGHT SIDE  */}
      <div className=" flex items-center gap-4">
        <Link href={"/"}> dashbord</Link>

        {/* THEME MENU  */}
        <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>

 

        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar> 
              <AvatarImage src="https://i.ibb.co.com/vxkfcHQp/profile.jpg" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent sideOffset={10}>
            <DropdownMenuLabel className={'flex'}>
                <User className="h-[1.2rem] w-[1.2rem] mr-2 "/> Profile
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
                <Settings className="h-[1.2rem] w-[1.2rem] mr-2 " /> Setting
            </DropdownMenuItem>
            <DropdownMenuItem variant="destructive">
                <LogOut className="h-[1.2rem] w-[1.2rem] mr-2 "/> Logout
            </DropdownMenuItem>
         
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default Navbar;
