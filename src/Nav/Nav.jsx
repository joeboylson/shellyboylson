import React from 'react';
import { Link } from "react-router-dom";

// styles
import './Nav.scss'

const Nav = () => {
  return (
    <div id={'nav'}>
      
      <div id={'nav-links'}>
        <Link to={'/work'}>Work</Link>
        <Link to={'/about'}>About</Link>
        <Link to={'/resume'}>Resume</Link>
      </div>

      <div id={'logo'}>
        <p>logo</p>
      </div>  
    </div>
  );
}

export default Nav;
