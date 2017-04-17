/**
 * Created by aaagabichou on 17-02-16.
 */
import React from "react";
import $ from 'jquery';
import {Link} from 'react-router-dom'
const Fetch = (props) => {
    var Produits = [];
    var donnees = 'data='+props.Categorie;

    $.ajax({
        //url:"http://localhost/~aaagabichou/sickadelic/src/php/ApiFetchAll.php",
        //url:"http://timunix.cegep-ste-foy.qc.ca/~gclaveau/sickadelic/ApiFetchAll.php",
        url:"http://gabrielbaril.ca/sickadelic/ApiFetchAll.php",
        type:"GET",
        data: donnees,
        dataType: 'json',
        cache: false,
        success: function(result){
            Produits = $.map(result.posters, function (value, index) {
                return (
                    <div key={value.id}>
                        <Link to={"/product/"+value.id}><img src={"../"+value.img+".jpg"}/></Link>
                        <span>Prix: {value.prix}</span>
                    </div>);
                    });
            },
                             error: function(XMLHttpRequest, textStatus, errorThrown) {
                console.log(errorThrown);
            },
                async: false
        });
        return (<div>{Produits}</div>);
           }
           export default Fetch;