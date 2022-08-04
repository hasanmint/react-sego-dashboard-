import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './components/Dashboard/Dashboard';
import Orders from './components/Dashboard/Main/Pages/Orders';
import Customers from './components/Dashboard/Main/Pages/Customers';
import Analytics from './components/Dashboard/Main/Pages/Analytics';
import Menus from './components/Dashboard/Main/Pages/Menus';
import NotFoundPage from './components/Dashboard/NotFoundPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/" element={<Dashboard></Dashboard>} />
        <Route path="/orders" element={<Orders></Orders>} />
        <Route path="/menus" element={<Menus></Menus>} />
        <Route path="/customers" element={<Customers></Customers>} />
        <Route path="/analytics" element={<Analytics></Analytics>} />
        <Route path="*" element={<NotFoundPage></NotFoundPage>} />

      </Routes>
    </div>
  );
}

export default App;
