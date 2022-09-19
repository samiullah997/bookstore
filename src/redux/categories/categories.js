import { createAction } from '@reduxjs/toolkit';

export const STATUS = createAction('STATUS');

export default function reducer(state = [], action) {
  if (action.type === STATUS.type) {
    return [
      ...state,
      {
        status: 'Under construction',
      },
    ];
  }
  return state;
}
