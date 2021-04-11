import React, { useState } from 'react';
import './BlogListPost.scss';


const BlogListPost = (props) => {
  
  const { content, createdAt, id, photo, title, updatedAt, history,deletePost } = props

  
  return (
    <div className={'post-container'}>
      <div className={'title-container'}>
        <div className={'post-title'}
             onClick={() => {
               history.push(`${id}`)
             }}
        >
          <p>{title}</p>
        </div>
        <div className={'post-content-controls'}>
          <div className={'post-content-edit'}
               onClick={() => {
                 history.push(`editpost/${id}`)
               }}
          >Edit
          </div>
          <div
            className={'post-content-delete'}
            onClick={() => deletePost(id)}
          >Delete
          </div>
        </div>
        <div className={'post-date'}>
          {createdAt.slice(0, 10) + ' - ' + createdAt.slice(12, 16)}
        </div>
      
      </div>
      
      <div className={'post-content'}
           onClick={() => {
             history.push(`${id}`)
           }}
      >
        <div className={'post-content-image'}>
          <img src={photo + `${'/'} ${id}`} alt="alt"/>
        </div>
        <div className={'post-content-text'}>
          <p>{content.slice(0, 300)}</p>
        </div>
      </div>
    
    </div>
  );
};

export default BlogListPost;
