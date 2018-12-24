import React, {Component} from "react";
import { Link } from 'react-router-dom';

class Nabar extends Component{
    render(){
        return(
            <nav className="navbar navbar-default">
          <div className="container-fluid">
              <ul className="nav navbar-nav">
                <li >
                  <Link to ="/"><a><span className="sr-only">Accueil</span></a></Link>
                </li>
                <li>
                  <Link to ="/"><a>A propos</a></Link>
                </li>
                <li>
                  <Link to ="/Randonnée"><a>Randonnées</a></Link>
                </li>
                <li >
                  <Link to ="/"><a>Services</a></Link>
                </li>
                <li>
                  <Link to ="/"><a>Conseils</a></Link>
                </li>
                <li>
                  <Link to ="/"><a>Photos</a></Link>
                </li>
                <li>
                  <Link to ="/ProfilUser"><a>Profile</a></Link>
                </li>
                <li>
                  <Link to ="/member-space"><a>Connexion</a></Link>
                </li>
                <li>
                  <Link to ="/Contact"><a>Contact</a></Link>
                </li>
              </ul>
            </div>
        </nav>
        )
    }
}

export default Nabar;