import React from "react";
import * as BooksAPI from "./BooksAPI";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import Home from "./Home";
import Search from "./Search";
import Shelf from "./Shelf";

class BooksApp extends React.Component {
  state = {
    books: [],
  };
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
    });
  }
  refreshBooks = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
    });
  };
  handlechange = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => this.refreshBooks());
  };
  render() {
    return (
      <div className="app">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Home books={this.state.books} handlechange={this.handlechange} />
            )}
          />
          <Route
            exact
            path="/search"
            render={() => (
              <Search
                books={this.state.books}
                handlechange={this.handlechange}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default BooksApp;
