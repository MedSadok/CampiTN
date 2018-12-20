import React, { Component } from "react";

class Signup extends Component {
  render() {
    return (
      <div className="SignUp">
        <h3 className="heading">Créer un nouveau compte</h3>
        <div>
          <div className="col-sm-8">
            <input
              type="text"
              name="fname"
              id="fname"
              placeholder="Entrer votre prènom"
              className="form-control "
            />
          </div>
          <br />
          <div className="col-sm-8">
            <input
              type="text"
              name="fname"
              id="fname"
              placeholder="Entrer votre nom de famille"
              className="form-control "
            />
          </div>
          <br />
          <div className="col-sm-8">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Entrer votre Email"
              className="form-control "
            />
          </div>
          <br />
          <div className="col-sm-8">
            <input
              type="password"
              name="psw"
              id="psw"
              placeholder="Entrer votre mot de passe"
              className="form-control "
            />
          </div>
          <br />
          <div className="col-sm-8">
            <input
              type="tel"
              id="phone"
              name="phone"
              pattern="[2-9]{2}-[0-9]{3}-[0-9]{3}"
              placeholder="Entrer votre numéro de téléphone"
              className="form-control"
              required
            />
          </div>
        </div>
        <div className="col-sm-8" id="checkCondition">
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="defaultUnchecked"
            />
            <label class="custom-control-label" for="defaultUnchecked">
              &nbsp; j'accepte les termes et conditions
            </label>
          </div>
          <button type="submit" className="btn btn-warning">
            Submit
          </button>
        </div>
      </div>
    );
  }
}

export default Signup;
