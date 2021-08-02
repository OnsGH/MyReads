import React, { Component } from "react";
import * as BooksAPI from "../BooksAPI";
import Book from "./Book";
import { Link } from "react-router-dom";
class SearchBooks extends Component {
 constructor() {
  super();
  this.state = {
   listOfBooksQuery: [],
   searchError: false,
   searchInput: "",
  };
 }

 /**
  *  If the result query contains books on a bookshelf, then update shelf
  * @param {
  * } listOfBooksQuery
  * @param {*} listOfBooks
  */
 getShelfDefaultValue = (listOfBooksQuery, listOfBooks) => {
  let queryResult = listOfBooksQuery.map((bookQuery) => {
   const queryResult = listOfBooks.find((book) => book.id === bookQuery.id);
   bookQuery.shelf = queryResult ? queryResult.shelf : "none";
   return bookQuery;
  });

  this.setState({ listOfBooksQuery: queryResult });
 };

 handleChange = (event) => {
  const { value } = event.target;
  this.setState({ searchInput: value });
  //searchQuery
  if (value != null && value.length > 0) {
   BooksAPI.search(value).then((books) => {
    if (books.length > 0) {
     this.setState({ searchError: false });
     this.getShelfDefaultValue(books, this.props.listOfBooks);
    } else {
     this.setState({ listOfBooksQuery: [], searchError: true });
    }
   });
  } else {
   this.setState({ listOfBooksQuery: [], searchError: false });
  }
 };

 render() {
  return (
   <div className="search-books">
    <div className="search-books-bar">
     <Link className="close-search" to="/">
      Close
     </Link>
     <div className="search-books-input-wrapper">
      <input type="text" name="search" onChange={this.handleChange} placeholder="Search by title or author" />
     </div>
    </div>
    <div className="search-books-results">
     {this.state.listOfBooksQuery != null && (
      <ol className="books-grid">
       {this.state.listOfBooksQuery.map((book) => (
        <Book book={book} defaultValue={book.shelf} key={book.id} getAllBooks={this.props.getAllBooks} />
       ))}
      </ol>
     )}

     {this.state.searchError && this.state.searchInput.length != null ? <h3>Your query did not return any books. Please try again!</h3> : <div></div>}
    </div>
   </div>
  );
 }
}
export default SearchBooks;
