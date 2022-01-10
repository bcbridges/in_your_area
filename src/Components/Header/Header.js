import React from 'react';
import './Header.css'

export default function Header () {
    return (
        <div className="header">
          <div className='innerHeader'>
            <img src='https://vivaxpros.com/wp-content/themes/bones2017/library/images/headerlogo400x105.png'></img>
            <div className='phoneContainer'>
              <p className='location'>Denver</p>
              <a className='phoneNumber'>720-331-9735</a>
              <p className='location'>Choose another location</p>
            </div>
          </div>
          <nav className='mainNav'>
              <ul className='navList'>
                  <li>Why Vivax</li>
                  <li>Meet Our Team</li>
                  <li>Services</li>
                  <li>In Your Area</li>
                  <li>Contact</li>
                  <li>Careers</li>
                  <li>Warranty Claim</li>
              </ul>
          </nav>
        </div>
    );
};