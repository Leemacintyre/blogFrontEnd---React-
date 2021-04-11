import React, { useState } from 'react';
import './Header.scss';
import Navigation from '../nav/Nav';
import SearchBar from '../searchBar/SearchBar';

const Header = (props) => {
  const { search, setSearch } = props
  
  return (
    <div className='header-container'>
      <Navigation/>
      <SearchBar
        search={search}
        setSearch={setSearch}
      />
    </div>
  );
};

export default Header;
