import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import './styles.css'

const options = [
  { value: 'currentlyReading', text: 'Currently Reading' },
  { value: 'wantToRead', text: 'Want to Read' },
  { value: 'read', text: 'Read' },
  { value: 'none', text: 'None' }
]

class Book extends PureComponent {

  render() {
    const { book, context } = this.props

    return (
      <li className="book-item">
        <div className="book">
          <div className="book-top">
            <Link to={`/book/${book.id}/${context}`}>
              <div 
                className="book-cover"
                style={{ 
                  width: 128, 
                  height: 193, 
                  backgroundImage: `url("${book.imageLinks ? book.imageLinks.smallThumbnail : ''}")` 
                }}>
              </div>
            </Link>

            <div className={`book-shelf-changer ${book.loading ? 'book-shelf-changer-loading' : ''}`}>
              <select value={book.shelf || "none"} onChange={(e) => this.props.onChange(e, book)}>
                <option value="" disabled>Move to...</option>
                {options.map( opt => (
                  <option key={opt.value} value={opt.value}>{opt.text}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors && book.authors.join(",")}</div>
        </div>
      </li>
    );
  }
}

Book.propTypes = {
  book: PropTypes.object,
  context: PropTypes.string
};

Book.defaultProps = { 
  context: "home"
}

export default Book;