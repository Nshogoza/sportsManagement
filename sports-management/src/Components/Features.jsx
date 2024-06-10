import React from 'react';
import './Features.css';
import image1 from '../Pictures/1_41_01.jpeg';
import image2 from '../Pictures/download (1).jpeg';
import image3 from '../Pictures/download.jpeg';

function Features() {
  return (
    <section className="features">
      <h2>Our Features</h2>
      <div className="feature-list">
        <div className="feature">
          <h3>Comprehensive Player Profiles</h3>
          <p>Detailed statistics and information.</p>
          <img src={image1} alt="" />
        </div>
        <div className="feature">
          <h3>Team Management</h3>
          <p>Tools to manage teams and schedules.</p>
          <img src={image2} alt="" />
        </div>
        <div className="feature">
          <h3>Scouting Reports</h3>
          <p>Up-to-date scouting information.</p>
          <img src={image3} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Features;
