import React from "react";

class Slider extends React.Component {
  render() {
    return (
      <div className="bg_overlay1">
        <div className="full-widh-container sliders">
          <div
            id="carouselExampleIndicators"
            className="col-lg-12 col-md-12 col-sm-12 carousel slide"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                className="active"
              />
              <li data-target="#carouselExampleIndicators" data-slide-to="1" />
              <li data-target="#carouselExampleIndicators" data-slide-to="2" />
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  className="bg_overlay1"
                  src="https://i.imgur.com/UXhAQ1u.png"
                  alt="First slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="bg_overlay1"
                  src="https://i.imgur.com/mYagcuz.png"
                  alt="Second slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="bg_overlay1"
                  src="https://i.imgur.com/dvMJR53.png"
                  alt="Third slide"
                />
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default Slider;
