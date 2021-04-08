import React from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';

import Header from './components/header/Header';
import BlogListPost from './Pages/BlogListPage/BlogListPage';
import BlogPostPage from './Pages/BlogPostPage/BlogPostPage';
import AddPostPage from './Pages/AddPostPage/AddPostPage';

const App = () => {
  return (
    <div>
      <Header/>
      <Switch>
        <Route
          exact
          path={'/'}
          render={(props) => <BlogListPost {...props} />}
        />
        
        <Route
          exact
          path={'/addpost'}
          render={(props) => <AddPostPage {...props} />}
        />
        <Route
          exact
          path={'/post:id'}
          render={(props) => <BlogPostPage {...props} />}
        />
        
      </Switch>
    </div>
  );
};

export default App;
