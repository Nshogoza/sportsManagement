import React from 'react';
import './HeroSection.css';
import love from '../Pictures/Newsletters - Mindset Training.jpeg';
import { Link } from 'react-router-dom';
function HeroSection() {
  return (
    <section className="hero">
      <img src={love} alt="" />
      <h1>Welcome to Sports Management</h1>
      <p>Managing the stars of tomorrow, today.</p>
      <button><Link to={'/login'}>Get started</Link></button>
    </section>
  );
}

export default HeroSection;
