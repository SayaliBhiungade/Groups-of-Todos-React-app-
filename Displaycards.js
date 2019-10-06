import React from 'react';
import '/home/sayali/grp/src/App.css';

const Displaycards=({grp})=>{
    console.log(grp);
    const tasks =grp.todos.map((obj) =>
  
<li key={obj.todo.toString()}><input type="checkbox" defaultChecked={obj.ischecked} ></input>{obj.todo}</li>

);
    return(
        <div className="card">{grp.grpname}
        {tasks}
        </div>
    );
}

export default Displaycards;