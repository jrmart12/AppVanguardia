import React from 'react';
const arrow = {
  color: 'white',
  padding: '3px',
  position: 'absolute',
  left: '30px',
  border: '#555'
  };
const Header = ({ usernameHeader }) => {
  return (
    <div className="header">
    <button type="back"  style={arrow}>
      <span className="fa fa-arrow-left fa-3x" />
    </button>
    <p className="logo">{usernameHeader}</p>
  </div>
);
};

export default Header;