import React from 'react';
import './Nav.scss';
import { navData } from './data';


const Navigation = () => {
  return (
    <div className={'nav-container'}>
      {
        navData.map((nav, index) => {
          return (
            <div key={index} className={nav.navTitle}>
              <p>{nav.title}</p>
            </div>
          )
        })
      }
    </div>
  )
};

export default Navigation;
