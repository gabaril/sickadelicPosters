/**
 * Created by aaagabichou on 17-02-16.
 */
import React from "react";
import {Link} from 'react-router-dom'
import $ from 'jquery';
const Fetch = ({props}) => {
    var Categories = [];

    $.ajax({

        url:"http://gabrielbaril.ca/sickadelic/Prod/ApiFetchCategorie.php",
        //url:"http://gabrielbaril.ca/sickadelic/Dev/ApiFetchCategorie.php",
        type:"POST",
        dataType: 'json',
        cache: false,
        success: function(result){
            Categories = $.map(result.categorie, function (value, index) {
                return (
                    <div key={value.id} className={value.slug+' slug'}>
                        <Link to={"/shop/"+value.slug}><span className="cat_title">#{value.categorie}</span></Link>
                    </div>);
            });
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            console.log(errorThrown);
        },
        async: false
    });
    return (<div className={'categorie'}><div className="all slug"><Link to={"/shop/all"}><span className="cat_title">#Tous</span></Link></div>{Categories}</div>);
}
export default Fetch;