"use client"
import Box from "./Box";
import SideBarItem from "./SideBarItem";
import Library from './Library';
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { HiHome, HiSearch } from "react-icons/hi";

interface SidebarProps{
    children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({
    children
})=>{
    const pathname = usePathname();
    const routes = useMemo(()=>[
        {
            icon: HiHome,
            label: 'Home',
            active: pathname !== 'search',
            href: '/'
        },
        {
            icon: HiSearch,
            label: 'Search',
            active: pathname == 'search',
            href: '/'
        }
    ],[pathname])
    return (
        <div className="flex h-full"> 
            <div className="
                hidden
                md:flex
                flex-col
                gap-y-2
                bg-black
                h-full
                w-[300px]
                p-2
            ">
                <Box className="">
                    <div
                        className="
                            flex
                            flex-col
                            gap-y-4 
                            px-5
                            py-4
                        "
                    >
                        {routes.map((item)=>(
                            <SideBarItem key={item.label} {...item}/>
                        ))}
                    </div>
                </Box>
                <Box className="overflow-y-auto h-full">
                    <Library/>
                </Box>
            </div>
            <main className="h-full flex-1 overflow-y-auto py-2">
                {children}
            </main>
        </div>
    )
}
export default Sidebar;