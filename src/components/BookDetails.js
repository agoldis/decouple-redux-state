import React from "react";
import { connect } from "react-redux";

const ReaderWithComments = ({ reader, comments = [] }) => (
  <div>
    <div>{reader.name}</div>
    <ul>
      {comments.map(comment => (
        <li key={comment.id}>
          <i>{comment.content}</i>
        </li>
      ))}
    </ul>
  </div>
);

const BookDetails = ({ book }) => (
  <div>
    <h3>Book Details</h3>
    <div>
      <div>Title: {book.title}</div>
      <div>Author: {book.author}</div>
      <div>ISBN: {book.isbn}</div>
      <div>Description: {book.description}</div>
      <div>Pages: {book.pages}</div>
      <div>
        Website: <a href={book.website}>{book.website}</a>
      </div>
    </div>
    <hr />
    <h3>Readers</h3>
    <ul>
      {book.readers.map(reader => (
        <li key={reader.id}>
          <ReaderWithComments
            reader={reader}
            comments={book.comments.filter(
              comment => comment.user === reader.id
            )}
          />
        </li>
      ))}
    </ul>
  </div>
);

const mapStateToProps = ({ users, books, comments }, { match }) => {
  const book = { ...books.find(book => book.isbn === match.params.id) };
  const readers = users.filter(user => user.books.indexOf(book.isbn) > -1);
  const bookComments = comments.filter(comment => comment.book === book.isbn);
  book.readers = [...readers];
  book.comments = [...bookComments];
  return { book };
};

export default connect(mapStateToProps)(BookDetails);
