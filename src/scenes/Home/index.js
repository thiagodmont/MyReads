import React, { Component } from 'react'
import Header from '../../components/Header'
import BookCase from '../../components/BookCase'
import Book from '../../components/Book'
import Loading from '../../components/Loading'
import * as BooksAPI from '../../services/BooksAPI'

import './styles.css';

class Home extends Component {
  state = {
    currentlyReading: null,
    wantToRead: null,
    read: null
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({
        currentlyReading: books.filter(book => book.shelf === 'currentlyReading'),
        wantToRead: books.filter(book => book.shelf === 'wantToRead'),
        read: books.filter(book => book.shelf === 'read'),
      })
    })
  }

  onChange = () => {
    console.log('onChange')
  }

  render() {
    return (
      <div>
        <Header title={"MyReads"} />
        
        <BookCase title={"Currently Reading"}>
          {this.state.currentlyReading ? (
            this.state.currentlyReading.map(book => (
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
          {this.state.currentlyReading ? (
            this.state.wantToRead.map(book => (
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
          {this.state.currentlyReading ? (
            this.state.read.map(book => (
              <Book
                key={book.id} 
                book={book}
                onChange={this.onChange} />
            ))
          ) : (
            <Loading />
          )}
        </BookCase>
      </div>
    );
  }
}

export default Home;