import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import logo from './images/GroupSoupWhite.png';
import Contact from './components/Contact';
import Register from './components/Register';

function App() {
  return (
    <Router>
      <div className={'App'}>
        <header id='banner'>
          <img src={logo} alt="GroupSoup logo" height={100}/>
          <p className={'Slogan'}>Putting the "Social" <br/> back into social media.</p>
          <nav>
            <Link className={'LinkStyles'} to="/">
                    <button>HOME</button>
            </Link>
            <Link className={'LinkStyles'} to="/about">
                    <button>ABOUT</button>
            </Link>
            <Link className={'LinkStyles'} to="/register">
                    <button>PRE-REGISTER</button>
            </Link>
            <Link className={'LinkStyles'} to="/contact">
                    <button>CONTACT</button>
            </Link>
          </nav>
        </header>
        
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/register" element={<Register />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
