
import React, { Component } from 'react'
import BookShelfChanger from './BookShelfChanger'
import * as BooksAPI from '../BooksAPI'
class Book extends Component{
    
   // console.log(props.shelf)
   constructor(props) {
    super(props)

    console.log('PROPS const', this.props)
    this.state = {
        shelf:'',
        listOfBooks:[],
        
    } 
   this.handleChange = this.handleChange.bind(this)
   this.checkBookCover = this.checkBookCover.bind(this)
  // this.getAllBooks = this.getAllBooks.bind(this)
}
handleChange(event){
    const {name,value} = event.target
   
    this.setState({
      [name]:value
     
     })
    // update
    console.log('Name ', this.state.shelf)
   /* 
    BooksAPI.update(this.props.book,this.state.shelf).
    then(
        () => {
        this.getAllBooks();
    })
}

getAllBooks(){

    BooksAPI.getAll().then((response) => {
        this.setState({ listOfBooks: response });
    });
*/
}
checkBookCover(book){
 const bookCover = book.imageLinks && book.imageLinks.thumbnail
    ? book.imageLinks.thumbnail
    : '';
return bookCover

    }
    render(){
       
    return (
        // map update
       
     <div class='book' >
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.checkBookCover(this.props.book)})`  }}></div>
          <BookShelfChanger handleChange={this.handleChange} shelf={this.state.shelf} defaultValue={this.props.defaultValue} />
        </div>
    
       <div className="book-title">{this.props.book.title}</div>
        <div className="book-authors">{
        
        /**  Check for authors and render each on separate line if exist **/
        this.props.book.authors &&
          this.props.book.authors.map((author, index) => (
            <div className="book-authors" key={index}>
              {author}
            </div>
          ))}
          </div>
     </div>
  
        )

  
          

    }}

export default Book