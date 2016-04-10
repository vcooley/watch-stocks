var React = require('react');
var Footer = require('../components/Footer');

var MainContainer = React.createClass({
  render: function() {
    return (
      <div className='main-container'>
        {this.props.children}
        <Footer />
      </div>
    )
  }
});

module.exports = MainContainer;
