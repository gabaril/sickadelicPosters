/**
 * Created by aaagabichou on 17-02-16.
 */
import React from "react";
import $ from 'jquery';
import {Link} from 'react-router-dom'
const Fetch = ({props}) => {
    var Produits = [];
    var srcBackground = '';
    

    $.ajax({
        //url:"https://sickadelicposters.netlify.com/php/Prod/ApiFetchFeatured.php",
        url:"http://gabrielbaril.ca/sickadelic/Prod/ApiFetchFeatured.php",
        //url:"http://gabrielbaril.ca/sickadelic/Dev/ApiFetchFeatured.php",
        type:"POST",
        dataType: 'json',
        cache: false,
        success: function(result){
            Produits = $.map(result.posters, function (value, index) {
                srcBackground ={
                    backgroundImage: 'url("../'+value.img+'.jpg")'
                }
                return (
                    <div key={value.id}>
                        <Link to={"/product/"+value.id}><div className="img-affiche" style={srcBackground}></div></Link>
                        <span>Prix: {value.prix}</span>
                    </div>);
                    });
            },
                             error: function(XMLHttpRequest, textStatus, errorThrown) {
                console.log(errorThrown);
            },
                async: false
        });
        return (<div className={'container-featured'}><div className={'featured'}>{Produits}</div></div>);
           }
           export default Fetch;