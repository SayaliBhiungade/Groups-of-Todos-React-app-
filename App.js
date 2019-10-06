import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './Components.jsx/Home';
import Todo from './Todo';
import './App.css';
import {GrpProvider} from './GrpContext';
import {GrpnameProvider} from './Components.jsx/GrpnameContext';





function App() { 
  return (
   
      <Router>
        <div className="App"> 
          <Switch>
            <GrpProvider><GrpnameProvider>
               
                <Route path='/' exact component={Home}/>
                <Route path='/:id' component={Todo}/>
               
                </GrpnameProvider></GrpProvider>
          </Switch>
        </div>
      </Router>
   
  );
}

export default App;
