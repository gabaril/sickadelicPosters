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
    var donnees = 'data='+props.Identifiant;
    $.ajax({
        //url:"http://localhost/~aaagabichou/sickadelic/src/php/ApiFetchSpecific.php",
        //url:"http://timunix.cegep-ste-foy.qc.ca/~gclaveau/sickadelic/ApiFetchSpecific.php",
        url:"http://gabrielbaril.ca/sickadelic/ApiFetchSpecific.php",
        type:"GET",
        data: donnees,
        dataType:'json',
        cache: false,
        success: function(result){
            Titre = result[1];
            Description = result[2];
            Prix = result[3];
            console.log(result[4]);
            Img = result[4];
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
            </div>);
            }
            export default Fetch;