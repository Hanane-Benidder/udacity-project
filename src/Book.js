import React, { Component } from "react";
import BooksApp from "./App";
import App from "./App";

class Book extends Component {
  render() {
    const { book, handlechange } = this.props;
    const displayimage = book.imageLinks ? book.imageLinks.thumbnail : "";
    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url('${displayimage} ')`,
            }}
          />
          <div className="book-shelf-changer">
            <select
              value={this.props.currentSlf}
              onChange={(event) => {
                this.props.handlechange(this.props.book, event.target.value);
              }}
            >
              <option value="move" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title"> {book.title} </div>
        <div className="book-authors">{book.authors} </div>
      </div>
    );
  }
}

export default Book;
