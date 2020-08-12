import React from 'react';
import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../assets/images/logo.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-logo">
                    <img src={logo} alt="Logo"/>
                </div>
            <div className="footer-social">
                <ul>
                    <li><a href=" #"><FontAwesomeIcon icon={['fab', 'facebook']} /></a></li>
                    <li><a href=" #"><FontAwesomeIcon icon={['fab', 'instagram']} /></a></li>
                    <li><a href=" #"><FontAwesomeIcon icon={['fab', 'youtube']} /></a></li>
                    
                </ul>
            </div>
            </div>
            
            <div className="footer-address">
                <p>Imagine Shop - +55 (48) 3771 - 1703 3771 - 1823 - imagine@imagi</p>
            </div>
        </footer>
    );
}

export default Footer;