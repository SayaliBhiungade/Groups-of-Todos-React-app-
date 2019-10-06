import React from 'react';
import '/home/sayali/grp/src/App.css';


const Displaytasks=({Todos})=>{

  
    const update =(x)=>(event)=>
    {
      Todos.map(temp=>{
       
        if(temp.todo===x){
          temp.ischecked=event.target.checked;
          console.log(temp);
        }
        
        return temp;
      });
      
    }
       

const tasks =Todos.map((obj) =>
  
<li key={obj.todo.toString()}><input type="checkbox" defaultChecked={obj.ischecked} onChange={update(obj.todo)}></input>{obj.todo}</li>

);
return(
    <div>{tasks}</div>
)
}
export default Displaytasks;