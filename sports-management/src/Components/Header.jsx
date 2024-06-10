import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
import headerImage from '../Pictures/header.jpg';

function Header() {

  return (
    <header className="header">
      <div className="logo">
        <img src={headerImage} alt="Header" />
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
          <Link to="/Join">Join</Link>
            
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
