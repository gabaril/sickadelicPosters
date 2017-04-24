/**
 * Created by aaagabichou on 17-02-11.
 */
import React from "react";
import Featured from "./FetchFeatured"
import Categorie from "./FetchCategorie"

export default class Home extends React.Component {
    render() {
        return (
            <div className={'home'}>
            <h2>En vedettes</h2>
            <Featured/>
            <h2>Catégories</h2>
            <Categorie/>
            </div>
        );
    }
}