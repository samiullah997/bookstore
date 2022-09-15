import './books.css';
import Book from './Book';
import AddBook from './AddBook';

const state = {
  title: 'Then Hunger Games',
  author: 'Suzanne Collins',
};
export default function Home() {
  return (
    <div>
      <Book name={state} />
      <AddBook />
    </div>
  );
}
