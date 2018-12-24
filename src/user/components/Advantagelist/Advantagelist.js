import React from "react";
import "./Advantagelist.css";
class Advantagelist extends React.Component {
  render() {
    return (
      <div className="advatnages_list light_area section_padding_100_100">
        <div className="container" id="service-container">
          <div className="row">

            <div className="col-md-12 col-lg-4 single_cool_fact">
              <div className="text-center">
                <div className="cool_fact_icon_img">
                  <img src="images/cukl.png" alt="" className="service"/>
                </div>
                <h4 class="cool_fact_name">Cycling</h4>
                <p>
                  Lorem Ipsum is simply dummy
                  <br /> text of the printing and typesetting industry simply.
                </p>
              </div>
            </div>

            <div className="col-md-12 col-lg-4 single_cool_fact">
              <div className="text-center">
                <div className="cool_fact_icon_img">
                  <img src="images/camping.png" alt="" className="service"/>
                </div>
                <h4 className="cool_fact_name">Camping</h4>
                <p>
                  Lorem Ipsum is simply dummy
                  <br /> text of the printing and typesetting industry simply.
                </p>
              </div>
            </div>

            <div className="col-md-12 col-lg-4 single_cool_fact">
              <div className="text-center">
                <div className="cool_fact_icon_img">
                  <img src="images/fishing.png" alt="" className="service" />
                </div>
                <h4 className="cool_fact_name">Fishing</h4>
                <p>
                  Lorem Ipsum is simply dummy
                  <br /> text of the printing and typesetting industry simply.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Advantagelist;
