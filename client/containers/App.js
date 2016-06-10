import React, { Component, PropTypes } from 'react';
import Footer from '../components/Footer';

export default class App extends Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        {children}
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node,
};
