import React from 'react';
import './Sidebar.css';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';


//I used an online tutorial to learn how to use react-burger-menu

export default props => {
  return (
    <div data-testid="sidebar">
      <Menu>
        <Link className="menu-item " to="/">
          Home
        </Link>

        <Link className="menu-item no-cursor" to="/">
          Gallery
        </Link>

        <Link className="menu-item no-cursor" to="/">
          About Us
        </Link>

        <Link className="menu-item no-cursor" to="/">
          Links
        </Link>

        <Link className="menu-item no-cursor" to="/">
          Contacts
        </Link>
      </Menu>
    </div>
  );
};
