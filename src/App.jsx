import { Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './login page/Login';
import Appintro from './App intro/appintro';
import MainPage from './page/MainPage';
import Searchresult from './page/searchresult';
function App() {
  return (

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Appintro" element={<Appintro />} />
        <Route path="/Navbar" element={<MainPage />} />
        <Route path="/searchresult" element={<Searchresult />} />
       
      </Routes>
  
  );
}

export default App;
