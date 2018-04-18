import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Books = ({ books }) => (
  <ul>
    {books.map(book => (
      <li key={book.isbn}>
        <b>
          <Link to={`/books/${book.isbn}`}>{book.title}</Link>
        </b>{" "}
        by {book.author}, readers: {book.readersCount}, comments:{" "}
        {book.commentsCount}
      </li>
    ))}
  </ul>
);

const mapStateToProps = ({ books, users, comments }) => ({
  books: books.map(book => ({
    ...book,
    readersCount: users.filter(u => u.books.indexOf(book.isbn) > -1).length,
    commentsCount: comments.filter(c => c.book === book.isbn).length
  }))
});
export default connect(mapStateToProps)(Books);
