import React,{ useState,createContext } from 'react';
export const GrpnameContext=createContext();
export const GrpnameProvider= (props)=>{

    const [grpname,setgrpname]=useState([]);
    
      
    return (<div><GrpnameContext.Provider value={[grpname,setgrpname]}> {props.children}</GrpnameContext.Provider></div>)
};
