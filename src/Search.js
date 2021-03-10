import React, { Component } from "react";
import * as BooksAPI from "./BooksAPI";
import { Link } from "react-router-dom";
import Book from "./Book";
import Shelf from "./Shelf";
class Search extends Component {
  state = {
    query: "",
    searchedBooks: [],
  };
  updateQuery = (query) => {
    this.setState({
      query: query,
    });
    this.searchingBooks(query);
  };
  searchingBooks = (query) => {
    if (query) {
      BooksAPI.search(query).then((searchedBooks) => {
        if (searchedBooks.error) {
          this.setState({ searchedBooks: [] });
        } else {
          this.setState({ searchedBooks: searchedBooks });
        }
      });
    } else {
      this.setState({ searchedBooks: [] });
    }
  };
  addBook = (book, shelf) => {
    this.props.onChange(book, shelf);
  };
  render() {
    const { handlechange, books } = this.props;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.searchedBooks.map((searchedBook) => {
              let shelf = "none";
              books.map((book) =>
                book.id === searchedBook.id ? (shelf = book.shelf) : ""
              );
              return (
                <li key={searchedBook.id}>
                  <Book
                    book={searchedBook}
                    handlechange={handlechange}
                    currentSlf={shelf}
                  />
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    );
  }
}

export default Search;
