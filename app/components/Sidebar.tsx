'use client'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { it } from 'node:test'
import React from 'react'
import { usePathname } from "next/navigation";


const navitems = [
    {
        name: "Home",
        link: "/"
    },
    {
        name: "Skills",
        link: "/skills"
    },
    // {
    //     name: "Experiance",
    //     link: "/experiance"
    // },
    {
        name: "Latest",
        link: "/latest"
    },
    {
        name: "Projects",
        link: "/projects"
    },
    {
        name: "Blogs",
        link: "/blogs"
    },
    {
        name: "Contact Me",
        link: "/contact"
    },
    {
        name: "Drawings",
        link: "/drawings"
    },
    {
        name: "Chat",
        link: "/chat"
    },
    {
        name: "Gyan",
        link: "/gyan"
    },
]








const Sidebar = () => {
const pathname  = usePathname()
    return (
        <>
            <div className="flex flex-col sticky left-0  justify-start  gap-2">
                <div className="flex w-[100px] m-auto my-2 object-contain h-[100px] bg-black rounded-full">

                    {/* <Image src={"/vercel.svg"} fill alt='Logo' className='rounded-full' /> */}
                </div>
                {
                    navitems.map((item, index) => {
                        return (
                            <>
                                <Link href={item.link} >
                                    <p className={clsx(
                                        'px-3 py-2 transition-all w-[15rem] pr-10 duration-200 rounded-md text-[1.2vw] font-medium',
                                        pathname === item.link ? 'bg-gray-800 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                                    )}>
                                    {item.name}
                                    </p>


                                </Link>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Sidebar


