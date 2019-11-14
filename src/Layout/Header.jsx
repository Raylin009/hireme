import React from 'react';
import style from '../style.css';

const Header = (props) => (
  <header className={style.header}>
    <nav>
      <div className={style.logo}>    
        <i className="fas fa-brain fa-2x"></i>
        <a>Ray Lin</a>
      </div>
      <ul className={style.tabes}>
        <li><a>About Me</a></li>
        <li><a>Projects</a></li>
        <li><a>Resume</a></li>
        <li><a>Contact Me</a></li>
      </ul>
    </nav>
  </header>
);

export default Header;