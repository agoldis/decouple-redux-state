import React from "react";
import { connect } from "react-redux";

const BookWithComments = ({ book, comments = [] }) => (
  <div>
    <div>
      {book.title} by {book.author}
    </div>
    <ul>
      {comments.map(comment => (
        <li key={comment.id}>
          <i>{comment.content}</i>
        </li>
      ))}
    </ul>
  </div>
);

const UserDetails = ({ user }) => (
  <div>
    <h3>User</h3>
    <div style={{ display: "flex", alignItems: "center" }}>
      <img src={user.profileImage} width="80" height="70" />
      <div>{user.name}</div>
    </div>
    <hr />
    <h3>Read Books</h3>
    <ul>
      {user.books.map(book => (
        <li key={book.isbn}>
          <BookWithComments
            book={book}
            comments={user.comments.filter(c => c.book === book.isbn)}
          />
        </li>
      ))}
    </ul>
  </div>
);

const mapStateToProps = ({ users, books, comments }, { match }) => {
  const user = { ...users.find(u => u.id === match.params.id) };
  const readBooks = books.filter(book => user.books.indexOf(book.isbn) > -1);
  const userComments = comments.filter(comment => comment.user === user.id);
  user.books = [...readBooks];
  user.comments = [...userComments];
  return { user };
};

export default connect(mapStateToProps)(UserDetails);
