import React from "react";
import {Link} from 'react-router-dom';

class Navbar extends React.Component {
  render() {
    return (
      <header className="main_header fixed_header transparen_bg_head">
        <div className="container clearfix">
          <div className="logo_head">
            <a href="">
              <img src="logo_head.png" alt=""/>
            </a>
          </div>
          <div className="navbar-expand-lg nav_btn_toggle">
            <button
              className="navbar-toggler open_mobile_menu"
              type="button"
              data-target="#topNavMobile"
            >
              <span className="navbar-toggler-icon">
                <i className="fas fa-bars"/>
              </span>
            </button>
          </div>
          <nav className="top_nav_links navbar navbar-expand-lg">
            <div className="collapse navbar-collapse" id="topNav">
              <ul className="navbar-nav mr-auto">
                <li>
                  <a href="index.html">Accueil</a>
                </li>
                <li>
                  <a href="page.html">A propos</a>
                </li>
                <li>
                  <a href="page.html">Randonnée</a>
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
                 <Link to ="/member-space"> <a href="">Espace membre</a></Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}
export default Navbar;
