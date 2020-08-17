import React, { Component, Fragment } from 'react';
import Product from '../components/Product';
import Header from '../components/Header';
import Banner from '../components/Banner';
import imgBanner from '../assets/images/banner-page.jpg';
import ProductDetail from '../components/ProductDetail';


class ProductPage extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <Banner img={imgBanner} alt="Banner Promocional" />
                <ProductDetail />
            </Fragment>
        )
    }
}

export default ProductPage;