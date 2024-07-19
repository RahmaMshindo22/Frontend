import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import ProductList from './components/ProductList';
import Orders from './components/Orders';
import SignUp from './components/SignUp';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={<Login />} />
        <Route path="Home" element={<Home />} />
          <Route path="/ProductList" element={<ProductList />} />
          <Route path="/Orders" element={<Orders />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
