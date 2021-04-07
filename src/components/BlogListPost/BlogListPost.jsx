import React from 'react';
import './BlogListPost.scss';

const BlogListPost = (props) => {

  const { content, createdAt, id, photo, title, updatedAt } = props
  return (
    <div className={'post-container'} >
      <div className={'title-container'}>
        <div className={'post-title'}>
          <p>{title}</p>
        </div>
        <div className={'post-date'}>
          {createdAt.slice(0,10) + ' - ' + createdAt.slice(12, 16)}
        </div>
      </div>
      
      <div className={'post-content'}>
        <div className={'post-content-image'}>
          <img src={photo + `${'/'} ${id}`} alt="alt"/>
        </div>
        <div className={'post-content-text'}>
          <p>{content.slice(0,300)}</p>
        </div>
      </div>
    
    </div>
  );
};

export default BlogListPost;
