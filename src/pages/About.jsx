import React, { Component, Fragment } from 'react';
import Title from '../components/Title';
import Banner from '../components/Banner';
import imgBanner from '../assets/images/banner-page.jpg';

class About extends Component {
    render() {
        return (
            <Fragment>
                
                <div className="container">
                    <Banner img={imgBanner} alt="Banner Promocional" style={{marginBottom: 30}} />
                    <Title>Imagine Shop</Title>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem dolore ipsum 
                        expedita nihil animi exercitationem qui sunt dolor molestiae quos eos, 
                        nesciunt vitae. Distinctio iure magnam in, laudantium voluptates itaque!
                    </p>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid expedita suscipit 
                        voluptatibus vero natus magnam autem repellendus ipsum. Eligendi accusantium doloremque 
                        omnis facilis ipsam quidem enim eum eaque neque mollitia!
                    </p>

                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        Consequatur unde ut temporibus assumenda, debitis quo magni, 
                        accusamus quibusdam nemo quae dolore error soluta possimus. 
                        Aspernatur totam ad voluptatum sint? Nihil?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid expedita suscipit 
                        voluptatibus vero natus magnam autem repellendus ipsum. Eligendi accusantium doloremque 
                        omnis facilis ipsam quidem enim eum eaque neque mollitia!
                    </p>
                </div>
            </Fragment>
        )
    }
}

export default About;