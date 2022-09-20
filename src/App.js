import { Routes, Route } from 'react-router-dom';
import Books from './components/Books';
import NavBar from './components/NavBar';
import Categories from './components/Categories';
import './app.css';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
