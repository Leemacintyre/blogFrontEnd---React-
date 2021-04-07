import React from 'react';
import './Header.scss';
import Navigation from '../nav/Nav';
import SearchBar from '../searchBar/SearchBar';

const Header = () => {
  return (
    <div className='header-container'>
      <Navigation/>
      <SearchBar/>
    </div>
  );
};

export default Header;
