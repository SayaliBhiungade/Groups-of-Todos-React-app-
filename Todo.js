import React,{useState,useContext} from 'react';
import {Link} from 'react-router-dom';

import {GrpnameContext} from './Components.jsx/GrpnameContext'
import './App.css';
import { GrpContext } from './GrpContext';
import Displaytasks from './Displaytasks';




const Todo=({match})=> {
  const [todo,settodo]=useState("");
  
  const [grpname,setgrpname]=useContext(GrpnameContext);
  const [groups,setgroups]=useContext(GrpContext);
  
  
  
  const addtodoname= e=>{
    settodo(e.target.value);
  }
  
  const addtodos = e=>{
    e.preventDefault();
    setgroups(groups.map(grp=>{
      if(grp.grpname===match.params.id){
       grp.todos=grp.todos.concat({todo:todo,ischecked:false});
        
        console.log(grp);
      }
      return grp;
    }));
      
  }
 
  const del =()=>{
    setgroups(groups.map(grp=>{
      if(grp.grpname===match.params.id){
       grp.todos=grp.todos.filter(n=>n.ischecked===false);
        
        console.log(grp);
      }
      return grp;
    }));
     
       
   } 
  return (
    <div className="App">
      <input type="text" onChange={addtodoname}></input>
      <button onClick={addtodos} >Add todo</button>
      <button onClick={del} >delete todo</button>
      <Link to='/' ><button>Take me there</button></Link>
      {<ul style={{listStyleType:"none"}} key={grpname}>
       { groups.map(grp=>{
        if(grp.grpname===match.params.id){
          console.log(grp.todos)
          return(
             <Displaytasks Todos={grp.todos} key={match.params.id}/>)
      } 
      })
      }
    </ul>}
    </div>
  );
}

export default Todo;