import React, { Component } from 'react';
import PropTypes from 'prop-types';
const arrow = {color: 'white',padding: '3px',position: 'absolute',left: '30px',border: '#555'};
class Header extends Component {
  render(){
    const { backHandle } = this.props;
  return (
    
    <div className="header">
    {backHandle && (<button type="back"  style={arrow} onClick={backHandle}><span className="fa fa-arrow-left fa-3x" /> </button>)}
    <p className="logo">{this.props.usernameHeader}</p>
  </div>
);
};
}
Header.propTypes = {
  usernameHeader: PropTypes.string.isRequired,
  backHandle: PropTypes.func
}
export default Header;