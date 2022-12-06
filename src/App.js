import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './pages/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './Components/Layout/Navbar/Navbar';
import Login from './pages/Auth/Login/Login';
import Register from './pages/Auth/Register/Register';
import AllCategory from './pages/AllCategory/AllCategory';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register/>}/>
          <Route path="/allcategory" element={<AllCategory/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
