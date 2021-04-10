import React, { useState } from 'react';
import PostForm from '../../components/PostForm/PostForm';
import axios from 'axios';

const AddPostPage = () => {
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
  return (
    <div>
      <PostForm
        postTitle={'Create a new blog post!'}
      
      />
    </div>
  );
};

export default AddPostPage;
