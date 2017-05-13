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
    //var Url = "http://localhost:3000/product/"+ID;
    //var Url = "http://decorator-arches-17418.netlify.com/product/"+ID;
    //var Url = "http://decorator-arches-17418.netlify.com;
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
    return (<div>
            <h1>{Titre}</h1>
            <img src={"../"+Img+".jpg"}/>
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