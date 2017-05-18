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
    var srcBackground = '';
    var donnees = 'data='+props.Identifiant;
    $.ajax({

        //url:"http://gabrielbaril.ca/sickadelic/Prod/ApiFetchSpecific.php",
        url:"http://gabrielbaril.ca/sickadelic/Dev/ApiFetchSpecific.php",
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
                       }
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            console.log('Erreur:'+ errorThrown);
        },
        async: false
    });
    srcBackground ={
        backgroundImage: 'url("../'+Img+'.jpg")'
    }
    return (
        <div>
            <h2>{Titre}</h2>
            <div className="container-info">
                <div className="img-affiche left" style={srcBackground}></div>
                <div className="Right">
                    <div className="container-auteur">Auteur: <span className="auteur">{aut}</span></div>
                    <div className="cat"><Link to={slugCat}>{nomCat}</Link></div>
                    <div className="dimension">
                        <span className="dim-title">Dimensions</span>
                        <span className="larg">Largeur: {larg}"</span>
                        <span className="haut">Hauteur: {haut}"</span>
                    </div>
                    <p>{Description}</p>
                    <span>{Prix}</span>
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