import React from 'react'

import CreateTodo from './CreateTodo';
import StatusTodos from './StatusTodos';
import { AiOutlineMenu } from "react-icons/ai";
import { BsMenuButtonWide } from "react-icons/bs";
import { MdCheckCircle } from 'react-icons/md';
import Todos from './todos/Todos';
function TodoContainer() {
       const allstatus = [
        {id:1,title : "All" , icon : <AiOutlineMenu size={15}/>,},
        {id:2,title : "Active" , icon :  <BsMenuButtonWide size={15}/>,},
        {id:3,title : "Completed" , icon :  <MdCheckCircle size={15}/>,},
    ]
  return (
    <div className='bg-sky-950 shadow-[0_0_20px] shadow-amber-50/40  px-3 py-3 space-y-3 rounded-lg'>

        <div className='flex items-center justify-center text-center gap-1 '>
        <MdCheckCircle color='#00c951' className='animate-pulse ' size={28}/>
        <h1 className='text-2xl font-bold'>My To-Do List</h1>
        </div>


        <CreateTodo/>
        <StatusTodos allstatus={allstatus}/>
        <Todos />
    </div>
  )
}

export default TodoContainer