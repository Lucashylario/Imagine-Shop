import React, {Component, Fragment} from 'react';
import Banner from '../components/Banner';
import imgBanner from '../assets/images/banner.jpg';
import ProductList from '../components/ProductList';

class Home extends Component {
    render() {
        return (
            <Fragment>
                <Banner img={imgBanner} alt="Banner Promocional" />
                <ProductList title="Destaques"/>
                <ProductList title="Melhores Ofertas"/>
            </Fragment>
        )
    }
}

export default Home;