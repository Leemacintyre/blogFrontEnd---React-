import React, { useState } from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';

import Header from './components/header/Header';
import BlogListPost from './Pages/BlogListPage/BlogListPage';
import BlogPostPage from './Pages/BlogPostPage/BlogPostPage';
import AddPostPage from './Pages/AddPostPage/AddPostPage';
import EditPostPage from './Pages/EditPostPage/EditPostPage';

const App = (props) => {
  const [search, setSearch] = useState('')
  
  return (
    <div>
      <Header
        search={search}
        setSearch={setSearch}
      />
      <Switch>
        <Route
          exact
          path={'/'}
          render={(props) =>
            <BlogListPost {...props}
                          search={search}
                          setSearch={setSearch}/>}
        />
        
        <Route
          
          path={'/addpost'}
          render={(props) => <AddPostPage {...props} />}
        />
        <Route
          exact
          path={'/:id'}
          render={(props) => <BlogPostPage {...props}
          />}
        />
        <Route
          exact
          path={'/editpost/:id'}
          render={(props) => <EditPostPage {...props} />}
        />
      
      </Switch>
    </div>
  );
};

export default App;
