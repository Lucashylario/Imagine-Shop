import React from 'react';
import product from '../../assets/images/galaxyj8.jpg';
import './style.scss';
import { Link } from 'react-router-dom';

const Product = props => {
    return (
        <article className="product-card">
            <Link to="/product/">
                <img src={product} alt="Produto"/>
                <h4 className="product-card-title">Smartphone Samsung Galaxy J8  64GB Dual Chip Android 8.0</h4>
                <p className="product-card-price">R$ 1.299,00</p>
                <small className="product-card-payment">10x de R$ 129,90 sem juros</small>
            </Link>
        </article>
    )
}

export default Product;