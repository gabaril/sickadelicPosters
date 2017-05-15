/**
 * Created by aaagabichou on 17-02-11.
 */
import React from "react";
import ShopUI from "./Shop"
import Fetch from "./FetchAll"

export default class ShopContainer extends React.Component {
    constructor({props}){
        super(props);
    }
    render() {
        return <ShopUI Data={<Fetch Categorie={this.props.match.params.categorie}/>}/>;
    }
}