import React from 'react'; 
import './App.scss';
import RouteProvider from "./route-provider";
import {
  BrowserRouter as Router,
  
  Link
} from "react-router-dom";
function App() {
  return (
    <div className="App">
<Router>
<nav>
          <ul>
            <li>
              <Link to="/resume">Home</Link>
            </li>
            <li>
              <Link to="/resume/about">About</Link>
            </li>
            <li>
              <Link to="/resume/users">Users</Link>
            </li>
          </ul>
        </nav>
       
         <RouteProvider/>
       </Router>
    </div>
  );
}

export default App;
