const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const data = [
  {
    id: '1',
    title: 'The Hunger Games',
    author: 'Suzan Collins',
  },
  {
    id: '2',
    title: 'JavaScript',
    author: 'Sami',
  },
  {
    id: '3',
    title: 'React Js',
    author: 'Hassan',
  },
];

// Reducer
const booksReducer = (state = data, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.book];
    case REMOVE_BOOK:
      return [...state.filter(({ id }) => id !== action.bookId)];
    default:
      return state;
  }
};

// Action Creators
export const addBook = (book) => ({
  type: ADD_BOOK,
  book,
});

export const removeBook = (bookId) => ({
  type: REMOVE_BOOK,
  bookId,
});

export default booksReducer;
