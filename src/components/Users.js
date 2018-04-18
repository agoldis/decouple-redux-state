import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Users = ({ users }) => (
  <ul>
    {users.map(user => (
      <li key={user.id}>
        <b>
          <Link to={`/users/${user.id}`}>{user.name}</Link>
        </b>, books: {user.booksCount}, comments: {user.commentsCount}
      </li>
    ))}
  </ul>
);

const mapStateToProps = ({ users, comments }) => ({
  users: users.map(user => ({
    ...user,
    booksCount: user.books.length,
    commentsCount: comments.filter(c => c.user === user.id).length
  }))
});
export default connect(mapStateToProps)(Users);
