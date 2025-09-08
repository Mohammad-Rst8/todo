"use client"

import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
interface IAllstatusProps{
 id: number;
    title: string;
    icon: React.JSX.Element;
}
function StatusTodos({ allstatus }: { allstatus: IAllstatusProps[] }) {
    const [isActive, setIsActive] = useState(1)
        const searchParams = useSearchParams()
        const router = useRouter()
        const params = new URLSearchParams(searchParams.toString())
    
    function activateHandler(index:number){
                params.set("status",allstatus[index-1].title)
                router.push(`?${params.toString()}`);
                setIsActive(index)
    }


 
  return (
    <ul className='flex items-center justify-center mx-2 gap-2 px-1'>
        {allstatus.map((status, index) =>(
            <li onClick={() => activateHandler(index+1)} key={index} className={`flex items-center pb-0.5 gap-0.5 px-1 hover:text-gray-300 transition-all border-b-[1px] border-transparent cursor-pointer  ${isActive === index+1 ? "text-white !border-green-400 " : "text-gray-400/80"}`}  >
                {status.icon}
                {status.title}
            </li>
        ))}
    </ul>
  )
}

export default StatusTodos