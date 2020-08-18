import React, { Fragment } from 'react';
import product from '../../assets/images/notebook.jpg';
import './style.scss';
import Button from '../../components/Button';
import Title from '../../components/Title';
import ProductList from '../../components/ProductList';

const ProductDetail = props => {
    return (
        <Fragment>
            <section className="product-detail">
                    <div className="container">

                        <div className="product-detail-cols">
                            <div className="product-detail-photo">
                                <img src={product} alt="Foto do produto"/>
                            </div>

                            <div className="product-detail-info">
                                <h1 className="product-detail-title">Notebook Samsung Expert VF3BR Intel  Core i7 8GB</h1>
                                <p className="product-detail-price">R$ 2.699,99</p>
                                <small className="product-detail-payment"> 10x R$ 299,99 sem juros</small>
                                <Button icon="shopping-cart">Adicionar ao carrinho</Button>
                                <p className="product-detail-overview">
                                O Samsung Expert é o notebook voltado para pessoas dinâmicas que buscam um 
                                computador que ofereça alto desempenho aliado a um design moderno e elegante, 
                                e que conta com avançadas características de segurança. A placa de vídeo NVIDIA 
                                GeForce oferece alto desempenho gráfico para aplicações como jogos e softwares 3D.
                                dades.
                                </p>
                            </div>
                        </div>

                        <section className="product-detail-description">
                            <Title>Informações do Produto</Title>
                            <p>
                                O Samsung Expert é o notebook voltado para pessoas dinâmicas que buscam 
                                um computador que ofereça alto desempenho aliado a um design moderno e 
                                elegante, e que conta com avançadas características de segurança. 
                                A placa de vídeo NVIDIA GeForce oferece alto desempenho gráfico para 
                                aplicações como jogos e softwares 3D.
                            </p>

                            <p>
                                Imagens Meramente Ilustrativas. <br/>
                                Todas as Informações divulgadas são de responsabilidade do Fabricante/Fornecedor.
                                Verifique com os fabricantes do produto e de seus componentes eventuais limitações 
                                à utilização de todos os recursos e funcionalidades.
                            </p>
                        </section>

                        <ProductList title="Veja também"/>

                    </div>
                </section>
        </Fragment>
    )
}

export default ProductDetail;