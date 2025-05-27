import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import logo from './images/GroupSoupWhite.webp';
import ScrollToTop from './ScrollToTop';

const Home = lazy(() => import('./components/Home'));
const About = lazy(() => import('./components/About'));
const Contact = lazy(() => import('./components/Contact'));
const Register = lazy(() => import('./components/Register'));


function App() {

  return (

    <Router>

      <ScrollToTop />

      <div className={'App'}>
        <header>
          <section id='banner'>

            <section id='Brand'>
              <img src={logo} alt="GroupSoup logo" className='logo'/>
              <p className={'Slogan'}> GROUPSOUP </p>
            </section>

            <nav id='DesktopNav'>
              <Link className={'LinkStyles'} to="/">
                      <div>Home</div>
              </Link>
              <Link className={'LinkStyles'} to="/about">
                      <div>About</div>
              </Link>
              <Link className={'LinkStyles'} to="/register">
                      <div>Pre-<br/>Register</div>
              </Link>
              <Link className={'LinkStyles'} to="/contact">
                      <div>Contact</div>
              </Link>
            </nav>

            <button id='BurgerMenu'>
               <span className='visually-hidden'> Menu </span>
            </button>

          </section>

          <nav id='MobileNav'>
            <Link className={'LinkStyles'} to="/">
                      <div>Home</div>
            </Link>
            <Link className={'LinkStyles'} to="/about">
                    <div>About</div>
            </Link>
            <Link className={'LinkStyles'} to="/register">
                    <div>Pre-<br/>Register</div>
            </Link>
            <Link className={'LinkStyles'} to="/contact">
                    <div>Contact</div>
            </Link>
          </nav>
          
          {/* <nav id='MobileNav'>
            <button id='BurgerMenu'>Button</button>
            <div id='MobileLinks'>
              <Link className={'LinkStyles'} to="/">
                        <div>Home</div>
              </Link>
              <Link className={'LinkStyles'} to="/about">
                      <div>About</div>
              </Link>
              <Link className={'LinkStyles'} to="/register">
                      <div>Pre-<br/>Register</div>
              </Link>
              <Link className={'LinkStyles'} to="/contact">
                      <div>Contact</div>
              </Link>
            </div>
          </nav> */}

        </header>
        
        <main>

          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/register" element={<Register />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>

        </main>

      </div>
      
    </Router>
  );
}

export default App;
