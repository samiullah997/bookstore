import './addBook.css';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/Books';

export default function AddBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { target: { name, value } } = e;
    if (name === 'title') setTitle(value);
    if (name === 'author') setAuthor(value);
    if (name === 'category') setCategory(value);
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    const newBook = {
      id: uuidv4(),
      title,
      author,
      category,
    };
    dispatch(addBook(newBook));

    setAuthor('');
    setTitle('');
    setCategory('');
  };
  return (
    <div className="container">
      <div className="line" />
      <div className="footer-start">
        <span className="book-title">
          ADD NEW BOOK
        </span>
        <form className="input-fields" onSubmit={handleSumbit}>
          <input className="book-input" type="text" value={title} placeholder="Title" name="title" onChange={handleChange} required />
          <input className="author-input" type="text" value={author} placeholder="Author" name="author" onChange={handleChange} required />
          <select className="author-input" name="category" value={category} onChange={handleChange} required>
            <option value="">Category</option>
            <option value="Action and Adventure">Action and Adventure</option>
            <option value="Classics">Classics</option>
            <option value="Comic Book or Graphic Novel">Comic Book or Graphic Novel</option>
            <option value="Detective and Mystery">Detective and Mystery</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Historical Fiction">Historical Fiction</option>
            <option value="Horror">Horror</option>
            <option value="Literary Fiction">Literary Fiction</option>
            <option value="Romance">Romance</option>
            <option value="Science Fiction (Sci-Fi)">Science Fiction (Sci-Fi)</option>
            <option value="Short Stories">Short Stories</option>
            <option value="Suspense and Thrillers">Suspense and Thrillers</option>
            <option value="Women&apos;s Fiction">Women&apos;s Fiction</option>
            <option value="History">History</option>
            <option value="Memoir">Memoir</option>
            <option value="Poetry">Poetry</option>
            <option value="Self-Help">Self-Help</option>
            <option value="True Crime">True Crime</option>
          </select>
          <button className="add-btn" type="submit" onClick={handleSumbit}>Add Book</button>
        </form>
      </div>
    </div>
  );
}
