import React, { useState } from 'react';
import './SearchBar.scss';


const SearchBar = () => {
  
  const [active, setActive] = useState('true')
  console.log(active)
  return (
    <div className={'searchBar-container'}>
      
      <i
        className="fas fa-search"
        onClick={() => setActive(!active)}
        
      />
      
      <input
        type="text"
        className={active? 'hidden' : 'active'}
      />
      
    </div>
  );
};

export default SearchBar;
