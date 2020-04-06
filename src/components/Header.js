import React from 'react';
import './header.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

function displaySubmenu() {
    const allSubMenu = [];
    let subMenu = document.getElementsByClassName("submenu");
    for (let i = 0; i < subMenu.length; i++) {
        allSubMenu.push(subMenu[i]);
        allSubMenu[i].classList.toggle('visible');

    }
}

function Header(props) {
    return (
        <div className="main-header">
            <nav>
                <ul>
                    <a href="#">
                        <li className="main-header-element">
                            <span className="arrow left-arrow"></span>
                        </li>
                    </a>
                    <a href="#">
                        <li className="main-header-element">
                            <span className="arrow right-arrow"></span>
                        </li>
                    </a>
                    <a href="#">
                        <li className="main-header-element">
                            Magasin
                        </li>
                    </a>
                    <a href="/" className="active">
                        <li className="main-header-element">
                            Bibliothèque
                        </li>
                    </a>
                    <a href="#">
                        <li className="main-header-element">
                            Communauté
                        </li>
                    </a>
                    <a href="#">
                        <li className="main-header-element">
                            Gottfrieden
                        </li>
                    </a>
                </ul>
            </nav>
        </div>   
    )
}
    
export default Header;