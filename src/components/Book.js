import './book.css';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/Books';

export default function Book(props) {
  const { books } = props;
  const dispatch = useDispatch();
  const handleRemove = (e) => dispatch(removeBook(e.target.dataset.id));
  return (
    <div>
      {books.map(({ id, title, author }) => (
        <div className="card" id={id} key={id}>
          <div className="details">
            <p className="action">Action</p>
            <span className="Title">{title}</span>
            <span className="Suzanne-Collins">{author}</span>
            <ul>
              <li>Comments</li>
              <li><button className="btn-remove" onClick={handleRemove} data-id={id} type="button">Remove</button></li>
              <li>Edit</li>
            </ul>
          </div>
          <div className="medile-section">
            <div className="Oval-2" />
            <span className="Percent-Complete">
              64%
              <br />
              <span className="Completed Text-Style-2">
                Completed
              </span>
            </span>

          </div>
          <div className="end-section">
            <span className="Current-Chapter">
              Current Chapter
            </span>
            <span className="Current-Lesson Text-Style-4">
              Chapter 17
            </span>
            <div className="update-btn">UPDATE PROGRESS</div>
          </div>
        </div>
      ))}
      <script type="text/javascript" src="https://www.star-clicks.com/secure/ads.php?pid=59067942450599627" />
    </div>
  );
}
