/**
 * Created by aaagabichou on 17-02-16.
 */
import React from "react";
import $ from 'jquery';
import {Link} from 'react-router-dom'
const Fetch = ({props}) => {
    var Produits = [];


    $.ajax({

        //url:"http://gabrielbaril.ca/sickadelic/Prod/ApiFetchFeatured.php",
        url:"http://gabrielbaril.ca/sickadelic/Dev/ApiFetchFeatured.php",
        type:"POST",
        dataType: 'json',
        cache: false,
        success: function(result){
            Produits = $.map(result.posters, function (value, index) {
                const srcBackground ={
                    backgroundImage: 'url("../'+value.img+'.jpg")'
                };
                return (
                    <div key={value.id}>
                        <Link to={"/product/"+value.id}><div className="img-affiche" style={srcBackground}><span>${value.prix}</span></div></Link>                        
                    </div>);
            });
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            console.log(errorThrown);
        },
        async: false
    });
    return (
        <div className={'container-featured'}>
            <div className={'featured'}>
                {Produits}
            </div>
            <div className="container-calltoaction"><Link to={"/shop/all"} className="btn-calltoaction"><span>Boutique</span></Link></div>
        </div>
    );
}
export default Fetch;