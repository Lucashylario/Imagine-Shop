import React, {Component} from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import Home from "./pages/Home";
import ProductPage from './pages/ProductPage';
import Product from './components/Product';

library.add(fab, faShoppingCart);

class App extends Component {
  render() {
    return (
      <div> {/*className="App"*/}
        <ProductPage />
      </div>
    );
  }
}

export default App;
