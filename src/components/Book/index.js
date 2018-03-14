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
    return (
      <li className="book-item">
        <div className="book">
          <div className="book-top">
            <Link to={`/book/${this.props.book.id}/${this.props.context}`}>
              <div 
                className="book-cover"
                style={{ 
                  width: 128, 
                  height: 193, 
                  backgroundImage: `url("${this.props.book.imageLinks ? this.props.book.imageLinks.smallThumbnail : ''}")` 
                }}>
              </div>
            </Link>

            <div className={`book-shelf-changer ${this.props.book.loading ? 'book-shelf-changer-loading' : ''}`}>
              <select value={this.props.book.shelf || "none"} onChange={(e) => this.props.onChange(e, this.props.book)}>
                <option value="" disabled>Move to...</option>
                {options.map( opt => (
                  <option key={opt.value} value={opt.value}>{opt.text}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="book-title">{this.props.book.title}</div>
          <div className="book-authors">{this.props.book.authors && this.props.book.authors.join(",")}</div>
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