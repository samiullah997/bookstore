import { createAction } from '@reduxjs/toolkit';

export const BOOK_ADDED = createAction('BOOK_ADDED');
export const REMOVE_BOOK = createAction('REMOVE_BOOK');

export default function reducer(state = [], action) {
  if (action.type === BOOK_ADDED.type) {
    return [
      ...state,
      {
        id: action.payload.id,
        title: action.payload.title,
        author: action.payload.author,
      },
    ];
  } if (action.type === REMOVE_BOOK.type) {
    return state.filter((item) => item.id !== action.payload.id);
  }
  return state;
}
