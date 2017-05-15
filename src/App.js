import React, { Component }  from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { BrowserHistory } from 'react-router'
import './css/sickadelic.css';
import './sources/sass/snipcart.min.css';
import './sources/js/script.js';
import Home from './Pages/Index/Home'
import Shop from './Pages/Shop/Container'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import Help from './Pages/Help/Help'
import Product from './Pages/Product/Container'

const Navigation = () => (
    <Router history={BrowserHistory}>
        <div>
            <header>
                <nav>
                    <div className="container-nav-desktop">
                        <div className="nav-secondaire">
                            <ul>
                                <li><a href="#" className="snipcart-user-profile"><span className="snipcart-user-email">Se connecter</span></a></li>
                            </ul>
                        </div>
                        <div  className="nav-principal">
                            <h1><Link to="/"><img src={require("./sources/images/icones/logo.svg")}/></Link></h1>
                            <ul>
                                <li><Link to="/about">À propos</Link></li>
                                <li><Link to="/shop/all">Boutique</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                                <li><a href="#" className="snipcart-checkout">Panier</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="container-nav-mobile">
                        <div className="nav-bar">
                            <div className="logo-mobile"><Link to="/"><img src={require("./sources/images/icones/logo-blanc.svg")}/></Link></div>
                            <div className="col">
                                <div className="con">
                                    <div className="bar top"></div>
                                    <div className="bar middle"></div>
                                    <div className="bar bottom"></div>
                                </div>
                            </div>
                        </div>
                        <div className="nav-mobile">
                            <ul>
                                <li><Link to="/about">À propos</Link></li>
                                <li><Link to="/shop/all">Boutique</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                                <li><a href="#" className="snipcart-checkout">Panier</a></li>
                            </ul>
                            <ul>
                                <li><a href="#" className="snipcart-user-profile"><span className="snipcart-user-email">Se connecter</span></a></li>
                            </ul>                            
                        </div>
                        <div className="voile"></div>
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
