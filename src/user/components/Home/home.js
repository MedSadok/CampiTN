import React, { Component } from "react";
import Navbar from '../Header/Header'
import Slider from "../Slider/Slider";
import Advantagelist from "../Advantagelist/Advantagelist";
import Latestnews from "../Latestnews/Latestnews";
import Newsletter from "../Newsletter/Newsletter";
import Footer from "../Footer/Footer";

class Home extends Component {
  render() {
    return (
      <div className="App">
      
      <Navbar />
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
