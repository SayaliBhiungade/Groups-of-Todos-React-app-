import React,{useState,useContext} from 'react';
import Displaycards from './Displaycards';
import {Link} from 'react-router-dom';


import {GrpContext} from '../GrpContext';


const Home=()=> {
  
  const [grpname,setgrpname]=useState("");
  const [groups,setgroups]=useContext(GrpContext);
 
  
 
  const addgrpname= e =>{
    setgrpname(e.target.value);
  
  }
  
  const addgroup = e=>{
    e.preventDefault();
    setgroups(pregroups => [...pregroups,{grpname:grpname,todos:[]}]);
    
  }
  
  return ( <div>
    
    <input type="text" onChange={addgrpname}></input>
    <button onClick={addgroup}>Add Group</button>
    { groups.map(group=>(
      
      <Link to={`/${group.grpname.toString()}`} key={group.grpname.toString()}>  <Displaycards  grp={group} key={group.grpname.toString()}/> </Link>
    ))}
    
    </div>
    );
}
  export default Home;