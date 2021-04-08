import React, { useState } from 'react';
import './PostForm.scss';
import axios from 'axios';
import { Redirect } from 'react-router';

const PostForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [photo, setPhoto] = useState('https://source.unsplash.com/random');
  const [redirect,  setRedirect] = useState(false);
  
  const submitHandler = async (event) => {
    event.preventDefault();

    
    await axios.post('http://127.0.0.1:8000/api/posts', {
        title,
        content,
        photo
      });
      setRedirect(true);
  }
  if (redirect) {
    return <Redirect to={'/'} />
  }
  
  console.log(title)
  return (
    <form action="" onSubmit={submitHandler}>
      <div className={'postForm-container'}>
        <div className={'postForm-heading'}>
          <p>Create a new blog post!</p>
        </div>
        <div className={'postForm-container-content'}>
          
          <div className={'postForm-content-container'}>
            <div className={'postForm-content'}>
              <label>Title</label>
              <input
                type="text"
                name={'title'}
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
              />
            </div>
          </div>
          
          <div className={'postForm-content-container'}>
            <div className={'postForm-content'}>
              <label>Content</label>
              <textarea
                
                name={'content'}
                value={content}
                onChange={(e)=>setContent(e.target.value)}
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
                onChange={(e)=>setPhoto(e.target.value)}
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

export default PostForm;
