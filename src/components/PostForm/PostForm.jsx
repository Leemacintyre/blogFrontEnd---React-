import React from 'react';
import './PostForm.scss';
import { Redirect, withRouter } from 'react-router';

const PostForm = (props) => {
  
  const { title, content, photo, postTitle, setContent, setPhoto, setTitle, redirect, submitHandler } = props
  
  if (redirect) {
    return <Redirect to={'/'}/>
  }
  
  return (
    <form action="" onSubmit={submitHandler}>
      <div className={'postForm-container'}>
        <div className={'postForm-heading'}>
          <p>{postTitle}</p>
        </div>
        <div className={'postForm-container-content'}>
          
          <div className={'postForm-content-container'}>
            <div className={'postForm-content'}>
              <label>Title</label>
              <input
                type="text"
                name={'title'}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
          </div>
          
          <div className={'postForm-content-container'}>
            <div className={'postForm-content'}>
              <label>Content</label>
              <textarea
                
                name={'content'}
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            
            </div>
          </div>
          
          <div className={'postForm-content-container'}>
            <div className={'postForm-content'}>
              <label>Photo</label>
              <input
                type="text"
                name={'photo'}
                value={photo}
                placeholder={'https://source.unsplash.com/random'}
                onChange={(e) => setPhoto(e.target.value)}
              />
            </div>
          </div>
        
        </div>
      
      </div>
      <div className={'postForm-button'}>
        <button type={'submit'} onClick={submitHandler}>submit</button>
      </div>
    </form>
  
  );
};

export default withRouter(PostForm);
