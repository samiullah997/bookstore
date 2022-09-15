import './addBook.css';

export default function AddBook() {
  return (
    <div className="container">
      <div className="line" />
      <div className="footer-start">
        <span className="book-title">
          ADD NEW BOOK
        </span>
        <form className="input-fields">
          <input className="book-input" placeholder="Title" />
          <input className="author-input" placeholder="Author" />
          <button className="add-btn" type="button">Add Book</button>
        </form>
      </div>
    </div>
  );
}
