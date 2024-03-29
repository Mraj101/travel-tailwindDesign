import React, { useState } from 'react';
import HeroImg from '../assets/hero.png';
import './css/navbar.css'; // Make sure to adjust the path based on your project structure

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('Home');
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleNavLinkClick = (link) => {
    setActiveLink(link);
    closeMenu();
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div>
      <nav className="md:p-6 md:px-16 font-mulish">
        <div className="flex items-center justify-between">
          <div className='pl-12 flex  justify-center items-center gap-8'>
          <img src={HeroImg} alt="Hero" className="ml-10 md:ml-0" />
          <p className='text-4xl font-bold'><span className=' text-orange-500 t'>Hero </span>Travel</p>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-black focus:outline-none"
            >
              ☰ 
            </button>
          </div>

          <ul
            className={`md:flex space-x-4 mr-20 gap-5 ${
              isMenuOpen ? 'block' : 'hidden'
            } md:block`}
          >
            <li>
              <a
                href="#"
                className={`text-black ${activeLink === 'Home' ? 'active' : ''}`}
                onClick={() => handleNavLinkClick('Home')}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`text-black ${activeLink === 'Package' ? 'active' : ''}`}
                onClick={() => handleNavLinkClick('Package')}
              >
                Package
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`text-black ${
                  activeLink === 'Testimonials' ? 'active' : ''
                }`}
                onClick={() => handleNavLinkClick('Testimonials')}
              >
                Testimonials
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`text-black ${activeLink === 'Blog' ? 'active' : ''}`}
                onClick={() => handleNavLinkClick('Blog')}
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`text-black ${activeLink === 'Contact' ? 'active' : ''}`}
                onClick={() => handleNavLinkClick('Contact')}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
