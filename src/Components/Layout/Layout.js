import React, { Component } from 'react';
import Aux from '../../hoc/_Aux';
import Movies from '../../Containers/Movies/Movies';
import Footer from '../Footer/Footer';

class Layout extends Component {
    render() {
        return (
            <Aux>
                <Movies />
                <Footer />
            </Aux>
        )
    }
}

export default Layout;