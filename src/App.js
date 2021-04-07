import React from 'react';
import './App.scss'
import {Switch, Route} from 'react-router-dom';

import Header from './components/header/Header';
import SearchBar from './components/searchBar/SearchBar';
import BlogPost from './components/BlogPost/BlogPost';
import BlogList from './Pages/BlogList/BlogList';

const App = () => {
  
  return (
    <div >
      <Header/>
      <Switch>
        <Route
          exact
          path={'/'}
          render={(props) => <BlogList {...props}/>}
        />
      </Switch>
      
      
    </div>
  );
};

export default App;
