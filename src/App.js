import { Routes, Route } from 'react-router-dom';
import Books from './components/Books';
import NavBar from './components/NavBar';
import './app.css';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Books />} />
      </Routes>
    </div>
  );
}

export default App;
