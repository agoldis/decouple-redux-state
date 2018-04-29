import { createSelector } from "reselect";

const getBooks = state => state.books;
const getUsers = state => state.users;
const getComments = state => state.comments;
const getCurrentUser = (state, userId) => userId;
const getCurrentBook = (state, bookId) => bookId;

export const bookDetailsSelector = createSelector(
  [getBooks, getUsers, getComments, getCurrentBook],
  (books, users, comments, currentBookId) => {
    const book = { ...books.find(book => book.isbn === currentBookId) };
    const readers = users.filter(user => user.books.indexOf(book.isbn) > -1);
    const bookComments = comments.filter(comment => comment.book === book.isbn);
    book.readers = [...readers];
    book.comments = [...bookComments];
    return book;
  }
);

export const userDetailsSelector = createSelector(
  [getBooks, getUsers, getComments, getCurrentUser],
  (books, users, comments, currentUserId) => {
    const user = { ...users.find(u => u.id === currentUserId) };
    const readBooks = books.filter(book => user.books.indexOf(book.isbn) > -1);
    const userComments = comments.filter(comment => comment.user === user.id);
    user.books = [...readBooks];
    user.comments = [...userComments];
    return user;
  }
);

export const usersSummarySelector = createSelector(
  [getUsers, getComments],
  (users, comments) =>
    users.map(user => ({
      ...user,
      booksCount: user.books.length,
      commentsCount: comments.filter(c => c.user === user.id).length
    }))
);

export const booksSummarySelector = createSelector(
  [getBooks, getUsers, getComments],
  (books, users, comments) =>
    books.map(book => ({
      ...book,
      readersCount: users.filter(u => u.books.indexOf(book.isbn) > -1).length,
      commentsCount: comments.filter(c => c.book === book.isbn).length
    }))
);
