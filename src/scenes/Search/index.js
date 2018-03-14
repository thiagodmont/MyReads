import React, { Component } from 'react'
import SearchBar from '../../components/SearchBar'
import * as BooksAPI from '../../services/BooksAPI'
import * as Storage from '../../services/Storage'
import BookCase from '../../components/BookCase'
import Book from '../../components/Book'
import Loading from '../../components/Loading'

import './styles.css';
import emptyData from '../../icons/search_empty_data.png'

class Search extends Component {

  state = {
    books: null,
    bookshelf: [],
    value: Storage.getSearch() || ''
  }

  timeout = 0;

  componentDidMount() {
    this.state.value && this.onChange(this.state.value)
    this.loadBookShelf()
  }

  loadBookShelf = () => {
    const bookshelf = this.props.location.query && this.props.location.query.bookshelf

    if (bookshelf) {
      this.setState({ bookshelf })
    } else {
      BooksAPI.getAll().then(bookshelf => this.setState({ bookshelf }))
    }
  }

  onChange = async (value) => {
    await this.setState({  books: [], loading: true, value })

    if (this.timeout) clearTimeout(this.timeout)
    
    this.timeout = setTimeout(async () => {
      if (value.trim()) {
        Storage.setSearch(value)

        const booksSearch = await BooksAPI.search(value);

        if (booksSearch && Array.isArray(booksSearch)) {
          const bk = booksSearch.map(book => {
            const check = this.state.bookshelf.filter(bf => bf.id === book.id)[0]
            return check ? check : book
          })
          
          this.setState({ books: bk, loading: false })
        } else {
          this.setState({ books: [], loading: false })
        }
      } else {
        this.setState({ books: [], loading: false })
      }
    }, 700);
  }

  onChangeBook = async (ev, book) => {
    const value = ev.target.value;
    await this.onLoadingBook(book);
    await BooksAPI.update(book, value);

    this.setState({
      books: this.changeProps(book, {shelf: value, loading: false}),
      bookshelf: this.changeProps(book, {shelf: value, loading: false}) 
    });
  }

  onLoadingBook = (book) => {
    return new Promise(resolve => {
      this.setState({ books: this.changeProps(book, {loading: true}) }, () => {
        resolve()
      });
    });
  }

  changeProps = (book, props) => {
    return this.state.books.map(b => {
      return b.id === book.id ? {...b, ...props} : b
    });
  }

  renderBooks = () => {
    if (this.state.books.length <= 0) {
      return <div> <img src={emptyData} alt="empty data"/> </div>
    }

    return this.state.books.map(book => (
      <Book
        key={book.id} 
        book={book}
        context={"search"}
        onChange={this.onChangeBook}/>
    ))
  }

  render() {
    return (
      <div className="search-books">
        <SearchBar
          link="/"
          onClickBack={() => Storage.cleanSearch()}
          value={this.state.value}
          placeholder="Search by title or author"
          onChange={(e) => this.onChange(e.target.value)} />

        <div className="search-books-results">
          {
            this.state.loading ?
            <Loading />
            :
            <BookCase>
              {this.state.books ? (
                this.renderBooks()
              ) : (
                null
              )}
            </BookCase>
          }
        </div>
      </div>
    );
  }
}

export default Search;