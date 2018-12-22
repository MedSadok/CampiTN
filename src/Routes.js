import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './user/components/Home/home.js';
import Admin from './Admin/Admin/Admin';
import Authenticate from './user/components/authentification/Authentification.js';
import Randonnee from './user/components/ListRondonee/ListRondonnee';
import ProfilUser from './user/components/user-profil/ProfilUser';
import Contact from './user/components/Contact/Contact';

const Routes = () =>{
    return (
    <Router>
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/admin" component={Admin} />
        <Route path ="/member-space" component={Authenticate}/>
        <Route path ="/Randonnée" component={Randonnee}/>
        <Route path ="/ProfilUser" component={ProfilUser}/>
        <Route path ="/Contact" component={Contact}/>

        </Switch>
    </Router>);
}

export default Routes