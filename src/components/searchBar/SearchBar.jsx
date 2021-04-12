import React, { useState } from 'react';
import './SearchBar.scss';


const SearchBar = (props) => {
  const { search, setSearch, active, setActive } = props
  

  return (
    <div className={'searchBar-container'}>
      
      <i
        className="fas fa-search"
        onClick={() => setActive(!active)}
      />
      
      <input
        type="text"
        value={search}
        className={active ? 'active' : 'hidden'}
        onChange={(event => {
          setSearch(event.target.value)
        })}
      />
    
    </div>
  );
};

export default SearchBar;
