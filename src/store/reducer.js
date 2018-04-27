import { initialState } from "./initialState";

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "REMOVE_BOOK":
      const bookToDelete = action.bookId;
      const books = state.books.filter(book => book.isbn !== bookToDelete);
      return { ...state, books: [...books] };
    default:
      return state;
  }
};
