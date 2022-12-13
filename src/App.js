import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './pages/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './Components/Layout/Navbar/Navbar';
import Login from './pages/Auth/Login/Login';
import Register from './pages/Auth/Register/Register';
import AllCategory from './pages/AllCategory/AllCategory';
import AllBrands from './pages/AllBrands/AllBrands';
import Search from './pages/Search/Search';
import React from 'react'
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
          <Route path="/allbrands" element={<AllBrands/>}/>
          <Route path="/search" element={<Search/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
