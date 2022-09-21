import { configureStore } from '@reduxjs/toolkit';
// import thunk from 'redux-thunk';
import booksReducer from './books/Books';
import categoriesReducer from './categories/categories';

const store = configureStore({
  reducer: {
    books: booksReducer,
    categories: categoriesReducer,
  },
});

export default store;
