/**
 * Created by aaagabichou on 17-02-11.
 */
import React from "react";

export default class ProductUI extends React.Component {
    constructor({props}){
        super(props);
    }

    render() {
        return (
            <div className="Product">                
                {this.props.Data}
            </div>
        );
    }
}