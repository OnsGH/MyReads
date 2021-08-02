import React from "react";

import { Route, Link, Switch } from "react-router-dom";
import ListBooks from "./components/ListBooks";
import SearchBooks from "./components/SearchBooks";
import * as BooksAPI from "./BooksAPI";
import "./App.css";

class BooksApp extends React.Component {
 constructor() {
  super();
  this.state = {
   listOfBooks: [],
  };
 }

 getAllBooks = () => {
  BooksAPI.getAll().then((response) => {
   this.setState({ listOfBooks: response });
  });
 };

 componentDidMount() {
  this.getAllBooks();
 }

 render() {
  return (
   <div className="app">
    <Switch>
     <Route
      exact
      path="/"
      render={() => (
       <div>
        <ListBooks listOfBooks={this.state.listOfBooks} getAllBooks={this.getAllBooks} />
        <div className="open-search">
         <Link to="/search">Search</Link>
        </div>
       </div>
      )}
     />

     <Route
      exact
      path="/search"
      render={() => (
       <div>
        <SearchBooks listOfBooks={this.state.listOfBooks} getAllBooks={this.getAllBooks} />
       </div>
      )}
     />
    </Switch>
   </div>
  );
 }
}

export default BooksApp;
