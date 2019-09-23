import React from 'react';
import Header from './Layout/Header.jsx';
import Footer from './Layout/Footer.jsx';
import Landing from './Components/Landing.jsx';
import AboutMe from './Components/AboutMe.jsx';
import Projects from './Components/Projects.jsx';
import Contact from './Components/Contact.jsx';
import style from './style.css';

const App = () => (
  <div className={`${style.wraper}`}>
    <Header />
    <Landing />
    <AboutMe />
    <Projects />
    <Contact />
    <Footer />
  </div>
)

export default App;
