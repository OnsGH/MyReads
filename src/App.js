import React from "react";

import { Route, Link, Switch } from "react-router-dom";
import ListBooks from "./components/ListBooks";
import SearchBooks from "./components/SearchBooks";

import "./App.css";

class BooksApp extends React.Component {
 render() {
  return (
   <div className="app">
    <Switch>
     <Route
      exact
      path="/"
      render={() => (
       <div>
        <ListBooks />
        <div className="open-search">
         <Link to="/SearchBooks">Search</Link>
        </div>
       </div>
      )}
     />

     <Route exact path="/SearchBooks" component={SearchBooks} />
    </Switch>
   </div>
  );
 }
}

export default BooksApp;
