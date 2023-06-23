import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { pag, lay } from './components'
import {Helmet} from "react-helmet";


function App() {

  return (
    <Router>
      <div id="app">
      <Helmet>
          <meta charSet="utf-8" />
          <title>Grid</title>
          <link rel="icon" href="https://img.icons8.com/parakeet/48/grid.png" />
          <meta name="description" content="Grid Art" />
      </Helmet>
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