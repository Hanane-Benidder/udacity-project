import React, { Component } from "react";
import Book from "./Book";
import Home from "./Home";
import App from "./App";
class Shelf extends Component {
  render() {
    const { books, handlechange } = this.props;

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">Currently Reading</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books
              .filter((book) => book.shelf === "currentlyReading")
              .map((book) => (
                <li key={book.id}>
                  <Book
                    book={book}
                    handlechange={handlechange}
                    currentSlf="currentlyReading"
                  />
                </li>
              ))}
          </ol>
        </div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Want to Read</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {this.props.books
                .filter((book) => book.shelf === "wantToRead")
                .map((book) => (
                  <li key={book.id}>
                    <Book
                      book={book}
                      handlechange={handlechange}
                      currentSlf="wantToRead"
                    />
                  </li>
                ))}
            </ol>
          </div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Read </h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {this.props.books
                  .filter((book) => book.shelf === "read")
                  .map((book) => (
                    <li key={book.id}>
                      <Book
                        book={book}
                        handlechange={handlechange}
                        currentSlf="read"
                      />
                    </li>
                  ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Shelf;
