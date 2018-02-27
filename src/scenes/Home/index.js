import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import Header from '../../components/Header'
import BookCase from '../../components/BookCase'
import Book from '../../components/Book'
import Loading from '../../components/Loading'
import * as BooksAPI from '../../services/BooksAPI'

import './styles.css';

class Home extends Component {
  state = {
    books: null,
    currentlyReading: null,
    wantToRead: null,
    read: null
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => this.setState({ books }))
  }

  onChange = async (ev, book) => {
    const value = ev.target.value;
    await this.onLoadingBook(book);

    BooksAPI.update(book, value).then(() => {
      this.setState({ books: this.changeProps(book, {'shelf': value, 'loading': false}) });
    });
  }

  onLoadingBook = (book) => {
    return new Promise(resolve => {
      this.setState({ books: this.changeProps(book, {'loading': true}) }, () => {
        resolve()
      });
    });
  }

  changeProps = (book, props) => {
    return this.state.books.map(b => {
      return b.id === book.id ? Object.assign({}, b, props) : b;
    });
  }

  render() {
    return (
      <div>
        <Header title={"MyReads"} />
        
        <BookCase title={"Currently Reading"}>
          {this.state.books ? (
            this.state.books.filter(book => book.shelf === 'currentlyReading').map(book => (
              <Book
                key={book.id} 
                book={book}
                onChange={this.onChange} />
            ))
          ) : (
            <Loading />
          )}
        </BookCase>

        <BookCase title={"Want to Read"}>
          {this.state.books ? (
            this.state.books.filter(book => book.shelf === 'wantToRead').map(book => (
              <Book
                key={book.id} 
                book={book}
                onChange={this.onChange} />
            ))
          ) : (
            <Loading />
          )}
        </BookCase>

        <BookCase title={"Read"}>
          {this.state.books ? (
            this.state.books.filter(book => book.shelf === 'read').map(book => (
              <Book
                key={book.id} 
                book={book}
                onChange={this.onChange} />
            ))
          ) : (
            <Loading />
          )}
        </BookCase>

        <div className="open-search">
          <Link to={`/search`}>Add a book</Link>
        </div>
      </div>
    );
  }
}

export default Home;