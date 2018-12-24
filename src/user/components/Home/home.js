import React, { Component } from "react";
import Header from '../Header/Header';
import Advantagelist from "../Advantagelist/Advantagelist";
import Newsletter from "../Newsletter/Newsletter";
import Footer from "../Footer/Footer";
import Team from './Team';


class Home extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Advantagelist />
        <Team/>
        <Newsletter />
        <Footer />
    </div>
    );
  }
}

export default Home;
