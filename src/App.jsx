import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Link täytyy tuoda tästä
import Home from './pages/Home';
import TrainingList from './pages/TrainingList';

import './App.css';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/home">Valitse Käyttäjä GITTESTI</Link> {/* Käytetään Link-komponenttia */}
      </nav>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/user/:name" element={<TrainingList />} />
      </Routes>
    </Router>
  );
}

export default App;
