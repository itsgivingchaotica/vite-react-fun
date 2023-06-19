import { useState, useEffect } from 'react'
import './App.css'
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Home from './pages/Home.jsx'
import Contacts from './pages/Contacts.jsx'
import * as com from './components'
import { withStyles } from '@mui/material/styles'

// const darkTheme = createTheme({
//   palette: {
//     mode: 'dark',
//   },
// });

const locationBackgroundMap = {
  '/': '../images/paint.jpg',
  '/contacts': '../images/splatter.jpg',
  '/about': '../images/abstract.jpg',
  // Add more locations and their corresponding background images
};

function App() {

  const [backgroundImage, setBackgroundImage] = useState('');

  useEffect(() => {
    // Update the background image based on the location
    const background = locationBackgroundMap[location.pathname];
    setBackgroundImage(background);
  }, [location.pathname]);


//   const theme = {
//   home: {
//     backgroundImage: 'url("./images/paint.jpg")',
//   },
//   contacts: {
//     backgroundImage: 'url("./images/splatter.jpg")',
//   },
//   // Add more pages and their background images as needed
// };

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