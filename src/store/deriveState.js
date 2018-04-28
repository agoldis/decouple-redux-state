import { compose } from "redux";

const getBookDetails = function(bookId) {
  const book = { ...this.books.find(book => book.isbn === bookId) };
  const readers = this.users.filter(user => user.books.indexOf(book.isbn) > -1);
  const bookComments = this.comments.filter(
    comment => comment.book === book.isbn
  );
  book.readers = [...readers];
  book.comments = [...bookComments];
  return book;
};

const getUserDetails = function(userId) {
  const user = { ...this.users.find(u => u.id === userId) };
  const readBooks = this.books.filter(
    book => user.books.indexOf(book.isbn) > -1
  );
  const userComments = this.comments.filter(
    comment => comment.user === user.id
  );
  user.books = [...readBooks];
  user.comments = [...userComments];
  return user;
};

const usersSummary = function() {
  return this.users.map(user => ({
    ...user,
    booksCount: user.books.length,
    commentsCount: this.comments.filter(c => c.user === user.id).length
  }));
};

const booksSummary = function() {
  return this.books.map(book => ({
    ...book,
    readersCount: this.users.filter(u => u.books.indexOf(book.isbn) > -1)
      .length,
    commentsCount: this.comments.filter(c => c.book === book.isbn).length
  }));
};

const addUsersSummary = state =>
  Object.defineProperty(state, "usersSummary", {
    get: usersSummary,
    enumerable: false
  });

const addBooksSummary = state =>
  Object.defineProperty(state, "booksSummary", {
    get: booksSummary,
    enumerable: false
  });

const addUserDetails = state => {
  state.getUserDetails = getUserDetails;
  return state;
};

const addBookDetails = state => {
  state.getBookDetails = getBookDetails;
  return state;
};

const moveToApp = state =>
  Object.defineProperties(state, {
    users: {
      get: function() {
        return this.app.users;
      },
      enumerable: false,
      configurable: true
    },
    books: {
      get: function() {
        return this.app.books;
      },
      enumerable: false,
      configurable: true
    },
    comments: {
      get: function() {
        return this.app.comments;
      },
      enumerable: false,
      configurable: true
    }
  });

export const deriveState = compose(
  addBooksSummary,
  addUsersSummary,
  addBookDetails,
  addUserDetails,
  moveToApp
);
