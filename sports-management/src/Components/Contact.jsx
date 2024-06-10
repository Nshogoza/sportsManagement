import React from 'react';
import './Contact.css';


function Contact() {
  return (
    <div className='contacts'>
      <h2>Contact Us</h2>
    <div className='garden'>
    <div className='info'>
        <h3>General Inquiries</h3>
        <p>Email: info@example.com</p>
        <p>Phone: +1 (123) 456-7890</p>
      </div>
      <div className='phone'>
        <h3>Customer Support</h3>
        <p>Email: support@example.com</p>
        <p>Phone: +1 (123) 456-7891</p>
        <p>Support Hours: Monday to Friday, 9 AM - 6 PM (EST)</p>
      </div>
      <div className='number'>
        <h3>Mailing Address</h3>
        <p>Example Company</p>
        <p>123 Example Street</p>
        <p>City, State, ZIP Code</p>
        <p>Country</p>
      </div>
      <div className='socialMedia'>
        <h3>Social Media</h3>
       
      </div>
    </div>
    </div>
  );
};

export default Contact;

