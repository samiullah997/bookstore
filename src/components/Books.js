import './books.css';
import { useSelector } from 'react-redux';
import Book from './Book';
import AddBook from './AddBook';

export default function Home() {
  const books = useSelector((state) => state.books);
  return (
    <div>
      <Book books={books} />
      <AddBook />
    </div>
  );
}
