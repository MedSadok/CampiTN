import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './user/components/Home/home.js';
import Admin from './Admin/Admin/Admin';
import Authenticate from './user/components/authentification/Authentification.js';

const Routes = () =>{
    return (
    <Router>
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/admin" component={Admin} />
        <Route path ="/member-space" component={Authenticate}/>

        </Switch>
    </Router>);
}

export default Routes