import { createAction } from '@reduxjs/toolkit';

export const bookAdded = createAction('bookAdded');
export const bookRemove = createAction('bookRemove');

export default function reducer(state = [], action) {
  if (action.type === bookAdded.type) {
    return [
      ...state,
      {
        id: action.payload.id,
        title: action.payload.title,
        author: action.payload.author,
      },
    ];
  } if (action.type === bookRemove.type) {
    return state.filter((item) => item.id !== action.payload.id);
  }
  return state;
}
