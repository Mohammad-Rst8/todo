interface IUpdateParams{
id:number
 newState:boolean
}

export const getTodos =async () =>{
    const res =await fetch("https://jymfmdqdkzyaagzqewko.supabase.co/rest/v1/Todo?select=*", {
       headers:{
       
           "apikey" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp5bWZtZHFka3p5YWFnenFld2tvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQzOTIzMTAsImV4cCI6MjA2OTk2ODMxMH0.3L_pjEyckFaxdvZEPO2Sf-nFzZoxaYRPyPObd9n0rxg",
       }
        
    })
    const data =await res.json()
   
    
    return data
}
export const postTodo =async (obj:object) =>{
    
    
    const res =await fetch("https://jymfmdqdkzyaagzqewko.supabase.co/rest/v1/Todo", {
    method: "POST",
       headers:{
         "Content-Type": "application/json",
           "apikey" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp5bWZtZHFka3p5YWFnenFld2tvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQzOTIzMTAsImV4cCI6MjA2OTk2ODMxMH0.3L_pjEyckFaxdvZEPO2Sf-nFzZoxaYRPyPObd9n0rxg",
       },
       body:JSON.stringify(obj)
        
    })
   
    
}

export const deleteTodo =async (id:number) =>{
    
   

    const res =await fetch(`https://jymfmdqdkzyaagzqewko.supabase.co/rest/v1/Todo?id=eq.${id}`, {
    method: "DELETE",
       headers:{
        
           "apikey" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp5bWZtZHFka3p5YWFnenFld2tvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQzOTIzMTAsImV4cCI6MjA2OTk2ODMxMH0.3L_pjEyckFaxdvZEPO2Sf-nFzZoxaYRPyPObd9n0rxg",
       },
       
       
       
        
    }



)
    
    
   
    
}
export const updateTodo =async ({id, newState}:IUpdateParams) =>{
    
    
    const res =await fetch(`https://jymfmdqdkzyaagzqewko.supabase.co/rest/v1/Todo?id=eq.${id}`, {
    method: "PATCH",
       headers:{
         "Content-Type": "application/json",
           "apikey" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp5bWZtZHFka3p5YWFnenFld2tvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQzOTIzMTAsImV4cCI6MjA2OTk2ODMxMH0.3L_pjEyckFaxdvZEPO2Sf-nFzZoxaYRPyPObd9n0rxg",
       },
       body : JSON.stringify({completed : newState})
       
       
       
        
    }
    
    
)

    
    
   
    
}