import React, { Component }  from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { BrowserHistory } from 'react-router'
import './css/sickadelic.css';
import './sources/sass/snipcart.min.css';
import Home from './js/Index/Home'
import Shop from './js/Shop/Container'
import About from './js/About/About'
import Contact from './js/Contact/Contact'
import Help from './js/Help/Help'
import Product from './js/Product/Container'

const Navigation = () => (
    <Router history={BrowserHistory}>
        <div>
            <header>
            <nav>
                <div className="nav-secondaire">
                    <ul>
                        <li><Link to="/help">Besoin d'aide?</Link></li>
                        <li><a href="#" className="snipcart-user-profile"><span className="snipcart-user-email">Se connecter</span></a></li>
                    </ul>
                </div>
                <div  className="nav-principal">
                    <h1><Link to="/"><img src={require("./sources/images/icones/logo.svg")}/></Link></h1>
                    <ul>
                        <li><Link to="/shop/all">Boutique</Link></li>
                        <li><Link to="/about">À propos</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><a href="#" className="snipcart-checkout">Panier</a></li>
                    </ul>
                </div>
            </nav>
            </header>
            <main className="container-page">
                <Route exact path="/" component={Home} />
                <Route path="/shop/:categorie" component={Shop} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/help" component={Help} />
                <Route path="/product/:article" component={Product} />
            </main>
        </div>
    </Router>
);

const Footer = () => (
    <footer>
        <div className="rappel-nav">

        </div>
        <div className="small">
            <p>Copyright &copy; gabrielbaril.ca</p>
        </div>
    </footer>
);

class App extends Component {
    render() {
    return (
      <div className="wrap">
        <Navigation/>
        <div className="App-footer">
            <Footer/>
        </div>
      </div>
    );
  }
}

export default App;
