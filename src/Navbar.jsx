import { FaBars } from 'react-icons/fa';
import { links, social } from './data';
import logo from './logo.svg';
import { useEffect, useRef, useState } from 'react';

const Navbar = () => {
  const [navIsOpen, setNavIsOpen] = useState(false);

  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const toggleNav = () => {
    setNavIsOpen(!navIsOpen);
  };

  const linkStyles = {
    height: navIsOpen
      ? `${linksRef.current.getBoundingClientRect().height}px`
      : '0px',
  };

  return (
    <nav>
      <div className='nav-center'>
        {/* nav header */}
        <div className='nav-header'>
          <img src={logo} alt='logo' className='logo' />
          <button className='nav-toggle' onClick={toggleNav}>
            <FaBars />
          </button>
        </div>

        {/* links container */}
        <div
          className='links-container'
          ref={linksContainerRef}
          style={linkStyles}
        >
          {/* links */}
          <ul className='links' ref={linksRef}>
            {links.map(({ id, url, text }) => {
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>

        {/* social media links */}
        <ul className='social-icons'>
          {social.map(({ id, url, icon }) => {
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
