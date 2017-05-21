/**
 * Created by aaagabichou on 17-02-13.
 */
import React from "react";
import $ from 'jquery';

export default class Form extends React.Component {
    constructor(){
        super();
        this.state = {
            Subject: "",
            FirstName: "",
            LastName: "",
            Email: "",
            Honey: "",
            Message: "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        var donnees = 'Sujet='+this.state.Subject+'&Prenom='+this.state.FirstName+'&Nom='+this.state.LastName+'&Email='+this.state.Email+'&Honeypot='+this.state.Honey+'&Message='+this.state.Message;

        $.ajax({

            url:"http://gabrielbaril.ca/sickadelic/Prod/ApiContact.php",
            //url:"http://gabrielbaril.ca/sickadelic/Dev/ApiContact.php",
            type:"POST",
            data: donnees,
            dataType: 'json',
            cache: false,
            success: function(){

            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                console.log(errorThrown);
            },
            async: false
        });
    }

    handleChange(e){
        const target = e.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="Subject">Sujet:</label>
                <input type="text" id="Subject" name="Subject" value={this.state.Subject} required={true} onChange={this.handleChange}/>

                <div className="container-nom">
                    <div>
                        <label htmlFor="FirstName">Prénom:</label>
                        <input type="text" id="FirstName" name="FirstName" value={this.state.FirstName} required={true} onChange={this.handleChange}/>
                    </div>

                    <div>
                        <label htmlFor="LastName">Nom:</label>
                        <input type="text" id="LastName" name="LastName" value={this.state.LastName} required={true} onChange={this.handleChange}/>
                    </div>
                </div>

                <label htmlFor="Email">Adresse Courriel:</label>
                <input type="email" id="Email" name="Email" value={this.state.Email} required={true} onChange={this.handleChange}/>

                <input type="text" id="Honey" name="Honey" required={false} onChange={this.handleChange}/>

                <label htmlFor="Message">Message:</label>
                <textarea id="Message" name="Message" required={true} onChange={this.handleChange}></textarea>

                <div className="container-submit"><input type="submit" value="Envoyer"/></div>
            </form>
        );
    }
}