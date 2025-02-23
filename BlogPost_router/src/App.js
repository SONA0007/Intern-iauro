import { BrowserRouter, Link, Route, Routes } from 'react-router';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Vans from './pages/Vans';

function App() {
  return (
  <BrowserRouter>
  
  <header>
    <Link to="/"> <h2>#MyBlogs</h2> </Link>
      <nav>
        <Link to="/about"><h3>About</h3> </Link>
      </nav>
      <nav>
      <Link to="/vans"><h3>Vans</h3> </Link>
      </nav>
    </header>

    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/vans" element={<Vans/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
