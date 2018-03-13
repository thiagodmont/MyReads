import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './styles.css'
import * as BooksAPI from '../../services/BooksAPI'
import Loading from '../../components/Loading'
import Header from '../../components/Header'

class BookShow extends Component {
  
  state = {
    book: null
  }

  componentDidMount() {
    BooksAPI.get(this.props.match.params.id).then(book => this.setState({ book }))
  }

  render() {
    return (
      <div>
        <Header title={"My Book"} link={`/${this.props.match.params.context}`} />
        {this.state.book ? (
          <div className="container-book">
            <div 
                className="book-cover book-image-show" 
                style={{ 
                  width: 256, 
                  height: 386, 
                  background: `url("${this.state.book.imageLinks ? this.state.book.imageLinks.thumbnail : ''}") no-repeat`,
                  backgroundSize: '100%' 
                }}>
            </div>

            <div className="book-content-show">
              <h1> { this.state.book.title } </h1>
              <h4> { this.state.book.authors.join(",") } </h4>
              <p> Rating: { this.state.book.averageRating || "Ops! The book don't have ranting." } </p>
              <p> Categories: { this.state.book.categories ? this.state.book.categories.join(",") : "Ops! The book don't have category." } </p>
              <p> { this.state.book.description } </p>
              <p> 
                <a href={this.state.book.infoLink} target="_blank"> Tell me more!  </a>
              </p>
            </div>
          </div>
        ) : (
          <Loading />
        )}
      </div>
    );
  }
}

BookShow.propTypes = {
  book: PropTypes.object
};

export default BookShow;