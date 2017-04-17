/**
 * Created by aaagabichou on 17-02-11.
 */
import React from "react";

export default class Shop extends React.Component {

    render() {
        return (
            <div className={'shop'}>
            {this.props.Data}
            </div>
        );
    }
}