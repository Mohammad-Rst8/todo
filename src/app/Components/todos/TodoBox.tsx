import React, { useEffect, useState } from 'react'
import { FaTrashAlt } from "react-icons/fa";
import { IItemProps } from './Todos';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteTodo, updateTodo } from '@/app/services/todoApi';
interface IItemProp{
    item : IItemProps
}
function TodoBox({item}:IItemProp) {
  const [checkVal, setCheckVal] = useState(false)
  useEffect(() =>{
    setCheckVal(item.completed)
  },[])
  const queryClient = useQueryClient()
 
    const {mutate:deleteTodoItemFn} = useMutation({
      mutationFn:deleteTodo,
      onSuccess: ()=>{
          queryClient.invalidateQueries({queryKey :["todos"]})
      },
      onError : (err)=>{
        console.log(err.message);
        
      }
    })


    const {mutate:changeCompletedTodoItem} = useMutation({
      mutationFn:updateTodo,
      onSuccess: ()=>{
          queryClient.invalidateQueries({queryKey :["todos"]})
      },
      onError : (err)=>{
        console.log(err.message);
        
      }
      
    })



  function deleteHandler(id:number){
    deleteTodoItemFn(id)
    
  }
  function checkedHandler(e:React.ChangeEvent<HTMLInputElement >){
    const newState = !checkVal
    const state = e.target.checked
    setCheckVal(state)
    
    
   const id = item.id
    changeCompletedTodoItem({id , newState})
    
  }
  return (
    <div className='flex px-4 py-3 rounded-xl shadow-xl mx-3 bg-slate-700 items-center justify-between gap-3'>
        <div className='flex items-center gap-3'>
        <input type="checkbox" onChange={checkedHandler} checked={checkVal}  className='cursor-pointer'/>
        <strong>{item.todo}</strong>

        </div>
        <button className='cursor-pointer  '>
        <FaTrashAlt onClick={() => deleteHandler(item.id)}  className='text-red-500 hover:text-red-700 transition-all'  size={25}/>

        </button>
    </div>
  )
}

export default TodoBox