
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
          <FormGroup className="formgroupe">
            <Label for="exampleSelect">Type de rando</Label>
            <Input type="select" name="select" id="exampleSelect">
              <option>Selectionner</option>
              <option>Camping</option>
              <option>pêche</option>
              <option>cyclisme</option>
            </Input>
          </FormGroup>

          <FormGroup className="formgroupe">
            <Label>Nom de Rando</Label>
            <Input type="text" name="" id="" placeholder="" />
          </FormGroup>

          <FormGroup className="formgroupe">
            <Label>Point de départ</Label>
            <Input type="text" name="" id="" placeholder="" />
          </FormGroup>
          <FormGroup className="formgroupe">
            <Label>Déstination</Label>
            <Input type="text" name="" id="" placeholder="" />
          </FormGroup>
          <FormGroup className="formgroupe">
            <Label>Prix</Label>
            <Input type="text" name="" id="" placeholder="" />
          </FormGroup>

          <FormGroup className="formgroupe">
            <Label for="exampleDate">Date</Label>
            <Input
              type="date"
              name="date"
              id="exampleDate"
              placeholder="date "
            />
          </FormGroup>
          <FormGroup className="formgroupe">
            <Label for="exampleTime">Temps</Label>
            <Input
              type="time"
              name="time"
              id="exampleTime"
              placeholder="timer"
            />
          </FormGroup>

          <FormGroup className="formgroupe">
            <Label for="exampleText">Description</Label>
            <Input type="textarea" name="text" id="exampleText" />
          </FormGroup>
        </Form>

        <div className="confirm-cancel">
          <Button className="btnconfirmer" outline color="success">
            Confirmer
          </Button>
          <Button className="btnannuler" outline color="warning">
            Annuler
          </Button>
        </div>
      </div>
    );
  }
}
export default FormOrganization;
