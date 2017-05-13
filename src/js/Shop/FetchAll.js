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
        url:"http://gabrielbaril.ca/sickadelic/Prod/ApiFetchAll.php",
        //url:"http://gabrielbaril.ca/sickadelic/Dev/ApiFetchAll.php",
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