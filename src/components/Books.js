import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Books = ({ books, dispatch }) => (
  <ul>
    {books.map(book => (
      <li key={book.isbn}>
        <b>
          <Link to={`/books/${book.isbn}`}>{book.title}</Link>
        </b>{" "}
        by {book.author}, readers: {book.readersCount}, comments:{" "}
        {book.commentsCount}{" "}
        <span
          onClick={() =>
            dispatch({
              type: "REMOVE_BOOK",
              bookId: book.isbn
            })
          }
        >
          remove
        </span>
      </li>
    ))}
  </ul>
);

const mapStateToProps = ({ booksSummary }) => ({ books: booksSummary });
export default connect(mapStateToProps)(Books);
