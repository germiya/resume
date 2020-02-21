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
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
       
         <RouteProvider/>
       </Router>
    </div>
  );
}

export default App;
