import React, { Component } from "react";
import Header from '../Header/Header';
import Slider from "../Slider/Slider";
import Advantagelist from "../Advantagelist/Advantagelist";
import Latestnews from "../Latestnews/Latestnews";
import Newsletter from "../Newsletter/Newsletter";
import Footer from "../Footer/Footer";
import  "../../Styles.css";

class Home extends Component {
  render() {
    return (
      <div className="App">
      
      <Header />
       <Slider />

      <Advantagelist />
      <Latestnews />

      <Newsletter />

      <Footer />
    </div>
    );
  }
}

export default Home;
