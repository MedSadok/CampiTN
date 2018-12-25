import React from "react";
import "./AllRandos.css";

const AllRandos = props => {
  const randos = props.rando;

  return (
    <div className="">
      <div className="liste-rando">
        <a href="">{randos.titre}</a>

        <div>
          <button className="btn btn-secondary ">Modifier</button>
          <button className="btn btn-warning ">Supprimer</button>
        </div>
      </div>
    </div>
  );
};

export default AllRandos;
