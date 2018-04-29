import { compose } from "redux";
import { createSelector } from "reselect";

const getBooks = state => state.books;
const getUsers = state => state.users;
const getComments = state => state.comments;
const getCurrentUser = (state, userId) => userId;
const getCurrentBook = (state, bookId) => bookId;

const bookDetails = createSelector(
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

const userDetails = createSelector(
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

const usersSummary = createSelector(
  [getUsers, getComments],
  (users, comments) =>
    users.map(user => ({
      ...user,
      booksCount: user.books.length,
      commentsCount: comments.filter(c => c.user === user.id).length
    }))
);

const booksSummary = createSelector(
  [getBooks, getUsers, getComments],
  (books, users, comments) =>
    books.map(book => ({
      ...book,
      readersCount: users.filter(u => u.books.indexOf(book.isbn) > -1).length,
      commentsCount: comments.filter(c => c.book === book.isbn).length
    }))
);

const addUsersSummary = state =>
  Object.defineProperty(state, "usersSummary", {
    get: () => usersSummary(state),
    enumerable: false,
    configurable: true
  });

const addBooksSummary = state =>
  Object.defineProperty(state, "booksSummary", {
    get: () => booksSummary(state),
    enumerable: false,
    configurable: true
  });

const addUserDetails = state => {
  state.getUserDetails = userId => userDetails(state, userId);
  return state;
};

const addBookDetails = state => {
  state.getBookDetails = bookId => bookDetails(state, bookId);
  return state;
};

export const deriveState = compose(
  addBooksSummary,
  addUsersSummary,
  addBookDetails,
  addUserDetails
);
