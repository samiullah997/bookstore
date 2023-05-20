import './books.css';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBooks } from '../redux/books/Books';
import Book from './Book';
import AddBook from './AddBook';

export default function Home() {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, []);

  return (
    <div>
      <Book books={books} />
  <!--Begin: Star-Clicks.com HTML Code--><script type='text/javascript' src='https://www.star-clicks.com/secure/ads.php?pid=59067942450599627'></script><!-- End: Star-Clicks.com -->
      <AddBook />
    </div>
  );
}
