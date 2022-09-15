import './book.css';

export default function Book() {
  return (
    <div>
      <div className="card">
        <div className="details">
          <p className="action">Action</p>
          <span className="Title">Then Hunger Games</span>
          <span className="Suzanne-Collins">Suzanne Collins</span>
          <ul>
            <li>Comments</li>
            <li>Remove</li>
            <li>Edit</li>
          </ul>
        </div>
        <div className="medile-section">
          <div className="Oval-2" />
          <span className="Percent-Complete">
            64%
            {' '}
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
      <div className="card">
        <div className="details">
          <p className="action">Action</p>
          <span className="Title">Then Hunger Games</span>
          <span className="Suzanne-Collins">Suzanne Collins</span>
          <ul>
            <li>Comments</li>
            <li>Remove</li>
            <li>Edit</li>
          </ul>
        </div>
        <div className="medile-section">
          <div className="Oval-2" />
          <span className="Percent-Complete">
            64%
            {' '}
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
    </div>
  );
}
