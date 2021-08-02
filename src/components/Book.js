import React, { Component } from "react";
import BookShelfChanger from "./BookShelfChanger";
import * as BooksAPI from "../BooksAPI";
class Book extends Component {
 constructor(props) {
  super(props);
  this.handleChange = this.handleChange.bind(this);
  this.checkBookCover = this.checkBookCover.bind(this);
 }
 handleChange(event) {
  // Update books
  const { value } = event.target;
  console.log("Value target  ", value);
  console.log("this.props.book,value  ", value);
  BooksAPI.update(this.props.book, value).then(() => {
   this.props.getAllBooks();
  });
 }

 checkBookCover(book) {
  const bookCover = book.imageLinks && book.imageLinks.thumbnail ? book.imageLinks.thumbnail : "";
  return bookCover;
 }
 render() {
  return (
   <div className="book">
    <div className="book-top">
     <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.checkBookCover(this.props.book)})` }}></div>
     <BookShelfChanger handleChange={this.handleChange} defaultValue={this.props.defaultValue} />
    </div>

    <div className="book-title">{this.props.book.title}</div>
    <div className="book-authors">
     {
      /**  Check for authors and render each on separate line if exist **/
      this.props.book.authors &&
       this.props.book.authors.map((author, index) => (
        <div className="book-authors" key={index}>
         {author}
        </div>
       ))
     }
    </div>
   </div>
  );
 }
}

export default Book;
