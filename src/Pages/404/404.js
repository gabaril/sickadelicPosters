/**
 * Created by aaagabichou on 17-02-11.
 */
import React from "react";
import { Link } from 'react-router-dom'

var styleEmbed = {
    pointerEvents: 'none'
    };

export default class notFound extends React.Component {

    render() {
        return (
            <div className="notFound">
                <h2>Page introuvable</h2>                
                <Link to={'/'} className="btnRetour"><span><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 459 459">
                    <title>Icone Flèche</title>
                    <g>
                        <g id="reply">
                            <path d="M178.5,140.25v-102L0,216.75l178.5,178.5V290.7c127.5,0,216.75,40.8,280.5,130.05C433.5,293.25,357,165.75,178.5,140.25z"
                            />
                        </g>
                    </g>
                </svg></span>Retour à l'accueil</Link>
                <div className="gif"><span>404</span><iframe src="https://giphy.com/embed/g79am6uuZJKSc" frameBorder="0" className="giphy-embed" allowFullScreen style={styleEmbed}></iframe></div>
            </div >
        );
    }
}