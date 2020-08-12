import React, { Component } from 'react';
import Title from '../Title';
import './style.scss';
import Product from '../Product';

class ProductList extends Component {
    render() {
        return (
            <section className="product-list">
                <div className="container">
                    <Title>{this.props.title}</Title>

                    <article className="product-list-items">
                        <Product/>
                        <Product/>
                        <Product/>
                        <Product/>
                    </article>
                </div>
            </section>
        )
    }
}

export default ProductList;