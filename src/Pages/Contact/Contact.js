/**
 * Created by aaagabichou on 17-02-11.
 */
import React from "react";
import Form from "./Form"

export default class Contact extends React.Component {
    render() {
        //console.log("settings");
        return (
            <div className="container-contact">
                <h2>Contact</h2>
                <div className="contact">
                    <div className="ban-contact"></div>
                    <div className="container-form">
                        <h3>Comment pouvons nous aider?</h3>
                        <Form />
                    </div>
                </div>
            </div>
        );
    }
}