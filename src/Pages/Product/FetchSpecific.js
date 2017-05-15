/**
 * Created by aaagabichou on 17-02-16.
 */
import React from "react";
import $ from 'jquery';
const Fetch = (props) => {
    var ID = props.Identifiant;
    var Titre = "";
    var Description = "";
    var Prix = "";
    var Img = "";
    var Url = "";
    var srcBackground = '';
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
            Description = result['description'];
            Prix = result['price'];
            Img = result['image'];
            Url = result['url'];
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            console.log('Erreur:'+ errorThrown);
        },
        async: false
    });
    srcBackground ={
        backgroundImage: 'url("../'+Img+'.jpg")'
    }
    return (<div>
            <h1>{Titre}</h1>
            <div className="img-affiche" style={srcBackground}></div>
            <p>{Description}</p>
            <span>{Prix}</span>
            <button className="snipcart-add-item"
            data-item-id={ID}
            data-item-name={Titre}
            data-item-price={Prix}
            data-item-url={Url}
            data-item-Description={Description}>Ajouter au panier</button>
            </div>);
            }
            export default Fetch;