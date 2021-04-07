import React from 'react';
import './Nav.scss';
import { navData } from './data';
import { Link } from 'react-router-dom';


const Navigation = () => {
  return (
    <div className={'nav-container'}>
      {
        navData.map((nav, index) => {
          return (
            <div key={index} className={nav.navTitle}>
              <Link to={nav.route} >{nav.title}</Link>
            </div>
          )
        })
      }
    </div>
  )
};

export default Navigation;
