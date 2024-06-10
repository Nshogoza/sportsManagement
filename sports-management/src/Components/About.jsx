import React from 'react';
import './About.css'
function About (){
  return (
    <div className='About'>
      <h2>About Us</h2>
      <section>
        <h3>Our Journey</h3>
        <p>
          Founded in 2005 by John Doe and Jane Smith, Elite Sports Management began with a vision to revolutionize athlete and sports organization management. Starting from a small office, we quickly established ourselves through personalized service and innovative approaches.
        </p>
      </section>
      <section>
        <h3>Growth and Expansion</h3>
        <p>
          Our dedication led to rapid growth, securing our first professional athlete contract in 2008. By 2012, we expanded internationally with offices in London, Asia, and South America, offering a global reach. Our team, composed of former athletes, coaches, and marketing professionals, collaborates to support our clients' success on and off the field.
        </p>
      </section>
      <section>
        <h3>Achievements</h3>
        <p>
          Elite Sports Management has represented top athletes, securing Olympic medals, world championships, and major endorsements. We leverage data analytics and digital media to enhance performance and brand building.
        </p>
      </section>
      <section>
        <h3>Our Vision</h3>
        <p>
          We remain committed to providing unparalleled support for athletes at all career stages. Our mission is to inspire and transform lives through sports, fostering the next generation of talent.
        </p>
        <p>Thank you for being a part of our journey.</p> <hr />
      </section>
    </div>
  );
};

export default About;
