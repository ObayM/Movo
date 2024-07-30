import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Home from './Home.jsx';
import Search from './search.jsx';

const NavbarWrapper = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return !isHomePage ? <Navbar /> : null;
};

const App = () => {
  return (
    <Router>
      <NavbarWrapper />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
      </Routes>
    </Router>

  );
};

export default App;