/**
 * Created by aaagabichou on 17-02-11.
 */
import React from "react";
import { BrowserHistory } from 'react-router';

export default class ProductUI extends React.Component {
    constructor({props}){
        super(props);
    }
    render() {
        return (
            <div>
            {this.props.Data}

            <form method="post" action="https://www.paypal.com/cgi-bin/webscr">
            <input type="hidden" name="cmd" value="_cart"/>
            <input type="hidden" name="add" value="1"/>
            <input type="hidden" name="business" value=""/>
            <input type="hidden" name="item_name" value="Baseball Hat"/>
            <input type="hidden" name="item_number" value="123"/>
            <input type="hidden" name="amount" value="5.95"/>
            <input type="hidden" name="shipping" value="1.00"/>
            <input type="hidden" name="shipping2" value="0.50"/>
            <input type="hidden" name="handling" value="2.00 "/>
            <input type="hidden" name="currency_code" value="USD"/>
            <input type="hidden" name="return" value=""/>
            <input type="hidden" name="undefined_quantity" value="1"/>
            <input type="image" src="http://www.paypalobjects.com/fr_XC/i/btn/x-click-but22.gif" border="0" name="submit" width="87" height="23" alt="Effectuez vos paiements via PayPal : une solution rapide, gratuite et sécurisée"/>
            </form>
            </div>
        );
    }
}