import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './user/components/Home/home.js'
import Admin from './Admin/Admin/Admin'

const Routes = () =>{
    return (
    <Router>
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/admin" component={Admin} />
        </Switch>
    </Router>);
}

export default Routes