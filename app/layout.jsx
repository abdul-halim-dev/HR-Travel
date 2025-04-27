import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AppsideBar from "@/components/AppSiderbar";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/provider/ThemeProvider";
import { SidebarProvider } from "@/components/ui/sidebar";
import { cookies } from "next/headers"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "AH-Travel",
  description: " This is made by Abdul Halim",
};

export default async function RootLayout({ children }) {

  const cookieStore = await cookies()
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true"
 

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex gap-[8px]`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>

            <SidebarProvider> 
        <AppsideBar/>
        <main className="w-full flex gap-1 flex-col ">
          <Navbar/>
          <div className="px-4">   {children} </div>
        </main>
        </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
