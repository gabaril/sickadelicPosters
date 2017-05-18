/**
 * Created by aaagabichou on 17-02-11.
 */
import React from "react";
import ProductUI from "./Product";
import Fetch from "./FetchSpecific";

export default class ProductContainer extends React.Component {
    constructor({props}){
        super(props);
    }

    render() {
        return <ProductUI Data={<Fetch Identifiant={this.props.match.params.article}/>}/>;
    }
}