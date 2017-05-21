import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { BrowserHistory } from 'react-router'
//import PropTypes from 'prop-types'
import './css/sickadelic.css';
import './sources/sass/snipcart.min.css';
//import './css/animista.css';
import './sources/js/script.js';
import Home from './Pages/Index/Home'
import Shop from './Pages/Shop/Container'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import notFound from './Pages/404/404'
import Product from './Pages/Product/Container'

const Navigation = () => (
    <Router history={BrowserHistory}>
        <div>
            <header>
                <nav>
                    <div className="container-nav-desktop">
                        <div className="nav-secondaire">
                            <ul>
                                <li><Link to={'#'} className="snipcart-user-profile"><span>Mon Compte</span></Link></li>
                            </ul>
                        </div>
                        <div  className="nav-principal">
                            <h1><Link to="/"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240.65 141.55"><defs></defs><title>Sickadelic Posters</title><g id="Logo"><path className="cls-1" d="M1.22,39.09a5.85,5.85,0,0,1,.36-2.14Q1.93,36,3.43,36l.62,0a3.17,3.17,0,0,1,.68.1,7.87,7.87,0,0,0,1,4.58q1,1.53,3.9,1.53a15.27,15.27,0,0,0,4.61-.71,13.51,13.51,0,0,0,4.12-2.11,11,11,0,0,0,3-3.41,9.09,9.09,0,0,0,1.14-4.55,2.37,2.37,0,0,0-1.07-2.21,10.25,10.25,0,0,0-2.37-1,18.74,18.74,0,0,1-2.37-.88,1.74,1.74,0,0,1-1.07-1.72,3.72,3.72,0,0,1,1.82-2.86,21.12,21.12,0,0,1,4.29-2.44,32.19,32.19,0,0,1,4.9-1.69,16.53,16.53,0,0,1,3.73-.62,3.59,3.59,0,0,1-.81,2.66,5.91,5.91,0,0,1-2,1.23q-1.17.45-2.37.88a3.92,3.92,0,0,0-2,1.59,23,23,0,0,1,1.72,1.53A5.62,5.62,0,0,1,26,27.4a5.53,5.53,0,0,1,.52,1.72,16.78,16.78,0,0,1,.13,2.24,12.91,12.91,0,0,1-1.46,6.14,15.88,15.88,0,0,1-3.8,4.74A17.07,17.07,0,0,1,16,45.29a18,18,0,0,1-6.1,1.07,12.72,12.72,0,0,1-3.28-.42,7.92,7.92,0,0,1-2.79-1.33,6.7,6.7,0,0,1-1.92-2.27A6.9,6.9,0,0,1,1.22,39.09Z"/><path className="cls-1" d="M31.87,42.08a5.82,5.82,0,0,1,.19-1.59,12.49,12.49,0,0,1,.71-1.79q.45-.65,1.66-2.47L37,32.4q1.33-2,2.53-3.8t1.66-2.5q.58-.84.91-.91a7.64,7.64,0,0,1,1.23-.06c.39,0,.81,0,1.27.06s.75.35.88.91A18.24,18.24,0,0,1,43,30.29q-1.53,2-3,3.93a31.86,31.86,0,0,0-2.56,4,9.08,9.08,0,0,0-1.1,4.38,7.85,7.85,0,0,1,.81.06l1.2.13,1.2.13a2.46,2.46,0,0,0,.81,0q.39-.06,1.33-.29l2-.49,2-.52q1-.26,1.36-.39a4.19,4.19,0,0,0,0,.42c0,.19,0,.34,0,.42A2.53,2.53,0,0,1,46,44.22a9.81,9.81,0,0,1-2.79,1.33A16.57,16.57,0,0,1,40,46.2q-1.66.16-2.56.16a8.92,8.92,0,0,1-2-.23,5.25,5.25,0,0,1-1.79-.75,4.12,4.12,0,0,1-1.27-1.33A3.78,3.78,0,0,1,31.87,42.08ZM50.77,4q.84,0,1.56.06a3.48,3.48,0,0,1,1.23.32,2.1,2.1,0,0,1,.84.78,2.69,2.69,0,0,1,.32,1.43v.84a3.88,3.88,0,0,1-.1.88,1.59,1.59,0,0,1-.36.71,1.08,1.08,0,0,1-.84.29A1.82,1.82,0,0,1,52,8.7a4.12,4.12,0,0,1-.81-1.53,8.29,8.29,0,0,1-.32-1.79Q50.76,4.48,50.77,4Z"/><path className="cls-1" d="M63.36,22.79a7.12,7.12,0,0,0-3.44,1.85,25,25,0,0,0-3.73,4,26.34,26.34,0,0,0-3,5.13,12.59,12.59,0,0,0-1.23,5.1,3.12,3.12,0,0,0,1,2.63,4.51,4.51,0,0,0,2.79.75,14.86,14.86,0,0,0,3.8-.49q1.85-.49,3.7-1t3.7-1a14.86,14.86,0,0,1,3.8-.49,4,4,0,0,1-.26,1.53,6.79,6.79,0,0,1-.78,1.33q-3.38,1.62-6.95,3a21.2,21.2,0,0,1-7.47,1.33,8,8,0,0,1-2.47-.42,8.91,8.91,0,0,1-2.4-1.2,7.26,7.26,0,0,1-1.85-1.88,4.3,4.3,0,0,1-.75-2.47,19.3,19.3,0,0,1,.84-5.68,23.12,23.12,0,0,1,5.94-9.77,27.22,27.22,0,0,1,4.58-3.64v-.06a19.54,19.54,0,0,1,2.24-1.14,7.67,7.67,0,0,1,2.37-.65A2.45,2.45,0,0,1,65.6,20a2.89,2.89,0,0,1,.75,2.31q0,.78-.13,2a2.69,2.69,0,0,1-.71,1.79,5.79,5.79,0,0,1-1.36.58,4.94,4.94,0,0,1-.78.19Z"/><path className="cls-1" d="M79.27,37.08A10.17,10.17,0,0,0,78,39.42a21.7,21.7,0,0,1-1.17,2.47,7,7,0,0,1-1.56,1.95,3.57,3.57,0,0,1-2.4.78,2.51,2.51,0,0,1-1.69-.42,2.37,2.37,0,0,1-.45-1.72A8.25,8.25,0,0,1,71.58,39a25.08,25.08,0,0,1,2.11-3.67q1.23-1.79,2.53-3.34t2.14-2.53l12-26A5.35,5.35,0,0,1,92,1.43a3.92,3.92,0,0,1,2.5-1V2.6L87.65,18.51v1.56a6,6,0,0,0,2.08-.36q1-.36,1.95-.81a19.32,19.32,0,0,1,2-.81,7.48,7.48,0,0,1,2.37-.36,2.45,2.45,0,0,1,1.23,1.92,5,5,0,0,1-.58,2.47A13.51,13.51,0,0,1,95,24.81q-1.14,1.36-2.37,2.63t-2.37,2.24l-1.72,1.49a6.48,6.48,0,0,1-1.79,1.07q-.81.29-1.4.55a1.82,1.82,0,0,0-.88.78,3.82,3.82,0,0,0-.29,1.75,4.38,4.38,0,0,0,1,3,6.56,6.56,0,0,0,2.56,1.79,13.45,13.45,0,0,0,3.57.88,34.92,34.92,0,0,0,4,.23q2,0,3.83-.16t3.12-.36l.78.78a7.32,7.32,0,0,1-2.18,1.85,21.77,21.77,0,0,1-3.18,1.56,27.12,27.12,0,0,1-3.41,1.1,12,12,0,0,1-2.79.42,12.1,12.1,0,0,1-4-.68,12.9,12.9,0,0,1-3.57-1.92,13.08,13.08,0,0,1-2.82-3A11.47,11.47,0,0,1,79.27,37.08ZM92.06,22.47a5.44,5.44,0,0,0-1.75.45A14.79,14.79,0,0,0,88,24.09a10.81,10.81,0,0,0-2,1.56,2.43,2.43,0,0,0-.84,1.69v.45l1.59-.65A19.26,19.26,0,0,0,89,26a9.82,9.82,0,0,0,2.11-1.59A2.73,2.73,0,0,0,92.06,22.47Z"/><path className="cls-1" d="M101.8,42.08A22.11,22.11,0,0,1,104,35.26a25.22,25.22,0,0,1,3.73-5.42,20.86,20.86,0,0,1,4.58-3.8,14.23,14.23,0,0,1,4.81-1.92,8.72,8.72,0,0,1,4.32.23,6,6,0,0,1,3.21,2.6,6.3,6.3,0,0,1-.68,2.86q-.68,1.36-1.49,2.73T121,35.32a7,7,0,0,0-.68,3.05,4.42,4.42,0,0,0,.75,2.69,3.07,3.07,0,0,0,2.63,1,10.09,10.09,0,0,0,3-.45,9.92,9.92,0,0,1,3-.45l.88,0,.81,0a7,7,0,0,1-2,1.88,16.28,16.28,0,0,1-2.6,1.33,14,14,0,0,1-2.82.81,15.42,15.42,0,0,1-2.7.26,4.1,4.1,0,0,1-2.08-.52,5.19,5.19,0,0,1-1.56-1.36,6.45,6.45,0,0,1-1-1.92,6.64,6.64,0,0,1-.36-2.11q-1,1.11-2.11,2.31a20.47,20.47,0,0,1-2.4,2.18A13.31,13.31,0,0,1,109,45.71a7.36,7.36,0,0,1-3,.65A3.94,3.94,0,0,1,103,45.1,4.17,4.17,0,0,1,101.8,42.08Zm4.29-2q0,.52,0,1.17t.81.84a12.55,12.55,0,0,0,3.7-1.72,24.08,24.08,0,0,0,3.9-3.12,19.49,19.49,0,0,0,3.05-3.83,7.63,7.63,0,0,0,1.23-3.93c0-.09,0-.23,0-.42a4.09,4.09,0,0,1,0-.42,12,12,0,0,0-4.48.91,14.15,14.15,0,0,0-4.09,2.5,13.37,13.37,0,0,0-3,3.67A8.94,8.94,0,0,0,106.09,40.06Z"/><path className="cls-1" d="M129.47,39.87a12.33,12.33,0,0,1,1.85-6.36A21.54,21.54,0,0,1,136,28a24.78,24.78,0,0,1,6.3-3.86,16.78,16.78,0,0,1,6.56-1.46,6.09,6.09,0,0,1,2.34.45,6.07,6.07,0,0,0,2.34.45h.39q.32-.71,1.27-2.53t2-3.83q1.07-2,2-3.8t1.43-2.5q.71-1.23,1.95-3.08t2.44-3.6q1.2-1.75,2.11-3a5.24,5.24,0,0,1,1-1.23l2.53,2.53a6.67,6.67,0,0,1-.49,1.17L169,6.4q-.78,1.66-1.79,3.67t-2,4q-1,2-2,3.86T161.54,21q-2,3.05-4.06,6.2a43.25,43.25,0,0,0-3.25,5.84,11.39,11.39,0,0,0-1.17,4.71,2.88,2.88,0,0,0,2.18,2.79,26.06,26.06,0,0,1,5.84-.58,3.86,3.86,0,0,1,2.44.68q.49.55-.16,1.3a5.48,5.48,0,0,1-2,1.33,11.49,11.49,0,0,1-3.21.78,8.73,8.73,0,0,1-3.64-.39,7.93,7.93,0,0,1-3.31-2.14,10.13,10.13,0,0,1-2.27-4.48l-10.06,8.38q-1,.26-1.66.39l-1.4.26-1.17.19h-.39a4.77,4.77,0,0,1-2.44-.55,4,4,0,0,1-1.46-1.43,5.42,5.42,0,0,1-.68-2A17.42,17.42,0,0,1,129.47,39.87Zm4.22-.71c0,.26,0,.56,0,.91a3.27,3.27,0,0,0,.06.94,1.66,1.66,0,0,0,.39.75,1.12,1.12,0,0,0,.88.32,4.67,4.67,0,0,0,2-.62A18.23,18.23,0,0,0,139.4,40q1.17-.84,2.18-1.69L143,37.08l1.69-1.66q1.23-1.2,2.56-2.56t2.5-2.53q1.17-1.17,1.62-1.69v-.19a.25.25,0,0,1,0-.16.13.13,0,0,0,0-.1,1.07,1.07,0,0,0-.36-.88,1.9,1.9,0,0,0-.84-.39,3.91,3.91,0,0,0-1-.06l-.84,0a14.05,14.05,0,0,0-4.93,1,18.63,18.63,0,0,0-4.77,2.63,15,15,0,0,0-3.6,3.9A8.72,8.72,0,0,0,133.69,39.16Z"/><path className="cls-1" d="M163.49,42.92a10.37,10.37,0,0,1-1-4.84,12.6,12.6,0,0,1,1.07-4.48,14.86,14.86,0,0,1,2.47-3.83,20.18,20.18,0,0,1,3.28-3,14.59,14.59,0,0,1,3.54-1.92,7.75,7.75,0,0,1,3.15-.55,3,3,0,0,1,2.14,1,3.46,3.46,0,0,1,.52,2.79,6.63,6.63,0,0,1-1.59,4.42,23.46,23.46,0,0,1-3.51,3.38q-1.92,1.49-3.51,2.69t-1.59,2.24a1,1,0,0,0,.68.91,6.19,6.19,0,0,0,1.59.49,17.09,17.09,0,0,0,1.82.23q.91.07,1.3.13A89.36,89.36,0,0,1,183,41a9.86,9.86,0,0,1,3.83.06q.78.36-.29,1.1a15,15,0,0,1-3.28,1.56,40.05,40.05,0,0,1-5.13,1.46,31.53,31.53,0,0,1-5.78.75,18.07,18.07,0,0,1-5.29-.55A5.87,5.87,0,0,1,163.49,42.92Zm11.36-14.81a4.66,4.66,0,0,0-2.47.71,9.19,9.19,0,0,0-2.11,1.79A11.39,11.39,0,0,0,168.69,33a13.74,13.74,0,0,0-1,2.37.48.48,0,0,0,.19.06h.2a3.89,3.89,0,0,0,2.08-.78,12.09,12.09,0,0,0,2.21-1.92,13.7,13.7,0,0,0,1.75-2.37A4.52,4.52,0,0,0,174.86,28.12Z"/><path className="cls-1" d="M185.12,40.39q0-.45.1-1.4t.23-1.85q.13-.91.26-1.66a3,3,0,0,1,.26-.94l11.82-23.64a9.47,9.47,0,0,1,1-1.46q.75-.94,1.62-1.95t1.75-1.88q.88-.88,1.46-1.4a1.06,1.06,0,0,1,.65.45,2.06,2.06,0,0,1,.26.75,3.52,3.52,0,0,1,0,.81c0,.26,0,.48,0,.65v.91c0,.39,0,.58-.07.58a29.45,29.45,0,0,1-2,4.16q-1.36,2.4-3.05,5.13t-3.47,5.68q-1.79,3-3.25,5.84a47.33,47.33,0,0,0-2.4,5.55,14.73,14.73,0,0,0-.94,4.87,2.5,2.5,0,0,0,.68,1.85,9.59,9.59,0,0,0,1.46,1.2q.78.52,1.46,1a1.7,1.7,0,0,1,.68,1.43,1,1,0,0,1-.52.88,2.48,2.48,0,0,1-1.23.29,7.62,7.62,0,0,1-4.74-1.53A5.17,5.17,0,0,1,185.12,40.39Z"/><path className="cls-1" d="M201.61,42.08a5.82,5.82,0,0,1,.2-1.59,12.54,12.54,0,0,1,.71-1.79q.45-.65,1.66-2.47l2.53-3.83q1.33-2,2.53-3.8t1.66-2.5q.58-.84.91-.91a7.64,7.64,0,0,1,1.23-.06c.39,0,.81,0,1.27.06s.75.35.88.91a18.27,18.27,0,0,1-2.44,4.19q-1.53,2-3,3.93a31.91,31.91,0,0,0-2.56,4,9.08,9.08,0,0,0-1.1,4.38,7.86,7.86,0,0,1,.81.06l1.2.13,1.2.13a2.46,2.46,0,0,0,.81,0q.39-.06,1.33-.29l2-.49,2-.52q1-.26,1.36-.39a4.12,4.12,0,0,0,0,.42c0,.19,0,.34,0,.42a2.53,2.53,0,0,1-1.2,2.14,9.82,9.82,0,0,1-2.79,1.33,16.59,16.59,0,0,1-3.25.65q-1.66.16-2.57.16a8.92,8.92,0,0,1-2-.23,5.26,5.26,0,0,1-1.79-.75,4.13,4.13,0,0,1-1.27-1.33A3.79,3.79,0,0,1,201.61,42.08ZM220.5,4q.84,0,1.56.06a3.47,3.47,0,0,1,1.23.32,2.1,2.1,0,0,1,.84.78,2.69,2.69,0,0,1,.32,1.43v.84a3.85,3.85,0,0,1-.1.88,1.6,1.6,0,0,1-.36.71,1.08,1.08,0,0,1-.84.29,1.82,1.82,0,0,1-1.46-.65,4.13,4.13,0,0,1-.81-1.53,8.23,8.23,0,0,1-.32-1.79Q220.5,4.48,220.5,4Z"/><path className="cls-1" d="M233.1,22.79a7.12,7.12,0,0,0-3.44,1.85,25,25,0,0,0-3.73,4,26.41,26.41,0,0,0-3,5.13,12.59,12.59,0,0,0-1.23,5.1,3.12,3.12,0,0,0,1,2.63,4.51,4.51,0,0,0,2.79.75,14.86,14.86,0,0,0,3.8-.49q1.85-.49,3.7-1t3.7-1a14.86,14.86,0,0,1,3.8-.49,4,4,0,0,1-.26,1.53,6.84,6.84,0,0,1-.78,1.33q-3.38,1.62-6.95,3A21.21,21.21,0,0,1,225,46.36a8,8,0,0,1-2.47-.42,8.9,8.9,0,0,1-2.4-1.2,7.26,7.26,0,0,1-1.85-1.88,4.3,4.3,0,0,1-.75-2.47,19.3,19.3,0,0,1,.84-5.68,23,23,0,0,1,2.34-5.23,23.29,23.29,0,0,1,3.6-4.55,27.24,27.24,0,0,1,4.58-3.64v-.06a19.54,19.54,0,0,1,2.24-1.14,7.68,7.68,0,0,1,2.37-.65,2.45,2.45,0,0,1,1.85.52,2.89,2.89,0,0,1,.75,2.31q0,.78-.13,2a2.69,2.69,0,0,1-.71,1.79,5.8,5.8,0,0,1-1.36.58,4.94,4.94,0,0,1-.78.19Z"/><path className="cls-1" d="M7.16,57.3a49.63,49.63,0,0,1,8.59-.78h5.13a6.71,6.71,0,0,1,2.92.66A2,2,0,0,1,25.16,59l1.31,37-4.17,7.39L9.18,104.7l-1,36.49H0L2.74,59.27Q2.74,58.08,7.16,57.3Zm10.49,38a.63.63,0,0,0,.72-.71V63.68l-1.79-1.79-6.68.83V95.64Z"/><path className="cls-1" d="M45.2,141.2q-4.89,0-6.8-1.55t-1.91-5.13V59.39a22.13,22.13,0,0,1,6.86-2.15,70.52,70.52,0,0,1,11.27-.72,8.19,8.19,0,0,1,5.25,1.61,5,5,0,0,1,2,4.11l-.83,78.95Zm7.39-6.8,1.07-1.07.72-68.09q0-.59-1.07-.71l-7.39-.36-1.07.72-.72,68.81Z"/><path className="cls-1" d="M82.16,91l15.15,3.94V134a6.66,6.66,0,0,1-2.5,4.83,7.55,7.55,0,0,1-5.13,2.33H72.62v-8.11H89.2l-2.86-32L72.62,97.55V62.13a6,6,0,0,1,1.49-3.76,4.23,4.23,0,0,1,3.28-1.85H97.31v5.84L80.38,64.63Z"/><path className="cls-1" d="M131.3,58.19l.6,7.51H121.4V141.2H111.26l2.38-73.34L105.06,65l1.55-8.47Z"/><path className="cls-1" d="M168.38,138.81h-28l2.74-82.29h24.21v9.3H150.26V90.39h13v6l-12.4,2.15v30.41l16.1-2.15Z"/><path className="cls-1" d="M185.44,141.2h-6.92V61.41L175.89,60V56.52h18.6a15.15,15.15,0,0,1,7.57,1.73q3,1.73,3.16,4.11L204,95.4a8.67,8.67,0,0,1-1.61,4.35q-1.61,2.56-5.9,3.76l7,13.12,2.5,24.57-8.71.36-1.91-23.37-6.56-14.07h-3.46Zm2.09-45a1.69,1.69,0,0,0,1,.3h6.32a.63.63,0,0,0,.71-.72l.72-30.17a3.41,3.41,0,0,0-1.49-2.8q-1.49-1.13-6.26-1.13-1.43.48-1.43,1.43V95.52A.82.82,0,0,0,187.52,96.18Z"/><path className="cls-1" d="M234.68,73.34,232.3,64l-7.16.83-1.79,26.47,17.29,3.1L239,134q0,2.39-3.1,4.77a9.67,9.67,0,0,1-5.72,2.38h-14l-1.07-20.39h7L222,131.18l8.35,1.91,1.91-31.72-16.1-3.58V59.39L221,56.52h18.72l-.6,16.81Z"/></g></svg></Link></h1>
                            <ul>
                                <li><Link to="/about" className="link">À propos</Link></li>
                                <li><Link to="/shop/all" className="link">Boutique</Link></li>
                                <li><Link to="/contact" className="link">Contact</Link></li>
                                <li><Link to={'#'} className="snipcart-checkout"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 475.084 475.085"><defs><style>{'.cls-1{fill:#2b2b2b;}'}</style></defs><title>Icone Panier d'achat</title>
                                    <g>
                                        <g>
                                            <path d="M365.446,401.998c0,10.092,3.579,18.702,10.711,25.834c7.132,7.139,15.749,10.711,25.845,10.711    c10.081,0,18.698-3.572,25.83-10.711c7.139-7.132,10.711-15.742,10.711-25.834s-3.568-18.702-10.711-25.841    c-7.132-7.132-15.749-10.704-25.83-10.704c-10.096,0-18.713,3.572-25.845,10.704C369.025,383.296,365.446,391.906,365.446,401.998    z" fill="#2b2b2b"/>
                                            <path d="M469.658,78.51c-3.618-3.617-7.898-5.426-12.848-5.426H113.918c-0.193-1.331-0.621-3.756-1.287-7.277    c-0.666-3.523-1.188-6.329-1.569-8.425c-0.383-2.087-1.093-4.611-2.142-7.561c-1.047-2.952-2.284-5.286-3.711-6.995    c-1.425-1.718-3.328-3.189-5.708-4.43c-2.378-1.233-5.092-1.853-8.136-1.853H18.276c-4.952,0-9.234,1.812-12.85,5.424    C1.809,45.583,0,49.868,0,54.816s1.809,9.231,5.426,12.847c3.619,3.617,7.902,5.424,12.85,5.424h58.237l50.532,234.976    c-0.378,0.76-2.329,4.373-5.852,10.848c-3.521,6.475-6.328,12.135-8.42,16.988c-2.093,4.859-3.14,8.616-3.14,11.279    c0,4.948,1.809,9.232,5.424,12.854c3.621,3.606,7.902,5.421,12.851,5.421h18.272h255.815h18.261c4.948,0,9.232-1.814,12.847-5.421    c3.62-3.621,5.427-7.905,5.427-12.854c0-4.949-1.807-9.233-5.427-12.847c-3.614-3.614-7.898-5.428-12.847-5.428h-262.66    c4.57-9.138,6.854-15.222,6.854-18.268c0-1.909-0.238-4.004-0.715-6.283s-1.047-4.805-1.713-7.569    c-0.667-2.752-1.093-4.799-1.283-6.133l298.077-34.831c4.753-0.575,8.658-2.614,11.703-6.14c3.046-3.518,4.565-7.562,4.565-12.133    V91.363C475.082,86.415,473.278,82.132,469.658,78.51z" fill="#2b2b2b"/>
                                            <path d="M109.632,401.998c0,10.092,3.567,18.702,10.706,25.834c7.141,7.139,15.75,10.711,25.841,10.711    c10.085,0,18.699-3.572,25.835-10.711c7.139-7.132,10.71-15.742,10.71-25.834s-3.568-18.702-10.71-25.841    c-7.137-7.132-15.75-10.704-25.835-10.704c-10.09,0-18.704,3.572-25.841,10.704C113.203,383.296,109.632,391.906,109.632,401.998z    " fill="#2b2b2b"/>
                                        </g>
                                    </g>
                                    </svg></Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="container-nav-mobile">
                        <div className="nav-bar">
                            <div className="logo-mobile"><Link to="/"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240.65 141.55"><title>Sickadelic Posters</title><g id="Logo"><path className="cls-1" d="M1.22,39.09a5.85,5.85,0,0,1,.36-2.14Q1.93,36,3.43,36l.62,0a3.17,3.17,0,0,1,.68.1,7.87,7.87,0,0,0,1,4.58q1,1.53,3.9,1.53a15.27,15.27,0,0,0,4.61-.71,13.51,13.51,0,0,0,4.12-2.11,11,11,0,0,0,3-3.41,9.09,9.09,0,0,0,1.14-4.55,2.37,2.37,0,0,0-1.07-2.21,10.25,10.25,0,0,0-2.37-1,18.74,18.74,0,0,1-2.37-.88,1.74,1.74,0,0,1-1.07-1.72,3.72,3.72,0,0,1,1.82-2.86,21.12,21.12,0,0,1,4.29-2.44,32.19,32.19,0,0,1,4.9-1.69,16.53,16.53,0,0,1,3.73-.62,3.59,3.59,0,0,1-.81,2.66,5.91,5.91,0,0,1-2,1.23q-1.17.45-2.37.88a3.92,3.92,0,0,0-2,1.59,23,23,0,0,1,1.72,1.53A5.62,5.62,0,0,1,26,27.4a5.53,5.53,0,0,1,.52,1.72,16.78,16.78,0,0,1,.13,2.24,12.91,12.91,0,0,1-1.46,6.14,15.88,15.88,0,0,1-3.8,4.74A17.07,17.07,0,0,1,16,45.29a18,18,0,0,1-6.1,1.07,12.72,12.72,0,0,1-3.28-.42,7.92,7.92,0,0,1-2.79-1.33,6.7,6.7,0,0,1-1.92-2.27A6.9,6.9,0,0,1,1.22,39.09Z"/><path className="cls-1" d="M31.87,42.08a5.82,5.82,0,0,1,.19-1.59,12.49,12.49,0,0,1,.71-1.79q.45-.65,1.66-2.47L37,32.4q1.33-2,2.53-3.8t1.66-2.5q.58-.84.91-.91a7.64,7.64,0,0,1,1.23-.06c.39,0,.81,0,1.27.06s.75.35.88.91A18.24,18.24,0,0,1,43,30.29q-1.53,2-3,3.93a31.86,31.86,0,0,0-2.56,4,9.08,9.08,0,0,0-1.1,4.38,7.85,7.85,0,0,1,.81.06l1.2.13,1.2.13a2.46,2.46,0,0,0,.81,0q.39-.06,1.33-.29l2-.49,2-.52q1-.26,1.36-.39a4.19,4.19,0,0,0,0,.42c0,.19,0,.34,0,.42A2.53,2.53,0,0,1,46,44.22a9.81,9.81,0,0,1-2.79,1.33A16.57,16.57,0,0,1,40,46.2q-1.66.16-2.56.16a8.92,8.92,0,0,1-2-.23,5.25,5.25,0,0,1-1.79-.75,4.12,4.12,0,0,1-1.27-1.33A3.78,3.78,0,0,1,31.87,42.08ZM50.77,4q.84,0,1.56.06a3.48,3.48,0,0,1,1.23.32,2.1,2.1,0,0,1,.84.78,2.69,2.69,0,0,1,.32,1.43v.84a3.88,3.88,0,0,1-.1.88,1.59,1.59,0,0,1-.36.71,1.08,1.08,0,0,1-.84.29A1.82,1.82,0,0,1,52,8.7a4.12,4.12,0,0,1-.81-1.53,8.29,8.29,0,0,1-.32-1.79Q50.76,4.48,50.77,4Z"/><path className="cls-1" d="M63.36,22.79a7.12,7.12,0,0,0-3.44,1.85,25,25,0,0,0-3.73,4,26.34,26.34,0,0,0-3,5.13,12.59,12.59,0,0,0-1.23,5.1,3.12,3.12,0,0,0,1,2.63,4.51,4.51,0,0,0,2.79.75,14.86,14.86,0,0,0,3.8-.49q1.85-.49,3.7-1t3.7-1a14.86,14.86,0,0,1,3.8-.49,4,4,0,0,1-.26,1.53,6.79,6.79,0,0,1-.78,1.33q-3.38,1.62-6.95,3a21.2,21.2,0,0,1-7.47,1.33,8,8,0,0,1-2.47-.42,8.91,8.91,0,0,1-2.4-1.2,7.26,7.26,0,0,1-1.85-1.88,4.3,4.3,0,0,1-.75-2.47,19.3,19.3,0,0,1,.84-5.68,23.12,23.12,0,0,1,5.94-9.77,27.22,27.22,0,0,1,4.58-3.64v-.06a19.54,19.54,0,0,1,2.24-1.14,7.67,7.67,0,0,1,2.37-.65A2.45,2.45,0,0,1,65.6,20a2.89,2.89,0,0,1,.75,2.31q0,.78-.13,2a2.69,2.69,0,0,1-.71,1.79,5.79,5.79,0,0,1-1.36.58,4.94,4.94,0,0,1-.78.19Z"/><path className="cls-1" d="M79.27,37.08A10.17,10.17,0,0,0,78,39.42a21.7,21.7,0,0,1-1.17,2.47,7,7,0,0,1-1.56,1.95,3.57,3.57,0,0,1-2.4.78,2.51,2.51,0,0,1-1.69-.42,2.37,2.37,0,0,1-.45-1.72A8.25,8.25,0,0,1,71.58,39a25.08,25.08,0,0,1,2.11-3.67q1.23-1.79,2.53-3.34t2.14-2.53l12-26A5.35,5.35,0,0,1,92,1.43a3.92,3.92,0,0,1,2.5-1V2.6L87.65,18.51v1.56a6,6,0,0,0,2.08-.36q1-.36,1.95-.81a19.32,19.32,0,0,1,2-.81,7.48,7.48,0,0,1,2.37-.36,2.45,2.45,0,0,1,1.23,1.92,5,5,0,0,1-.58,2.47A13.51,13.51,0,0,1,95,24.81q-1.14,1.36-2.37,2.63t-2.37,2.24l-1.72,1.49a6.48,6.48,0,0,1-1.79,1.07q-.81.29-1.4.55a1.82,1.82,0,0,0-.88.78,3.82,3.82,0,0,0-.29,1.75,4.38,4.38,0,0,0,1,3,6.56,6.56,0,0,0,2.56,1.79,13.45,13.45,0,0,0,3.57.88,34.92,34.92,0,0,0,4,.23q2,0,3.83-.16t3.12-.36l.78.78a7.32,7.32,0,0,1-2.18,1.85,21.77,21.77,0,0,1-3.18,1.56,27.12,27.12,0,0,1-3.41,1.1,12,12,0,0,1-2.79.42,12.1,12.1,0,0,1-4-.68,12.9,12.9,0,0,1-3.57-1.92,13.08,13.08,0,0,1-2.82-3A11.47,11.47,0,0,1,79.27,37.08ZM92.06,22.47a5.44,5.44,0,0,0-1.75.45A14.79,14.79,0,0,0,88,24.09a10.81,10.81,0,0,0-2,1.56,2.43,2.43,0,0,0-.84,1.69v.45l1.59-.65A19.26,19.26,0,0,0,89,26a9.82,9.82,0,0,0,2.11-1.59A2.73,2.73,0,0,0,92.06,22.47Z"/><path className="cls-1" d="M101.8,42.08A22.11,22.11,0,0,1,104,35.26a25.22,25.22,0,0,1,3.73-5.42,20.86,20.86,0,0,1,4.58-3.8,14.23,14.23,0,0,1,4.81-1.92,8.72,8.72,0,0,1,4.32.23,6,6,0,0,1,3.21,2.6,6.3,6.3,0,0,1-.68,2.86q-.68,1.36-1.49,2.73T121,35.32a7,7,0,0,0-.68,3.05,4.42,4.42,0,0,0,.75,2.69,3.07,3.07,0,0,0,2.63,1,10.09,10.09,0,0,0,3-.45,9.92,9.92,0,0,1,3-.45l.88,0,.81,0a7,7,0,0,1-2,1.88,16.28,16.28,0,0,1-2.6,1.33,14,14,0,0,1-2.82.81,15.42,15.42,0,0,1-2.7.26,4.1,4.1,0,0,1-2.08-.52,5.19,5.19,0,0,1-1.56-1.36,6.45,6.45,0,0,1-1-1.92,6.64,6.64,0,0,1-.36-2.11q-1,1.11-2.11,2.31a20.47,20.47,0,0,1-2.4,2.18A13.31,13.31,0,0,1,109,45.71a7.36,7.36,0,0,1-3,.65A3.94,3.94,0,0,1,103,45.1,4.17,4.17,0,0,1,101.8,42.08Zm4.29-2q0,.52,0,1.17t.81.84a12.55,12.55,0,0,0,3.7-1.72,24.08,24.08,0,0,0,3.9-3.12,19.49,19.49,0,0,0,3.05-3.83,7.63,7.63,0,0,0,1.23-3.93c0-.09,0-.23,0-.42a4.09,4.09,0,0,1,0-.42,12,12,0,0,0-4.48.91,14.15,14.15,0,0,0-4.09,2.5,13.37,13.37,0,0,0-3,3.67A8.94,8.94,0,0,0,106.09,40.06Z"/><path className="cls-1" d="M129.47,39.87a12.33,12.33,0,0,1,1.85-6.36A21.54,21.54,0,0,1,136,28a24.78,24.78,0,0,1,6.3-3.86,16.78,16.78,0,0,1,6.56-1.46,6.09,6.09,0,0,1,2.34.45,6.07,6.07,0,0,0,2.34.45h.39q.32-.71,1.27-2.53t2-3.83q1.07-2,2-3.8t1.43-2.5q.71-1.23,1.95-3.08t2.44-3.6q1.2-1.75,2.11-3a5.24,5.24,0,0,1,1-1.23l2.53,2.53a6.67,6.67,0,0,1-.49,1.17L169,6.4q-.78,1.66-1.79,3.67t-2,4q-1,2-2,3.86T161.54,21q-2,3.05-4.06,6.2a43.25,43.25,0,0,0-3.25,5.84,11.39,11.39,0,0,0-1.17,4.71,2.88,2.88,0,0,0,2.18,2.79,26.06,26.06,0,0,1,5.84-.58,3.86,3.86,0,0,1,2.44.68q.49.55-.16,1.3a5.48,5.48,0,0,1-2,1.33,11.49,11.49,0,0,1-3.21.78,8.73,8.73,0,0,1-3.64-.39,7.93,7.93,0,0,1-3.31-2.14,10.13,10.13,0,0,1-2.27-4.48l-10.06,8.38q-1,.26-1.66.39l-1.4.26-1.17.19h-.39a4.77,4.77,0,0,1-2.44-.55,4,4,0,0,1-1.46-1.43,5.42,5.42,0,0,1-.68-2A17.42,17.42,0,0,1,129.47,39.87Zm4.22-.71c0,.26,0,.56,0,.91a3.27,3.27,0,0,0,.06.94,1.66,1.66,0,0,0,.39.75,1.12,1.12,0,0,0,.88.32,4.67,4.67,0,0,0,2-.62A18.23,18.23,0,0,0,139.4,40q1.17-.84,2.18-1.69L143,37.08l1.69-1.66q1.23-1.2,2.56-2.56t2.5-2.53q1.17-1.17,1.62-1.69v-.19a.25.25,0,0,1,0-.16.13.13,0,0,0,0-.1,1.07,1.07,0,0,0-.36-.88,1.9,1.9,0,0,0-.84-.39,3.91,3.91,0,0,0-1-.06l-.84,0a14.05,14.05,0,0,0-4.93,1,18.63,18.63,0,0,0-4.77,2.63,15,15,0,0,0-3.6,3.9A8.72,8.72,0,0,0,133.69,39.16Z"/><path className="cls-1" d="M163.49,42.92a10.37,10.37,0,0,1-1-4.84,12.6,12.6,0,0,1,1.07-4.48,14.86,14.86,0,0,1,2.47-3.83,20.18,20.18,0,0,1,3.28-3,14.59,14.59,0,0,1,3.54-1.92,7.75,7.75,0,0,1,3.15-.55,3,3,0,0,1,2.14,1,3.46,3.46,0,0,1,.52,2.79,6.63,6.63,0,0,1-1.59,4.42,23.46,23.46,0,0,1-3.51,3.38q-1.92,1.49-3.51,2.69t-1.59,2.24a1,1,0,0,0,.68.91,6.19,6.19,0,0,0,1.59.49,17.09,17.09,0,0,0,1.82.23q.91.07,1.3.13A89.36,89.36,0,0,1,183,41a9.86,9.86,0,0,1,3.83.06q.78.36-.29,1.1a15,15,0,0,1-3.28,1.56,40.05,40.05,0,0,1-5.13,1.46,31.53,31.53,0,0,1-5.78.75,18.07,18.07,0,0,1-5.29-.55A5.87,5.87,0,0,1,163.49,42.92Zm11.36-14.81a4.66,4.66,0,0,0-2.47.71,9.19,9.19,0,0,0-2.11,1.79A11.39,11.39,0,0,0,168.69,33a13.74,13.74,0,0,0-1,2.37.48.48,0,0,0,.19.06h.2a3.89,3.89,0,0,0,2.08-.78,12.09,12.09,0,0,0,2.21-1.92,13.7,13.7,0,0,0,1.75-2.37A4.52,4.52,0,0,0,174.86,28.12Z"/><path className="cls-1" d="M185.12,40.39q0-.45.1-1.4t.23-1.85q.13-.91.26-1.66a3,3,0,0,1,.26-.94l11.82-23.64a9.47,9.47,0,0,1,1-1.46q.75-.94,1.62-1.95t1.75-1.88q.88-.88,1.46-1.4a1.06,1.06,0,0,1,.65.45,2.06,2.06,0,0,1,.26.75,3.52,3.52,0,0,1,0,.81c0,.26,0,.48,0,.65v.91c0,.39,0,.58-.07.58a29.45,29.45,0,0,1-2,4.16q-1.36,2.4-3.05,5.13t-3.47,5.68q-1.79,3-3.25,5.84a47.33,47.33,0,0,0-2.4,5.55,14.73,14.73,0,0,0-.94,4.87,2.5,2.5,0,0,0,.68,1.85,9.59,9.59,0,0,0,1.46,1.2q.78.52,1.46,1a1.7,1.7,0,0,1,.68,1.43,1,1,0,0,1-.52.88,2.48,2.48,0,0,1-1.23.29,7.62,7.62,0,0,1-4.74-1.53A5.17,5.17,0,0,1,185.12,40.39Z"/><path className="cls-1" d="M201.61,42.08a5.82,5.82,0,0,1,.2-1.59,12.54,12.54,0,0,1,.71-1.79q.45-.65,1.66-2.47l2.53-3.83q1.33-2,2.53-3.8t1.66-2.5q.58-.84.91-.91a7.64,7.64,0,0,1,1.23-.06c.39,0,.81,0,1.27.06s.75.35.88.91a18.27,18.27,0,0,1-2.44,4.19q-1.53,2-3,3.93a31.91,31.91,0,0,0-2.56,4,9.08,9.08,0,0,0-1.1,4.38,7.86,7.86,0,0,1,.81.06l1.2.13,1.2.13a2.46,2.46,0,0,0,.81,0q.39-.06,1.33-.29l2-.49,2-.52q1-.26,1.36-.39a4.12,4.12,0,0,0,0,.42c0,.19,0,.34,0,.42a2.53,2.53,0,0,1-1.2,2.14,9.82,9.82,0,0,1-2.79,1.33,16.59,16.59,0,0,1-3.25.65q-1.66.16-2.57.16a8.92,8.92,0,0,1-2-.23,5.26,5.26,0,0,1-1.79-.75,4.13,4.13,0,0,1-1.27-1.33A3.79,3.79,0,0,1,201.61,42.08ZM220.5,4q.84,0,1.56.06a3.47,3.47,0,0,1,1.23.32,2.1,2.1,0,0,1,.84.78,2.69,2.69,0,0,1,.32,1.43v.84a3.85,3.85,0,0,1-.1.88,1.6,1.6,0,0,1-.36.71,1.08,1.08,0,0,1-.84.29,1.82,1.82,0,0,1-1.46-.65,4.13,4.13,0,0,1-.81-1.53,8.23,8.23,0,0,1-.32-1.79Q220.5,4.48,220.5,4Z"/><path className="cls-1" d="M233.1,22.79a7.12,7.12,0,0,0-3.44,1.85,25,25,0,0,0-3.73,4,26.41,26.41,0,0,0-3,5.13,12.59,12.59,0,0,0-1.23,5.1,3.12,3.12,0,0,0,1,2.63,4.51,4.51,0,0,0,2.79.75,14.86,14.86,0,0,0,3.8-.49q1.85-.49,3.7-1t3.7-1a14.86,14.86,0,0,1,3.8-.49,4,4,0,0,1-.26,1.53,6.84,6.84,0,0,1-.78,1.33q-3.38,1.62-6.95,3A21.21,21.21,0,0,1,225,46.36a8,8,0,0,1-2.47-.42,8.9,8.9,0,0,1-2.4-1.2,7.26,7.26,0,0,1-1.85-1.88,4.3,4.3,0,0,1-.75-2.47,19.3,19.3,0,0,1,.84-5.68,23,23,0,0,1,2.34-5.23,23.29,23.29,0,0,1,3.6-4.55,27.24,27.24,0,0,1,4.58-3.64v-.06a19.54,19.54,0,0,1,2.24-1.14,7.68,7.68,0,0,1,2.37-.65,2.45,2.45,0,0,1,1.85.52,2.89,2.89,0,0,1,.75,2.31q0,.78-.13,2a2.69,2.69,0,0,1-.71,1.79,5.8,5.8,0,0,1-1.36.58,4.94,4.94,0,0,1-.78.19Z"/><path className="cls-1" d="M7.16,57.3a49.63,49.63,0,0,1,8.59-.78h5.13a6.71,6.71,0,0,1,2.92.66A2,2,0,0,1,25.16,59l1.31,37-4.17,7.39L9.18,104.7l-1,36.49H0L2.74,59.27Q2.74,58.08,7.16,57.3Zm10.49,38a.63.63,0,0,0,.72-.71V63.68l-1.79-1.79-6.68.83V95.64Z"/><path className="cls-1" d="M45.2,141.2q-4.89,0-6.8-1.55t-1.91-5.13V59.39a22.13,22.13,0,0,1,6.86-2.15,70.52,70.52,0,0,1,11.27-.72,8.19,8.19,0,0,1,5.25,1.61,5,5,0,0,1,2,4.11l-.83,78.95Zm7.39-6.8,1.07-1.07.72-68.09q0-.59-1.07-.71l-7.39-.36-1.07.72-.72,68.81Z"/><path className="cls-1" d="M82.16,91l15.15,3.94V134a6.66,6.66,0,0,1-2.5,4.83,7.55,7.55,0,0,1-5.13,2.33H72.62v-8.11H89.2l-2.86-32L72.62,97.55V62.13a6,6,0,0,1,1.49-3.76,4.23,4.23,0,0,1,3.28-1.85H97.31v5.84L80.38,64.63Z"/><path className="cls-1" d="M131.3,58.19l.6,7.51H121.4V141.2H111.26l2.38-73.34L105.06,65l1.55-8.47Z"/><path className="cls-1" d="M168.38,138.81h-28l2.74-82.29h24.21v9.3H150.26V90.39h13v6l-12.4,2.15v30.41l16.1-2.15Z"/><path className="cls-1" d="M185.44,141.2h-6.92V61.41L175.89,60V56.52h18.6a15.15,15.15,0,0,1,7.57,1.73q3,1.73,3.16,4.11L204,95.4a8.67,8.67,0,0,1-1.61,4.35q-1.61,2.56-5.9,3.76l7,13.12,2.5,24.57-8.71.36-1.91-23.37-6.56-14.07h-3.46Zm2.09-45a1.69,1.69,0,0,0,1,.3h6.32a.63.63,0,0,0,.71-.72l.72-30.17a3.41,3.41,0,0,0-1.49-2.8q-1.49-1.13-6.26-1.13-1.43.48-1.43,1.43V95.52A.82.82,0,0,0,187.52,96.18Z"/><path className="cls-1" d="M234.68,73.34,232.3,64l-7.16.83-1.79,26.47,17.29,3.1L239,134q0,2.39-3.1,4.77a9.67,9.67,0,0,1-5.72,2.38h-14l-1.07-20.39h7L222,131.18l8.35,1.91,1.91-31.72-16.1-3.58V59.39L221,56.52h18.72l-.6,16.81Z"/></g></svg></Link></div>
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
                                <li><Link to="/about" className="link">À propos</Link></li>
                                <li><Link to="/shop/all" className="link">Boutique</Link></li>
                                <li><Link to="/contact" className="link">Contact</Link></li>
                                <li><Link to={'#'} className="snipcart-checkout"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 475.084 475.085"><defs><style>{'.cls-1{fill:#2b2b2b;}'}</style></defs><title>Icone Panier d'achat</title>
                                    <g>
                                        <g>
                                            <path d="M365.446,401.998c0,10.092,3.579,18.702,10.711,25.834c7.132,7.139,15.749,10.711,25.845,10.711    c10.081,0,18.698-3.572,25.83-10.711c7.139-7.132,10.711-15.742,10.711-25.834s-3.568-18.702-10.711-25.841    c-7.132-7.132-15.749-10.704-25.83-10.704c-10.096,0-18.713,3.572-25.845,10.704C369.025,383.296,365.446,391.906,365.446,401.998    z" fill="#2b2b2b"/>
                                            <path d="M469.658,78.51c-3.618-3.617-7.898-5.426-12.848-5.426H113.918c-0.193-1.331-0.621-3.756-1.287-7.277    c-0.666-3.523-1.188-6.329-1.569-8.425c-0.383-2.087-1.093-4.611-2.142-7.561c-1.047-2.952-2.284-5.286-3.711-6.995    c-1.425-1.718-3.328-3.189-5.708-4.43c-2.378-1.233-5.092-1.853-8.136-1.853H18.276c-4.952,0-9.234,1.812-12.85,5.424    C1.809,45.583,0,49.868,0,54.816s1.809,9.231,5.426,12.847c3.619,3.617,7.902,5.424,12.85,5.424h58.237l50.532,234.976    c-0.378,0.76-2.329,4.373-5.852,10.848c-3.521,6.475-6.328,12.135-8.42,16.988c-2.093,4.859-3.14,8.616-3.14,11.279    c0,4.948,1.809,9.232,5.424,12.854c3.621,3.606,7.902,5.421,12.851,5.421h18.272h255.815h18.261c4.948,0,9.232-1.814,12.847-5.421    c3.62-3.621,5.427-7.905,5.427-12.854c0-4.949-1.807-9.233-5.427-12.847c-3.614-3.614-7.898-5.428-12.847-5.428h-262.66    c4.57-9.138,6.854-15.222,6.854-18.268c0-1.909-0.238-4.004-0.715-6.283s-1.047-4.805-1.713-7.569    c-0.667-2.752-1.093-4.799-1.283-6.133l298.077-34.831c4.753-0.575,8.658-2.614,11.703-6.14c3.046-3.518,4.565-7.562,4.565-12.133    V91.363C475.082,86.415,473.278,82.132,469.658,78.51z" fill="#2b2b2b"/>
                                            <path d="M109.632,401.998c0,10.092,3.567,18.702,10.706,25.834c7.141,7.139,15.75,10.711,25.841,10.711    c10.085,0,18.699-3.572,25.835-10.711c7.139-7.132,10.71-15.742,10.71-25.834s-3.568-18.702-10.71-25.841    c-7.137-7.132-15.75-10.704-25.835-10.704c-10.09,0-18.704,3.572-25.841,10.704C113.203,383.296,109.632,391.906,109.632,401.998z    " fill="#2b2b2b"/>
                                        </g>
                                    </g>
                                    </svg></Link></li>
                            </ul>
                            <ul>
                                <li><Link to={'#'} className="snipcart-user-profile"><span>Mon Compte</span></Link></li>
                            </ul>                            
                        </div>
                        <div className="voile"></div>
                    </div>
                </nav>
            </header>
            <main className="container-page">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/shop/:categorie" component={Shop} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />                
                    <Route path="/product/:article" component={Product} />
                    <Route path="*" component={notFound} status={404}/>
                </Switch>
            </main>
        </div>                        
    </Router>
);

const Footer = () => (
    <footer>
        <div className="rappel-nav">
            <a href={'https://www.facebook.com/sickadelicposters/'} target="_blank"><i className="fa fa-facebook-official fa-4x" aria-hidden="true"></i></a>
            <a href={'https://www.instagram.com/sickadelic_posters/'} target="_blank"><i className="fa fa-instagram fa-4x" aria-hidden="true"></i></a>
        </div>
        <div className="small">
            <p>Copyright &copy; gabrielbaril.ca</p>
        </div>
    </footer>
);

class App extends React.Component {

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
