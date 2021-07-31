import React, { Component } from 'react'
import Book from './Book'
import * as BooksAPI from '../BooksAPI'



class ListBooks extends Component
{
  
  constructor(props){

    super(props)
    this.state = {
      listOfBooks:[],
      
    }
    this.filterBooksshelves = this.filterBooksshelves.bind(this)
   
  }

  getAllBooks = () => {
    BooksAPI.getAll().then( response => 
     
      {
        this.setState({listOfBooks:response});
      
      }
      )
  }
  
  
  componentDidMount(){
   
    this.getAllBooks();
  
  }
 
filterBooksshelves(listOfBooks,shelf){
 
  
 return listOfBooks.filter(book => book.shelf === shelf)

}
 


    render(){

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
               
                
                  {
             
                 //test if not exist   
                   this.filterBooksshelves(this.state.listOfBooks,'currentlyReading').map( (filteredBook) =>  <Book  book={filteredBook} defaultValue='currentlyReading' key={filteredBook.id} getAllBooks = {this.getAllBooks}/>
                    )
                 } 

               
              </ol>
            </div>
          </div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Want to Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {
                 this.filterBooksshelves(this.state.listOfBooks,'wantToRead').map( (filteredBook) =>  <Book  book={filteredBook} defaultValue='wantToRead' key={filteredBook.id} getAllBooks = {this.getAllBooks}/>
                )
  
                }
                
                </ol>
            </div>
          </div>   
          <div className="bookshelf">
            <h2 className="bookshelf-title">Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
               {
                    this.filterBooksshelves(this.state.listOfBooks,'read').map( filteredBook =>  <Book  book = {filteredBook} defaultValue='read' key={filteredBook.id} getAllBooks = {this.getAllBooks}/>
                    )
                }
                
              </ol>
            </div>
          </div>
     
      </div>
      </div>
      </div>
 
 
  )


}}

 
export default ListBooks

