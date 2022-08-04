import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <h1>Welcome To Sego React Dashboard  </h1>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        {/* <Route path="about" element={<About />} /> */}
      </Routes>
    </div>
  );
}

export default App;
