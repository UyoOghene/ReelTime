import './App.css'
import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Fetchmovies from './pages/Fetchmovies';
import Details from './pages/Details';
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={< Fetchmovies />} />
          <Route path="/details" element={< Details />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
