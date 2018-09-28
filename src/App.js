import React, { Component } from 'react';
//import logo from './logo.svg';
import Navbar from "./components/layout/Navbar";
import { Switch, Route } from "react-router-dom";
import DashBoard from "./components/dashboard/Dashboard";
import ProjectDetails from "./components/projects/ProjectDetails";
import SignIn from "./components/auth/Signin";
import SignUp from "./components/auth/Signup";
import CreateProject from "./components/projects/CreateProject";
//import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Navbar/>
                <Switch>
                    <Route exact path="/" component={DashBoard} />
                    <Route path="/project/:id" component={ProjectDetails}/>
                    <Route path ="/signin" component={SignIn}/>
                    <Route path ="/signup" component={SignUp}/>
                    <Route path ="/create" component={CreateProject}/>
                </Switch>
       
            </div>
        );
    }
}

export default App;
