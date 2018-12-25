import React, { Component } from "react";
import AllRandos from "../AllRandos/AllRandos";
import "./SearchRando.css";
const listrando = [
  {
    titre: "Rando Tabarka"
  },
  {
    titre: "Rando Bizerte"
  },
  {
    titre: "Rando Korbos"
  },
  {
    titre: "Rando Jerba"
  },
  {
    titre: "Rando Mednin"
  },
  {
    titre: "Rando Beja"
  },
  {
    titre: "Rando Jendouba"
  },
  {
    titre: "Rando Nabeul"
  },
  {
    titre: "Rando Tozeur"
  },
  {
    titre: "Rando Zaghouan"
  }
];

class SearchRando extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchrando: "",
      Rando: listrando
    };
  }

  SearchRandonnee = el => {
    this.setState({
      searchrando: el.target.value
    });
  };
  render() {
    return (
      <div>
        <div>
          <div className="rando">
            <form className="example formm" action="">
              <input
                type="text"
                placeholder="Search.."
                name="search"
                value={this.state.searchrando}
                onChange={this.SearchRandonnee}
              />
              <button type="submit">
                <i className="fa fa-search "> Chercher </i>
              </button>
            </form>
            <div className="allRando">
              {this.state.Rando.filter(
                el =>
                  el.titre
                    .toLowerCase()
                    .indexOf(this.state.searchrando.toLowerCase()) !== -1
              ).map(card => (
                <AllRandos rando={card} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchRando;
