import './addBook.css';

export default function AddBook() {
  return (
    <div className="container">
      <div className="line" />
      <div className="footer-start">
        <span className="book-title">
          ADD NEW BOOK
        </span>
        <div className="input-fields">
          <input className="book-input" placeholder="Book" />
          <input className="author-input" placeholder="Author" />
          <button className="add-btn" type="button">Add Book</button>
        </div>
      </div>
    </div>
  );
}
