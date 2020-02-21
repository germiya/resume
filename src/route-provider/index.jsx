import { 
    Switch,
    Route 
  } from "react-router-dom";
import React from "react"; 

import About from "../components/About";

import  Home from "../components/Home";
  export default class RouteProvider extends React.Component{

    render() {
        return(
            <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        )


    }
  }