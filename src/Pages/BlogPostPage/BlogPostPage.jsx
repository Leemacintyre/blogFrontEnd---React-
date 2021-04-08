import React from 'react';
import './BlogPostPage.scss';

const BlogPostPage = () => {
  return (
    <div>
      <div className={'blogpost-container'}>
        <div className={'blogpost-title'}>title</div>
        <div className={'blogpost-content'}>
          <div className={'blogpost-content-photo'}>photo</div>
          <div className={'blogpost-content-content'}>content</div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;
