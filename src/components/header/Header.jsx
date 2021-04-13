import React, { useState } from 'react';
import './Header.scss';
import Navigation from '../nav/Nav';
import SearchBar from '../searchBar/SearchBar';

const Header = (props) => {
  const { search, setSearch } = props
  const [active, setActive] = useState(false)
  
  return (
    <div className='header-container'>
      <div className={active ? 'hidden' : 'active'}>
        <Navigation/>
      </div>
      <div className={'searchBar'}>
        <SearchBar
          search={search}
          setSearch={setSearch}
          active={active}
          setActive={setActive}
        />
      </div>
    </div>
  );
};

export default Header;
