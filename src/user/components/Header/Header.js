import React, { Component } from 'react';
import Navbar from "./Navbar";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
 
          <ol className="carousel-indicators">
            <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
            <li data-target="#carousel-example-generic" data-slide-to="1"></li>
            <li data-target="#carousel-example-generic" data-slide-to="2"></li>
          </ol>

          <div className="carousel-inner" role="listbox">
            <div className="item active">
              <img src="https://images.pexels.com/photos/17729/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=650&w=940" alt="..." className="img"/>
            </div>
            <div className="item">
              <img src="https://images.pexels.com/photos/1076081/pexels-photo-1076081.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="..." className="img"/>
            </div>
            <div className="item">
              <img src="https://images.pexels.com/photos/358423/pexels-photo-358423.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="..." className="img"/>
            </div>
          </div>
          <a className="left carousel-control" role="button" data-slide="prev">
            <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="right carousel-control" role="button" data-slide="next">
            <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    );
  }
}


export default Header;
