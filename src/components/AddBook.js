import './addBook.css';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/Books';

export default function AddBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { target: { name, value } } = e;
    if (name === 'title') setTitle(value);
    else if (name === 'author') setAuthor(value);
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    const newBook = {
      id: uuidv4(),
      title,
      author,
    };
    dispatch(addBook(newBook));

    // Sets back the input fields
    setAuthor('');
    setTitle('');
  };
  return (
    <div className="container">
      <div className="line" />
      <div className="footer-start">
        <span className="book-title">
          ADD NEW BOOK
        </span>
        <form className="input-fields" onSubmit={handleSumbit}>
          <input className="book-input" type="text" value={title} placeholder="Title" name="title" onChange={handleChange} />
          <input className="author-input" type="text" value={author} placeholder="Author" name="author" onChange={handleChange} />
          <button className="add-btn" type="submit" onClick={dispatch}>Add Book</button>
        </form>
      </div>
    </div>
  );
}
