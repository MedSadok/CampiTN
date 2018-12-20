import React, { Component } from "react";
import ImageUpload from "./ImageUpload";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

class Profil extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="espace-membre">
        <div className="rando">
          <a href="">organiser une rando</a>
          <a href=""> Mes randos</a>
        </div>
        <div className="membre">
          <div className="info-personnel">
            <ImageUpload />

            <div className="information">
              <a href="">Modifier Profile</a>
              <a href="">Message</a>
              <a href="">Aide </a>
              <a href="">Devenir Organisateur</a>
              <a href="">Deconnecter</a>
            </div>
          </div>

          <Form className="formulaire">
            <FormGroup>
              <Label for="exampleSelect" >Type de rando</Label>
              
              <Input type="select" name="select" id="exampleSelect">
                <option>Selectionner</option>
                <option>Camping</option>
                <option>pêche</option>
                <option>cyclisme</option>
              </Input>
             
            </FormGroup>

            <FormGroup>
              <Label>Nom de Rando</Label>
           
              <Input type="text" name="" id="" placeholder="" />
             
            </FormGroup>

            <FormGroup >
              <Label>Point de départ</Label>
              <Input type="text" name="" id="" placeholder="" />
            </FormGroup>
            <FormGroup>
              <Label>Déstination</Label>
              <Input type="text" name="" id="" placeholder="" />
            </FormGroup>
            <FormGroup>
              <Label>Prix</Label>
              <Input type="text" name="" id="" placeholder="" />
            </FormGroup>

            <FormGroup>
              <Label for="exampleDate">Date</Label>
              <Input
                type="date"
                name="date"
                id="exampleDate"
                placeholder="date "
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleTime">Temps</Label>
              <Input
                type="time"
                name="time"
                id="exampleTime"
                placeholder="timer"
              />
            </FormGroup>

            <FormGroup>
              <Label for="exampleText">Description</Label>
              <Input type="textarea" name="text" id="exampleText" />
            </FormGroup>
          </Form>
        </div>
        <div className="confirm-cancel">
          <Button outline color="success">
            Confirmer
          </Button>
          <Button outline color="warning">
            Annuler
          </Button>
        </div>
      </div>
    );
  }
}

export default Profil;
