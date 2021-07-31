import React, { Component } from "react";
import * as BooksAPI from "../BooksAPI";
import Book from "./Book";
import { Link } from "react-router-dom";
class SearchBooks extends Component {
 constructor() {
  super();
  this.state = {
   listOfBooks: [],
   searchError: false,
  };
 }

 handleChange = (event) => {
  const { value } = event.target;

  //searchQuery
  value
   ? BooksAPI.search(value).then((books) => (books.length > 0 ? this.setState({ listofBooks: books, searchError: false }) : this.setState({ listofBooks: [], searchError: true })))
   : this.setState({ listofBooks: [], searchError: true });
 };

 getAllBooks = () => {
  BooksAPI.getAll().then((response) => {
   this.setState({ listOfBooks: response });
  });
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
     {this.state.listofBooks != null && (
      <ol className="books-grid">
       {this.state.listofBooks.map((book) => (
        <Book book={book} defaultValue="currentlyReading" key={book.id} getAllBooks={this.getAllBooks} />
       ))}
      </ol>
     )}
     {this.state.searchError && <h3>Your query did not return any books. Please try again!</h3>}
    </div>
   </div>
  );
 }
}
export default SearchBooks;
