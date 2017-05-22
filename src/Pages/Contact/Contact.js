/**
 * Created by aaagabichou on 17-02-11.
 */
import React from "react";
import $ from 'jquery';

export default class Contact extends React.Component {
    constructor() {
        super();
        this.state = {
            Subject: "",
            FirstName: "",
            LastName: "",
            Email: "",
            Honey: "",
            Message: "",
            MsgConfirmation: "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        this.setState({
            Subject: localStorage.getItem('Sujet'),
            FirstName: localStorage.getItem('Prenom'),
            LastName: localStorage.getItem('Nom'),
            Email: localStorage.getItem('Email'),
            Honey: localStorage.getItem('Honeypot'),
            Message: localStorage.getItem('Message'),
            MsgConfirmation: localStorage.getItem('Retroaction')
        });
    }
    componentWillUnmount(){
        localStorage.setItem('Sujet', "");
        localStorage.setItem('Prenom', "");
        localStorage.setItem('Nom', "");
        localStorage.setItem('Email', "");
        localStorage.setItem('Honeypot', "");
        localStorage.setItem('Message', "");
        localStorage.setItem('Retroaction', "");
    }

    handleChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(e) {

        localStorage.setItem('Sujet', this.state.Subject);
        localStorage.setItem('Prenom', this.state.FirstName);
        localStorage.setItem('Nom', this.state.LastName);
        localStorage.setItem('Email', this.state.Subject);
        localStorage.setItem('Honeypot', this.state.Honey);
        localStorage.setItem('Message', this.state.Message);
        localStorage.setItem('Retroaction', "L'envoie de votre message s'est déroulé avec succès.");

        var donnees = 'Sujet=' + this.state.Subject + '&Prenom=' + this.state.FirstName + '&Nom=' + this.state.LastName + '&Email=' + this.state.Email + '&Honeypot=' + this.state.Honey + '&Message=' + this.state.Message;

        $.ajax({

            //url:"http://gabrielbaril.ca/sickadelic/Prod/ApiContact.php",
            url: "http://gabrielbaril.ca/sickadelic/Dev/ApiContact.php",
            type: "POST",
            data: donnees,
            dataType: 'json',
            cache: false,
            success: function () {
                
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                console.log(errorThrown);
            },
            async: false
        });
    }

    render() {
        //console.log("settings");
        return (
            <div className="container-contact">
                <h2>Contact</h2>
                <div className="contact">
                    <div className="ban-contact"></div>
                    <div className="container-form">                        
                        <h3>Comment pouvons nous aider?</h3>
                        <span className="retroaction">{this.state.MsgConfirmation}</span>
                        <form onSubmit={this.handleSubmit}>
                            <label htmlFor="Subject">Sujet:</label>
                            <input type="text" id="Subject" name="Subject" value={this.state.Subject} required={true} onChange={this.handleChange} />

                            <div className="container-nom">
                                <div>
                                    <label htmlFor="FirstName">Prénom:</label>
                                    <input type="text" id="FirstName" name="FirstName" value={this.state.FirstName} required={true} onChange={this.handleChange} />
                                </div>

                                <div>
                                    <label htmlFor="LastName">Nom:</label>
                                    <input type="text" id="LastName" name="LastName" value={this.state.LastName} required={true} onChange={this.handleChange} />
                                </div>
                            </div>

                            <label htmlFor="Email">Adresse Courriel:</label>
                            <input type="email" id="Email" name="Email" value={this.state.Email} required={true} onChange={this.handleChange} />

                            <input type="text" id="Honey" name="Honey" required={false} onChange={this.handleChange} />

                            <label htmlFor="Message">Message:</label>
                            <textarea id="Message" name="Message" required={true} onChange={this.handleChange}></textarea>

                            <div className="container-submit"><input type="submit" value="Envoyer" /></div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}