import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer>
      <div data-testid="footer" className='footer__text'>
        <p>2022 &copy; <span className='divider'>|</span> PRIVACY POLICY</p>
      </div>
    </footer>
  )
}
