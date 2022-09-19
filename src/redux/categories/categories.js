import { createAction } from '@reduxjs/toolkit';

export const status = createAction('status');

export default function reducer(state = [], action) {
  if (action.type === status.type) {
    return [
      ...state,
      {
        status: 'Under construction',
      },
    ];
  }
  return state;
}
