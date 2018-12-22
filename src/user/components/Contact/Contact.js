import React from "react";
import "./Contact.css";
//import {Link} from 'react-router-dom';

class Contact extends React.Component {
  render() {
    return (

      <section id="contact">
			<div class="section-content">
				<h1 class="section-header">Contactez nous <br/>
        <span>Téléphone: 52.412.692</span><br/><span>Email: symtech@gmail.com</span></h1>
				
			</div>
        
      <div className="contact-section">
			<div className="container">
               <form>
               <div className="col-md-6">
                  <div className="form-group">
                    <label>Nom complet</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Entrer votre nom complet"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label>Sujet</label>
                    <input
                      type="text"
                      className="form-control"
                      id="sujet"
                      placeholder="Entrer votre sujet"
                    />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="text"
                      className="form-control"
                      id="email"
                      placeholder="Entrer votre email"
                    />
                  </div>
                  </div>
                  <div class="col-md-6">
                    <div className="form-group">
                      <label for ="description"> Message</label>
                      <textarea  className="form-control" id="description" placeholder="Enter Your Message"></textarea>
                    </div>
                  </div>
                </form>
                </div>
                
                <div className="buttons ">
                  <button  className="btn btn-primary"><i class="fa fa-paper-plane" ></i> Send Message  </button>
                  <button type="reset" className="btn btn-danger"> reset</button>
                </div>
               
               
                </div>


                </section>

               





);
}
}

export default Contact;