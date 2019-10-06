import React,{ useState,createContext } from 'react';
export const GrpContext=createContext();
export const GrpProvider= (props)=>{

    const [groups,setgroups]=useState([]);
   
    
      
    return (<div><GrpContext.Provider value={[groups,setgroups]}> {props.children}</GrpContext.Provider></div>)
};
