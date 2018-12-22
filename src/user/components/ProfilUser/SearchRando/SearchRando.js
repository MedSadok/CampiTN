
import React, { Component } from "react";
import AllRandos from "../AllRandos/AllRandos";
import "./SearchRando.css";
class SearchRando extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="rando">
          <form className="example" action="/action_page.php">
            <input type="text" placeholder="Search.." name="search" />
            <button type="submit">
              <i className="fa fa-search "> </i>
            </button>
          </form>
          <div className="allRando">
            <AllRandos />
          </div>
        </div>
      </div>
    );
  }
}
export default SearchRando;
