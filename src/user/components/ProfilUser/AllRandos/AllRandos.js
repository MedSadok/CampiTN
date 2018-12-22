import React from "react" ;
import "./AllRandos.css";
const randonnee = [
  {
    name: "rando "
  },
  {
    name: "rando"
  },
  {
    name: "rando"
  },
  {
    name: "rando"
  },
  {
    name: "rando"
  },
  {
    name: "rando"
  },
  {
    name: "rando"
  },
  {
    name: "rando"
  },
  {
    name: "rando"
  },
  {
    name: "rando"
  }
];

function AllRandos() {
  return randonnee.map((el, i) => (
    <div key={i} className="">
      <div className="liste-rando">
        <a href="">
          {el.name}
          <span>{i + 1}</span>
        </a>

        <div>
          <button className="btn btn-secondary btnmodifier">Modifier</button>
          <button className="btn btn-warning btnsupprimer">Supprimer</button>
        </div>
      </div>
    </div>
  ));
}
export default AllRandos;
