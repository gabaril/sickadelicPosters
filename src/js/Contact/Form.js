/**
 * Created by aaagabichou on 17-02-13.
 */
import React from "react";

export default class Form extends React.Component {
    constructor(){
        super();
        this.state = {
            Subject: "",
            Name: "",
            Email: "",
            Message: "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        alert('Name: ' + this.state.Name + 'Adress: ' + this.state.Adress);
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
                <label>
                    Name:
                    <input type="text" name="Subject" value={this.state.Subject} required={true} onChange={this.handleChange}/>
                </label>
                <label>
                    Adress:
                    <input type="text" name="Name" value={this.state.Name} required={true} onChange={this.handleChange}/>
                </label>
                <label>
                    Email:
                    <input type="email" name="Email" value={this.state.Email} required={true} onChange={this.handleChange}/>
                </label>
                <label>
                    Message:
                    <input type="text" name="Phone" value={this.state.Message} required={true} onChange={this.handleChange}/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        );
    }
}