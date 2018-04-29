import {
  booksSummarySelector,
  usersSummarySelector,
  userDetailsSelector,
  bookDetailsSelector
} from "./selectors";

class NotRealState {
  constructor(state) {
    Object.defineProperty(this, "_state", {
      value: state,
      enumerable: false
    });
  }
  get state() {
    return this._state;
  }

  get books() {
    return this.state.books;
  }
  get users() {
    return this.state.users;
  }
  get comments() {
    return this.state.comments;
  }

  get booksSummary() {
    return booksSummarySelector(this.state);
  }

  get usersSummary() {
    return usersSummarySelector(this.state);
  }

  getUserDetails(userId) {
    return userDetailsSelector(this.state, userId);
  }

  getBookDetails(bookId) {
    return bookDetailsSelector(this.state, bookId);
  }
}

export const deriveState = state => new NotRealState(state);
