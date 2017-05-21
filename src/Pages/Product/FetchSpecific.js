/**
 * Created by aaagabichou on 17-02-16.
 */
import React from "react";
import $ from 'jquery';
import {Link} from 'react-router-dom'

const Fetch = (props) => {
    var ID = props.Identifiant;
    var aut = "";
    var Titre = "";
    var Description = "";
    var Prix = "";
    var Img = "";
    var Url = "";
    var larg = "";
    var haut = "";
    var cat = "";
    var nomCat = "";
    var slugCat = "";
    var donnees = 'data='+props.Identifiant;
    $.ajax({

        url:"http://gabrielbaril.ca/sickadelic/Prod/ApiFetchSpecific.php",
        //url:"http://gabrielbaril.ca/sickadelic/Dev/ApiFetchSpecific.php",
        type:"GET",
        data: donnees,
        dataType:'json',
        cache: false,
        success: function(result){
            Titre = result['name'];
            aut = result['auteur'];
            Description = result['description'];
            Prix = result['price'];
            Img = result['image'];
            larg = result['largeur'];
            haut = result['hauteur'];
            Url = result['url'];
            cat = result['categorie'];

            switch (cat){
                case '1':
                    nomCat = "Film";
                    slugCat = "/shop/film";
                    break;
                case '2':
                    nomCat = "Jeux";
                    slugCat = "/shop/jeux";
                    break;
                case '3':
                    nomCat = "Pop Art";
                    slugCat = "/shop/pop-art";
                    break;
                case '4':
                    nomCat = "Citations";
                    slugCat = "/shop/citations";
                    break;
                default:
                    break;
                       }
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            console.log('Erreur:'+ errorThrown);
        },
        async: false
    });

    const srcBackground = { 
        backgroundImage: 'url("../img/large/'+Img+'")'
    };

    return (
        <div>
            <Link to={slugCat} className="btnRetour"><span><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 459 459">
                <title>Icone Flèche</title>
                <g>
                    <g id="reply">
                        <path d="M178.5,140.25v-102L0,216.75l178.5,178.5V290.7c127.5,0,216.75,40.8,280.5,130.05C433.5,293.25,357,165.75,178.5,140.25z"
                            />
                    </g>
                </g>
                </svg></span>Retour à la boutique</Link>
            <div className="container-info">

                <div className="img-affiche left" style={srcBackground}></div>
                <div className="Right">
                    <h2>{Titre}</h2>
                    <div className="container-auteur">Auteur: <span className="auteur">{aut}</span></div>
                    <div className="cat">Catégorie: <Link to={slugCat} className="link">#{nomCat}</Link></div>
                    <div className="dimension">
                        <span className="dim-title">Dimensions</span>
                        <div className="dim">
                            <span className="larg">Largeur: {larg}"</span>
                            <span className="haut">Hauteur: {haut}"</span>
                        </div>
                    </div>
                    <div className="details">
                        <span className="det-title">Détails</span>
                        <p>{Description}</p>
                    </div>                    
                    <span className="prix">${Prix}</span>
                    <button className="snipcart-add-item"
                        data-item-id={ID}
                        data-item-name={Titre}
                        data-item-price={Prix}
                        data-item-url={Url}
                        data-item-Description={Description}>Ajouter au panier</button>
                </div>
            </div>
        </div>);
}
export default Fetch;