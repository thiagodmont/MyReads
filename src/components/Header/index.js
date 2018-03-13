import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

const Header = function(props) {
    return (
      <div className="header">
        { props.link ? 
          <Link className="close-book-show" to={props.link}>Close</Link>
          :
          null
        }
        <h1>{props.title}</h1>
      </div>
    );
}

export default Header