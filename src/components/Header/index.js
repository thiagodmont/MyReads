import React from 'react';
import './styles.css';

const Header = function(props) {
    return (
      <div className="header">
        <h1>{props.title}</h1>
      </div>
    );
}

export default Header;