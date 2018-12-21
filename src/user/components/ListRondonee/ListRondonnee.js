import React, { Component } from "react";
import  "./listRondonne.css";

const rando = [
  {
    title: "Randonné Tabarka",
    img:"https://femmesdetunisie.com/wp-content/uploads/2015/12/feu-de-camp.jpg",
    price: "50",
    type: "camping",
    location: "Tabarka",
    descreption:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    title: "Randonné Bizerte",
    img:"https://images.pexels.com/photos/695928/pexels-photo-695928.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    price: "65",
    type: "Fishing",
    location: "Bizerte",
    descreption:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    title: "Randonné Korbos",
    img: "https://images.pexels.com/photos/90454/pexels-photo-90454.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    price: "40",
    type: "Cycling",
    location: "Korbos",
    descreption:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  }
];

const RandoCard = props => {
  const randos = props.rando;

  return (
    <div className="Rando-card">
      <img src={randos.img} alt="" />
      <div className="detail">
        <span className="rando-title">{randos.title}</span>
        <div className="sub-detail">
          <span>{randos.type}</span>
          <span>{randos.location}</span>
        </div>
        <span className="price">{randos.price} DT</span>
        <p className="parag">{randos.descreption}</p>
      </div>
    </div>
  );
};

class Randonnée extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchRando: "",
      Rando: rando
    };
  }

  Search = elm => {
    this.setState({
      searchRando: elm.target.value
    });
  };
  render() {
    return (
        <div className="RandoContainer">
        <input
          placeholder="Chercher une randonnée ..."
          value={this.state.searchRando}
          onChange={this.Search}
          className="SearchBar"
        />
        <div className="rando-card">
          {this.state.Rando
            .filter(
              el =>
                el.title
                  .toLowerCase()
                  .indexOf(this.state.searchRando.toLowerCase()) !== -1
            )
            .map(card => (
              <RandoCard rando={card} />
            ))}
        </div>
      </div>
    );
  }
}

export default Randonnée;
