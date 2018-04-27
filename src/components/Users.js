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

const mapStateToProps = ({ usersSummary }) => ({ users: usersSummary });

export default connect(mapStateToProps)(Users);
