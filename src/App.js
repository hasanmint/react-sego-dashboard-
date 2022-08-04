import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/Dashboard/Main/About';
import Contact from './components/Dashboard/Main/Contact';
import Dashboard from './components/Dashboard/Dashboard';
import Orders from './components/Dashboard/Main/Pages/Orders';
import Customers from './components/Dashboard/Main/Pages/Customers';
import Analytics from './components/Dashboard/Main/Pages/Analytics';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="about" element={<About></About>} />
        <Route path="contact" element={<Contact></Contact>} />
        <Route path="/" element={<Dashboard></Dashboard>} />
        <Route path="/orders" element={<Orders></Orders>} />
        <Route path="/customers" element={<Customers></Customers>} />
        <Route path="/analytics" element={<Analytics></Analytics>} />
      </Routes>
    </div>
  );
}

export default App;
