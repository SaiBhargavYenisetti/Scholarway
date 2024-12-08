// Home.js
import React, { useState } from 'react';
import './Home.css'
const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

const ChevronDownIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="home-page">
      <nav className="navbar">
        <div className="navbar-container">
          <h1 className="navbar-title">Scholarship Management</h1>
          
          <div className="nav-links desktop-nav">
            <a href="/" className="nav-link">Home</a>
            <div className="dropdown">
              <button className="nav-link dropdown-toggle">
                About <ChevronDownIcon />
              </button>
              <div className="dropdown-menu">
                <a href="/application" className="dropdown-item">Scholarship Application</a>
                <a href="/eligibility" className="dropdown-item">Eligibility Criteria</a>
                <a href="/faq" className="dropdown-item">FAQ</a>
              </div>
            </div>
            <a href="/services" className="nav-link">Services</a>
          </div>

          <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <MenuIcon />
          </button>
        </div>

        {isMenuOpen && (
          <div className="mobile-nav">
            <a href="/" className="mobile-nav-link">Home</a>
            <div className="mobile-dropdown">
              <button className="mobile-nav-link">About</button>
              <div className="mobile-dropdown-menu">
                <a href="/application" className="mobile-nav-link">Scholarship Application</a>
                <a href="/eligibility" className="mobile-nav-link">Eligibility Criteria</a>
                <a href="/faq" className="mobile-nav-link">FAQ</a>
              </div>
            </div>
            <a href="/services" className="mobile-nav-link">Services</a>
          </div>
        )}
      </nav>

      <main className="main-content">
        <div className="hero-section">
          <h1 className="hero-title">Welcome to Scholarship Management</h1>
          <p className="hero-subtitle">Empowering education through accessible scholarship opportunities</p>
          
          <div className="button-container">
            <a href="/login" className="button primary-button">Login</a>
            <a href="/signup" className="button secondary-button">Sign Up</a>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;