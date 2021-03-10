import React, { Component } from "react";
import { Link } from "react-router-dom";
import Shelf from "./Shelf";

import Book from "./Book";
import { getAll } from "./BooksAPI";
class Home extends Component {
  render() {
    const { books, handlechange } = this.props;

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div>
          <Shelf books={books} handlechange={handlechange} />
        </div>
        <div className="open-search">
          <Link to="/search">
            <button>Add a book</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;
