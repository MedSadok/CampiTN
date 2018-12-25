import React,{Component} from 'react';
import "./Header.css";
class Slider extends Component{
    render(){
        return(
            <div id="my-pics" className="carousel slide" data-ride="carousel">

            <ol className="carousel-indicators">
            <li data-target="#my-pics" data-slide-to="0" className="active"></li>
            <li data-target="#my-pics" data-slide-to="1"></li>
            <li data-target="#my-pics" data-slide-to="2"></li>
            </ol>

            <div className="carousel-inner" role="listbox">

                <div className="item active">
                    <img src="https://images.pexels.com/photos/17729/pexels-photo.jpg?auto=compress" alt="..." className="slider-img"/>
                </div>
                <div className="item">
                    <img src="https://images.pexels.com/photos/1076081/pexels-photo-1076081.jpeg?auto=compress" alt="..." className="slider-img"/>
                </div>
                <div className="item">
                    <img src="https://images.pexels.com/photos/358423/pexels-photo-358423.jpeg?auto=compress" alt="..." className="slider-img"/>
                </div>
                <a className="left carousel-control" href="#my-pics" role="button" data-slide="prev">
                <span className="icon-prev" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
                </a>

                <a className="right carousel-control" href="#my-pics" role="button" data-slide="next">
                <span className="icon-next" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
                </a>

            </div>
        </div>
        );
    }
}

export default Slider;