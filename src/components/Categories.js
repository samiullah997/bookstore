import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';
import './categories.css';

const Categories = () => {
  const status = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const handleStatus = () => dispatch(checkStatus());

  return (
    <div className="container">
      <p>{status}</p>
      <button
        className="button"
        type="button"
        onClick={handleStatus}
      >
        Check status
      </button>
    </div>
  );
};

export default Categories;
