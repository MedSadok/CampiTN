import React, {Component} from "react";
import { Link } from 'react-router-dom';

class Nabar extends Component{
    render(){
        return(
            <nav className="navbar navbar-default">
             <div className="container-fluid">
              <ul className="nav navbar-nav">
                <li >
                  <Link to ="/"><a href="/"><span className="sr-only">Accueil</span></a></Link>
                </li>
                <li>
                  <Link to ="/"><a href="/">Accueil</a></Link>
                </li>
                <li>
                  <Link to ="/Randonnée"><a href="/">Randonnées</a></Link>
                </li>
                <li >
                  <Link to ="/"><a href="/">Services</a></Link>
                </li>
                <li>
                  <Link to ="/Photo"><a href="/">Photos</a></Link>
                </li>
                <li>
                  <Link to ="/ProfilUser"><a href="/">Profile</a></Link>
                </li>
                <li>
                  <Link to ="/member-space"><a href="">Connexion</a></Link>
                </li>
                <li>
                  <Link to ="/Contact"><a href="">Contact</a></Link>
                </li>
              </ul>
            </div>
        </nav>
        )
    }
}

export default Nabar;