import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const options = [
  { value: 'currentlyReading', text: 'Currently Reading' },
  { value: 'wantToRead', text: 'Want to Read' },
  { value: 'read', text: 'Read' },
  { value: 'nome', text: 'None' }
]

class Book extends Component {
  
  render() {
    return (
      <li className="book-item">
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${this.props.book.imageLinks.smallThumbnail}")` }}></div>
            <div className={`book-shelf-changer ${this.props.book.loading ? 'book-shelf-changer-loading' : ''}`}>
              <select value={this.props.book.shelf} onChange={(e) => this.props.onChange(e, this.props.book)}>
                <option value="none" disabled>Move to...</option>
                {options.map( opt => (
                  <option key={opt.value} value={opt.value}>{opt.text}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="book-title">{this.props.book.title}</div>
          <div className="book-authors">{this.props.book.authors}</div>
        </div>
      </li>
    );
  }
}

Book.propTypes = {
  book: PropTypes.object
};

export default Book;