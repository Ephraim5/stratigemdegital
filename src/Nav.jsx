import  './Navbar.css';
import React from 'react'

const Nav = () => {
    return (
      <nav className="navbar">
        <div className="nav-container">
          <h1 className="logo">MyWebsite</h1>
          <div className="nav-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
          </div>
        </div>
      </nav>
    );
  };
 export default Nav;