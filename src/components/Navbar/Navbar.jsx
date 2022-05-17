import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import { Link, NavLink } from 'react-router-dom';
import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);


  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.gericht} alt="app logo" />
      </div>
      <ul className='app__navbar-links'>
        <li className='p__opensans'>
          <NavLink to="/restaurant-website/" >Home</NavLink>
        </li>
        <li className='p__opensans'>
          <NavLink className={({ isActive }) => isActive ? "isActive border" : ""} to="/restaurant-website/about">about us</NavLink>
        </li>
        <li className='p__opensans'>
          <NavLink className={({ isActive }) => isActive ? "isActive border" : ""} to="/restaurant-website/menu">Menu</NavLink>
        </li>
        <li className='p__opensans'>
          <NavLink  className={({ isActive }) => isActive ? "isActive border" : ""} to="/restaurant-website/chef">Chef</NavLink>
        </li>
        <li className='p__opensans'>
          <NavLink  className={({ isActive }) => isActive ? "isActive border" : ""} to="/restaurant-website/contact">contact us</NavLink>
        </li>
      </ul>
      <div className='app__navbar-login' >
        <Link to='' className='p__opensans disable'>Log In / Register</Link>
        <div />
        <Link to='' className='p__opensans disable'>Book Table</Link>
      </div>

      <div className='app__navbar-smallscreen'>
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />

        {toggleMenu && (

          <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className='app__navbar-smallscreen_links'>
              <li className='p__opensans'><a href="#home">Home</a></li>
              <li className='p__opensans'><a href="#about">about</a></li>
              <li className='p__opensans'><a href="#menu">Menu</a></li>
              <li className='p__opensans'><a href="#awards">awards</a></li>
              <li className='p__opensans'><a href="#contact">contact</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
