import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { pag, lay } from './components'


function App() {

  return (
    <Router>
      <div id="app">
      <div className="navbar">
        <lay.Navbar id="navbar"/>
        </div>
        <div id="background">
        <Routes>
          <Route path="/" element={<pag.Home />} />
          <Route path="/contacts" element={<pag.Contacts />} />
        </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App