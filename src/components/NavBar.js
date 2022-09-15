import './navBar.css';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div>
      <nav>
        <div className="logo-items">
          <h2 className="book">
            Book
            <span>Store</span>
          </h2>
          <ul>
            <li><Link className="a" to="/Books">Books</Link></li>
            <li><Link className="a category" to="/Categories">Categories</Link></li>
          </ul>
        </div>
        <div><div className="oval"><img src={`${process.env.PUBLIC_URL}images/profile-icon.svg`} alt="profile-icon" /></div></div>
      </nav>
    </div>
  );
}
