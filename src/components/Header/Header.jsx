import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../assets/images/logo.png';
import './style.scss';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header-logo">
                    <img src={logo} alt="Logo"/>
                </div>

                <nav className="header-links">
                    <ul className="header-menu">
                        <li><a href=" # "> Home </a></li>
                        <li><a href=" # "> Sobre </a></li>
                        <li><a href=" # "> Produtos </a></li>
                    </ul>

                    <div className="header-cart">
                        <FontAwesomeIcon className="header-cart-icon" icon="shopping-cart" />
                        <span className="header-cart-count">3</span>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;