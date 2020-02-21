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
          <Route path="/resume/about">
            <About />
          </Route>
          <Route path="/resume/home">
            <Home />
          </Route>
          <Route path="/resume">
            <Home />
          </Route>
        </Switch>
        )


    }
  }