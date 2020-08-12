import React, {Component, Fragment} from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import imgBanner from '../assets/images/banner.jpg';
import ProductList from '../components/ProductList';
import Footer from "../components/Footer";

class Home extends Component {
    render() {
        return (
            <Fragment>
                <Header/>
                <Banner img={imgBanner} alt="Banner Promocional" />
                <ProductList title="Destaques"/>
                <ProductList title="Melhores Ofertas"/>
                <Footer />
            </Fragment>
        );
    }
}

export default Home;