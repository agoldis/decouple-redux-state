import React from "react";
import Home from "./components/Home";
import Users from "./components/Users";
import Books from "./components/Books";
import BookDetails from "./components/BookDetails";
import UserDetails from "./components/UserDetails";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./style.css";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <div className="menu">
            <Link to="/">Home</Link>
            <Link to="/users">Users</Link>
            <Link to="/books">Books</Link>
          </div>
          <Route exact path="/" component={Home} />
          <Route exact path="/users" component={Users} />
          <Route exact path="/books" component={Books} />
          <Route path="/users/:id" component={UserDetails} />
          <Route path="/books/:id" component={BookDetails} />
        </div>
      </Router>
    );
  }
}
