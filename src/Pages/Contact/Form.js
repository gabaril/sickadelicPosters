/**
 * Created by aaagabichou on 17-02-13.
 */
import React from "react";
import $ from 'jquery';

export default class Form extends React.Component {
    constructor(){
        super();
        this.state = {
            Name: "",
            Email: "",
            Subject: "",
            Message: "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        var donnees = 'Nom='+this.state.Name+'&Email='+this.state.Email+'&Honeypot='+this.state.Subject+'&Message='+this.state.Message;

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
                <label htmlFor="Name">Nom:</label>
                <input type="text" id="Name" name="Name" value={this.state.Name} required={true} onChange={this.handleChange}/>

                <label htmlFor="Email">Adresse Courriel:</label>
                <input type="email" id="Email" name="Email" value={this.state.Email} required={true} onChange={this.handleChange}/>

                <input type="text" id="Subject" name="Subject" required={false} onChange={this.handleChange}/>
                
                <label htmlFor="Message">Message:</label>
                <textarea id="Message" name="Message" required={true} onChange={this.handleChange}></textarea>

                <input type="submit" value="Envoyer"/>
            </form>
        );
    }
}