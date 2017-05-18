/**
 * Created by aaagabichou on 17-02-11.
 */
import React from "react";
import $ from 'jquery';
import ShopUI from "./Shop"
import Fetch from "./FetchAll"
import FetchCat from "./FetchCategorie"

export default class ShopContainer extends React.Component {
    constructor({props}){
        super(props);        
    }

    componentDidMount () {
        window.scrollTo(0, 0);
        $('.slug').removeClass('current');
        $('.'+this.props.match.params.categorie).addClass('current');
    }
    
    componentDidUpdate (){
        $('.slug').removeClass('current');
        $('.'+this.props.match.params.categorie).addClass('current');
    }

    identifyCat() {
        var nomCat = '';
        var slugCat = this.props.match.params.categorie;

        switch (slugCat){
            case 'all':
                nomCat = '#Tous';
                //$('.slug').removeClass('current');
                //$('.all').addClass('current');
                break;
            case 'film':
                nomCat = '#Film';
                //$('.slug').removeClass('current');
                //$('.film').addClass('current');
                break;
            case 'jeux':
                nomCat = '#Jeux';
                //$('.slug').removeClass('current');
                //$('.jeux').addClass('current');
                break;
            case 'pop-art':
                nomCat = '#Pop Art';
                //$('.slug').removeClass('current');
                //$('.pop-art').addClass('current');
                break;
            case 'citations':
                nomCat = '#Citations';
                //$('.slug').removeClass('current');
                //$('.citations').addClass('current');
                break;
            default:
                //$('.slug').removeClass('current');
                //$('.all').addClass('current');
                break;
                       }
        return nomCat;
    }

    render() {
        return <ShopUI Data={<Fetch Categorie={this.props.match.params.categorie}/>} Categories={<FetchCat />} nomCategorie={this.identifyCat()} />;
    }
}