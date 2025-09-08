"use client";
import React from "react";
import TodoBox from "./TodoBox";
import { getTodos } from "@/app/services/todoApi";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import Loading from "../Loading";
import Error from "../Error";
export interface IItemProps{
    completed : boolean;
    description:string;
    id:number;
    todo:string;
  
}
function Todos() {
  const params = useSearchParams()
  const status = params.get("status")|| "All"
  
  const { data, isLoading, isError } = useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
    staleTime:0,
   
  });
  if (isLoading) {
    return (
      <Loading/>
    );
      }
    if(isError){
        return (
          <Error/>
        )

    }
    const reverseData = [...data].reverse()
    const filteredData = status === "All" ? reverseData : reverseData.filter(item => status === "Active" ? !item.completed : item.completed)
   

  return (
    <div className="space-y-3">
      {filteredData.map(item =>(
      <TodoBox key={item.id} item={item} />

      ))
       }
        
   
    </div>
  );
}

export default Todos;
