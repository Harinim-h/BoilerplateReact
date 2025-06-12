import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from '../pages/Home';
import About from '../pages/About';
import Login from '../pages/Login';
import Register from '../pages/Register';  // import the Register page
import Dashboard from '../pages/Dashboard'; // import your Dashboard page

export default function AppRoutes() {
  return (
    <Router>
      <nav className="bg-gray-800 text-white p-6 flex items-center justify-between">
        <div className="flex space-x-12">
          <Link to="/" className="text-3xl font-semibold no-underline hover:no-underline space-x-12 text-[25px]">HOME_</Link>
          <Link to="/about" className="text-3xl font-semibold no-underline hover:no-underline text-[25px]">ABOUT</Link>
        </div>

        <div className="flex space-x-4">
          <Link
            to="/login"
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-md text-xl font-semibold no-underline border-2 border-white hover:border-blue-300 transition text-[25px]"
          >
            LOGIN
          </Link>
          
        </div>
      </nav>

      <div className="max-w-4xl mx-auto mt-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}
