import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env;

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Adwaith Mohan</h2>
        <p><a href="mailto:beingadwaith@gmail.com">beingadwaith@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
     <p>Hi, I'm Adwaith. I am a 
    <a href="https://www.google.co.in/search?q=vimal%20jyothi%20engineering%20college">Vimal Jyothi Engineering College B.TECH</a> graduate,
    and a Software Engineer with 3.6+ years of experience in web development. I bring a wealth of experience and expertise in creating robust and scalable web applications. 
    I have a deep understanding of front-end technologies such as HTML, CSS, JavaScript, and modern JavaScript frameworks like Angular and React.
</p>

      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Adwaith&apos;M </p>
    </section>
  </section>
);

export default SideBar;
