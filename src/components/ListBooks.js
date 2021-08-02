import React, { Component } from "react";
import Book from "./Book";

class ListBooks extends Component {
 constructor(props) {
  super(props);

  this.filterBooksshelves = this.filterBooksshelves.bind(this);
 }

 filterBooksshelves(listOfBooks, shelf) {
  return listOfBooks.filter((book) => book.shelf === shelf);
 }

 render() {
  return (
   <div className="list-books">
    <div className="list-books-title">
     <h1>MyReads</h1>
    </div>
    <div className="list-books-content">
     <div>
      <div className="bookshelf">
       <h2 className="bookshelf-title">Currently Reading</h2>
       <div className="bookshelf-books">
        <ol className="books-grid">
         {this.filterBooksshelves(this.props.listOfBooks, "currentlyReading").map((filteredBook) => (
          <Book book={filteredBook} defaultValue="currentlyReading" key={filteredBook.id} getAllBooks={this.props.getAllBooks} />
         ))}
        </ol>
       </div>
      </div>
      <div className="bookshelf">
       <h2 className="bookshelf-title">Want to Read</h2>
       <div className="bookshelf-books">
        <ol className="books-grid">
         {this.filterBooksshelves(this.props.listOfBooks, "wantToRead").map((filteredBook) => (
          <Book book={filteredBook} defaultValue="wantToRead" key={filteredBook.id} getAllBooks={this.props.getAllBooks} />
         ))}
        </ol>
       </div>
      </div>
      <div className="bookshelf">
       <h2 className="bookshelf-title">Read</h2>
       <div className="bookshelf-books">
        <ol className="books-grid">
         {this.filterBooksshelves(this.props.listOfBooks, "read").map((filteredBook) => (
          <Book book={filteredBook} defaultValue="read" key={filteredBook.id} getAllBooks={this.props.getAllBooks} />
         ))}
        </ol>
       </div>
      </div>
     </div>
    </div>
   </div>
  );
 }
}

export default ListBooks;
