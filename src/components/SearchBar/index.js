import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import './styles.css'

const SearchBar = function(props) {
    return (
      <div className="search-books-bar">
        { props.link ? 
          <Link className="close-search" to={props.link} onClick={() => props.onClickBack()}>Close</Link>
          :
          null
        }
        
        <div className="search-books-input-wrapper">
          <input type="text" value={props.value} placeholder={props.placeholder || 'Search ...'} onChange={props.onChange}/>
        </div>
      </div>
    );
}

SearchBar.propTypes = {
  link: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onClickBack: PropTypes.func,
};

export default SearchBar;