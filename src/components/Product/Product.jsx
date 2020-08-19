import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';

const Product = props => {
    return (
        <article className="product-card">
            <Link to={`/product/${props.item.id}`}>
                <img src={props.item.photo} alt={props.item.title}/>
                <h4 className="product-card-title">{props.item.title}</h4>
                <p className="product-card-price">{props.item.price}</p>
    <small className="product-card-payment">{props.item.installments}x de R$ 129,90 sem juros</small>
            </Link>
        </article>
    )
}

export default Product;