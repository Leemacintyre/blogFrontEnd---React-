import React, { useState } from 'react';
import PostForm from '../../components/PostForm/PostForm';
import axios from 'axios';
import {  withRouter } from 'react-router';



const EditPostPage = (props) => {
  
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [photo, setPhoto] = useState('https://source.unsplash.com/random');
  const [redirect, setRedirect] = useState(false);
  
  const { match } = props;
  const { params } = match;
  const { id } = params;
  
  const submitHandler = async (event) => {
    event.preventDefault();
    if (title.length > 0 && content.length > 0) {
      await axios.put(`http://127.0.0.1:8000/api/posts/${id}`, {
        title,
        content,
        photo
      });
      setRedirect(true);
    }
  }
  
  return (
    
    <div>
      <PostForm
        postTitle={'Edit blog post!'}
        title={title}
        setTitle={setTitle}
        content={content}
        setContent={setContent}
        photo={photo}
        setPhoto={setPhoto}
        redirect={redirect}
        setRedirect={setRedirect}
        submitHandler={submitHandler}
      />
    </div>
  );
};

export default withRouter(EditPostPage);
