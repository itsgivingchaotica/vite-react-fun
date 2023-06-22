import { useState, useEffect } from 'react'
import './App.css'
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Home from './components/pages/Home.jsx'
import Contacts from './components/pages/Contacts.jsx'
import * as com from './components'


function App() {

  return (
    <Router>
      <div id="app">
      <div className="navbar">
        <com.Navbar id="navbar"/>
        </div>
        <div id="background">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App