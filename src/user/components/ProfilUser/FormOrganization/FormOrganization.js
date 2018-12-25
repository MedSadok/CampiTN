import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import "./FormOrganization.css";
class FormOrganization extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="">
        <Form className="formulaire">
          <FormGroup className="formulairegroupe">
            <Label className="alllabel" for="exampleSelect">
              Type de rando
            </Label>
            <Input type="select" name="select" id="exampleSelect">
              <option>Selectionner</option>
              <option>Camping</option>
              <option>pêche</option>
              <option>cyclisme</option>
            </Input>
          </FormGroup>

          <FormGroup className="formulairegroupe">
            <Label className="alllabel">Nom de Rando</Label>
            <Input type="text" name="" id="" placeholder="" />
          </FormGroup>

          <FormGroup className="formulairegroupe">
            <Label className="alllabel">Point de départ</Label>
            <Input type="text" name="" id="" placeholder="" />
          </FormGroup>
          <FormGroup className="formulairegroupe">
            <Label className="alllabel" for="exampleSelect">
              Déstination
            </Label>
            <Input type="select" name="select" id="exampleSelect">
              <option>Selectionner</option>
              <option>Ariana</option>
              <option>Béja</option>
              <option>Ben Arous</option>
              <option>Bizerte</option>
              <option>Gabès</option>
              <option>Gafsa</option>
              <option>Jendouba</option>
              <option>Kairouan</option>
              <option>Kasserine</option>
              <option>Kébili</option>
              <option>Le Kef</option>
              <option>Mahdia</option>
              <option>La Manouba</option>
              <option>Médenine</option>
              <option>Monastir</option>
              <option>Nabeul</option>
              <option>Sfax</option>
              <option>Sidi Bouzid</option>
              <option>Siliana</option>
              <option>Sousse</option>
              <option>Tataouine</option>
              <option>Tozeur</option>
              <option>Tunis</option>
              <option>Zaghouan</option>
            </Input>
          </FormGroup>

          <FormGroup className="formulairegroupe">
            <Label className="alllabel">Prix</Label>
            <Input type="text" name="" id="" placeholder="" />
          </FormGroup>

          <FormGroup className="formulairegroupe">
            <Label className="alllabel" for="exampleDate">
              Date
            </Label>
            <Input
              type="date"
              name="date"
              id="exampleDate"
              placeholder="date "
            />
          </FormGroup>
          <FormGroup className="formulairegroupe">
            <Label className="alllabel" for="exampleTime">
              Temps
            </Label>
            <Input
              type="time"
              name="time"
              id="exampleTime"
              placeholder="timer"
            />
          </FormGroup>

          <FormGroup className="formulairegroupe">
            <Label className="alllabel" for="exampleText">
              Description
            </Label>
            <Input type="textarea" name="text" id="exampleText" />
          </FormGroup>
        </Form>

        <div className="confirm-cancel">
          <Button className="btn btn-success" outline color="success">
            Confirmer
          </Button>
          <Button className="btn btn-danger" outline color="warning">
            Annuler
          </Button>
        </div>
      </div>
    );
  }
}
export default FormOrganization;
