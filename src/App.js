import React from 'react'
import * as BooksAPI from './BooksAPI'
import {Route,Link, Switch} from 'react-router-dom';
import ListBooks from './components/ListBooks'
import SearchBooks from './components/SearchBooks'

import './App.css'

class BooksApp extends React.Component {
  /*
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
   
 //}*/

 constructor(){
  super()
  this.state = {
    listOfBooks:[],
    currentlyReadingBooks : [],
     readBooks : [],
    wantToRead : [],
  }
  this.filterBooksshelves = this.filterBooksshelves.bind(this)
}  

filterBooksshelves(listOfBooks,shelf){
 
  //console.log('listofbooksFiltered ', listOfBooks.filter(book => book.shelf === shelf))
 return listOfBooks.filter(book => book.shelf === shelf)
       
}

componentDidMount(){
  setTimeout(() => {BooksAPI.getAll().then( response => 
   
    {
      this.setState({listOfBooks:response});
    
    }
    )}, 1000)
    
    


}


render() {
 
  
  console.log('listOfBooks from app', this.state.listOfBooks)
    return (
      <div className="app">
        <Switch>
            <Route exact path='/' 
                render={() => ( 
                 
               <div>
                 {console.log('ONS',this.state.listOfBooks)}
                 <ListBooks  listOfBooks = {this.state.listOfBooks}/>
                <div className="open-search">
                  <Link to="/SearchBooks">Search</Link> 
                </div>

                
             </div>
               )
               }
          /> 
       
       
       <Route exact path="/SearchBooks" component={SearchBooks}  />
       
        
      </Switch>
      </div>
    )
  }
}


export default BooksApp
