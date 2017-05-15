/**
 * Created by aaagabichou on 17-02-11.
 */
import React from "react";

export default class Shop extends React.Component {

    render() {
        return (
            <div className={'shop'}>
            <h1>Boutique</h1>
            {this.props.Data}
            </div>
        );
    }
}