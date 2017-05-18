/**
 * Created by aaagabichou on 17-02-11.
 */
import React from "react";

export default class Shop extends React.Component {

    render() {
        return (
            <div className={'shop'}>
                <h2>Boutique</h2>
                <div className={'container-boutique'}>
                    <div className={'container-boutique-categories left'}>
                        <h3>Catégories</h3>
                        {this.props.Categories}
                    </div>
                    <div className={'container-boutique-produits right'}>
                        <h3>Posters<span className="tag">{this.props.nomCategorie}</span></h3>
                        {this.props.Data}
                    </div>
                </div>
            </div>
        );
    }
}