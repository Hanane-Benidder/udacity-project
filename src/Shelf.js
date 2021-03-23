import React, { Component } from "react";
import Book from "./Book";
import Home from "./Home";
import App from "./App";

class Shelf extends Component {
  render() {
    const { books, handlechange } = this.props;
    const shelves = [
      { title: "Read", key: "read" },
      { title: "Want To Read", key: "wantToRead" },
      { title: "Currently Reading", key: "currentlyReading" },
    ];

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">Currently Reading</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books
              .filter((book) => book.shelf === shelves[2].key)
              .map((book) => (
                <li key={book.id}>
                  <Book
                    book={book}
                    handlechange={handlechange}
                    currentSlf={shelves[2].key}
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
                .filter((book) => book.shelf === shelves[1].key)
                .map((book) => (
                  <li key={book.id}>
                    <Book
                      book={book}
                      handlechange={handlechange}
                      currentSlf={shelves[1].key}
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
                  .filter((book) => book.shelf === shelves[0].key)
                  .map((book) => (
                    <li key={book.id}>
                      <Book
                        book={book}
                        handlechange={handlechange}
                        currentSlf={shelves[0].key}
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
