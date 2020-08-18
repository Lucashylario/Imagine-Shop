import React, { Component, Fragment } from 'react';
import Banner from '../components/Banner';
import imgBanner from '../assets/images/banner-page.jpg';
import ProductList from '../components/ProductList';

class Products extends Component {
    render() {
        return (
            <Fragment>
                <div className="container">
                    <Banner img={imgBanner} alt="Banner Promocional" style={{marginBottom: 30}} />
                    <ProductList title="Produtos" />
                    <ProductList />
                </div>

            </Fragment>
        )
    }
}

export default Products;