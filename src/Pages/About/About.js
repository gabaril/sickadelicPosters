/**
 * Created by aaagabichou on 17-02-11.
 */
import React from "react";
import {Link} from 'react-router-dom'

export default class About extends React.Component {
    render() {
        //console.log("settings");
        return (
            <div className="apropos">
                <div className="banniere"></div>
                <h2>À propos</h2>
                <div className="container-apropos">
                    <div className="container-texte">
                        <p><strong>Sickadelic Posters</strong> est une entreprise spécialisée dans la création d'affiches minimalistes.</p>
                        <p> Nous sommes composés d'une équipe jeune et <strong>dynamique</strong> pour qui l'<strong>art et le design</strong> ont toujours été une <strong>véritable passion</strong>.</p>
                        <p>Toutes nos affiches ont étés créées par un <strong>artiste d'ici</strong>. En obtenant une affiche signée <strong>Sickadelic</strong>, vous <strong>soutenez l'auteur</strong> et obtenez une pièce unique pour votre maison.</p>
                        <p>Que vous ayez une idée géniale pour une affiche, ou tout simplement une question ou un commentaire sur l'entreprise, n'hésitez pas à nous <Link to={'/contact'}><strong>contacter</strong></Link>.</p>
                    </div>
                    <div className="container-image"></div>
                </div>
            </div>
        );
    }
}