import { Component } from "react";
import { withRouter } from "react-router-dom";
//ScrollToTop serve para que quando for abrir uma nova pagina ela suba no inicio não deixando ela abrir na metade da pag.
class ScrollToTop extends Component {
    componentDidUpdate(prevProps) {
      if (this.props.location.pathname !== prevProps.location.pathname) {
        window.scrollTo(0, 0);
     }
    }
  
    render() {
      return this.props.children;
    }
  }
  
  export default withRouter(ScrollToTop);