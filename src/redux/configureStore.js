import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/Books';
import categoryReducer from './categories/categories';

export default function combineReducer() {
  return configureStore({
    bookReducer, categoryReducer,
  });
}
