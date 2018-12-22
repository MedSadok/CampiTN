import React from "react";
import {Link} from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <header className="main_header fixed_header transparen_bg_head">
        <div className="container clearfix">
          <div className="logo_head">
            <a href="">
              <img src="logo_head.png" alt=""/>
            </a>
          </div>
          
          <nav className="top_nav_links Header Header-expand-lg">
            <div className="collapse Header-collapse" id="topNav">
              <ul className="Header-nav mr-auto">
                <li>
                  <a href="index.html">Accueil</a>
                </li>
                <li>
                  <a href="page.html">A propos</a>
                </li>
                <li>
                  <Link to ="/Randonnée"><a href="">Randonnées</a></Link>
                </li>
                <li className="">
                  <a href="services-category.html">Services</a>
                </li>
                <li className="">
                  <a href="news-category.html">Conseils</a>
                </li>
                <li>
                  <a href="page-photo.html">Photos</a>
                </li>
                <li>
                 <Link to ="/member-space"><a href="">Espace membre</a></Link>
                </li>
                <li>
                 <Link to ="/ProfilUser"><a href="">Profil</a></Link>
                </li>
                <li>
                 <Link to ="/Contact"><a href="">Contact</a></Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}
export default Header;
