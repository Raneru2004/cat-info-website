import React from 'react';
import './Nav.css';
import MenuIcon from '@mui/icons-material/Menu';
import CatLogo from "../assets/Catlogo.png";
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import Sidebar from './Sidebar';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";



export default function Nav() {

  return (
    <div data-testid="nav" className='nav__wrapper'>
      <Sidebar/>
        <nav >
            <div  className='nav'>  
                  <div className='nav__logo--wrapper'>
                    <Link to="/">
                      <img src={CatLogo} alt='logo' className='nav__logo'></img>
                    </Link>
                  </div>
                
                  <div className='nav__links'>
                    <ul className='nav__link--list'>
                      <Link to="/">
                        <li className='nav__link'>HOME PAGE</li>
                      </Link>
                      <p className='slash'>/</p>

                      <Link to="/">   
                        <li className='nav__link no-cursor'>GALLERY</li>
                      </Link>
                      <p className='slash'>/</p>

                      <Link to="/"> 
                        <li className='nav__link no-cursor'>ABOUT US</li>
                      </Link>
                      <p className='slash'>/</p>
                      
                      <Link to="/">
                        <li className='nav__link no-cursor'>LINKS</li>
                      </Link>
                      <p className='slash'>/</p>

                      <Link to="/">
                        <li className='nav__link no-cursor'>CONTACTS</li>
                      </Link>
                    </ul>
                  </div>
                  
              </div>
          
        </nav>
      
    </div>
    
  )
};
