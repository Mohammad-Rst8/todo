"use client"
import {  useMutation, useQueryClient } from '@tanstack/react-query';
import React, { useState } from 'react'
import { HiPlus } from "react-icons/hi2";
import { postTodo } from '../services/todoApi';
function CreateTodo() {
  const [todoVal, setTodoVal] = useState("")
  const queryClient = useQueryClient()
  const {isPending,mutate} = useMutation({
  
   mutationFn : postTodo,
 onSuccess : () =>{
  queryClient.invalidateQueries({queryKey : ["todos"]})
  setTodoVal("")
 },
 

  })
  function changeInput(e:React.ChangeEvent<HTMLInputElement >){
  setTodoVal(e.target.value)
  }
  function addTodoHandler(){
    if(todoVal){
      const obj = {
        todo : todoVal,
        completed : false,
        description: ""
      }
     mutate(obj)
    }
  }
  return (
    <div className='flex items-center gap-2 *:'>
        <input value={todoVal} onChange={changeInput} type="text" className='shadow-md bg-slate-700 focus:shadow-md transition-all focus:ring-1 ring-green-500 px-2 py-1 outline-0 rounded-2xl focus:shadow-green-500' placeholder='Add a new task'/>
        <button  onClick={addTodoHandler} className={`flex cursor-pointer shadow-md hover:bg-blue-700 transition-all  items-center gap-1 bg-blue-500 px-2 py-1 rounded-full ${isPending ? "cursor-not-allowed" : ""}`}>
            <HiPlus/>
            <h2>Add</h2>
        </button>
    </div>
  )
}

export default CreateTodo