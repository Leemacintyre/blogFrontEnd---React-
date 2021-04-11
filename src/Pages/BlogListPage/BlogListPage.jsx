import React, { useEffect, useState } from 'react';
import BlogListPost from '../../components/BlogListPost/BlogListPost';
import axios from 'axios';

const BlogListPage = (props) => {
  const {history, search, setSearch }=props
  const [postData, setPostData] = useState([])

  
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/posts').then((response) => {
      const { data } = response
      const postData = data.map((item) => {
        const {
          id,
          title,
          content,
          photo,
          created_at,
          updated_at,
        } = item
        return {
          id,
          title,
          content,
          photo,
          createdAt: created_at,
          updatedAt: updated_at,
        }
      });
      setPostData(postData)
    });
  }, [])
  
  console.log(props)
  console.log(postData)
  
  
  const deletePost = async (id) => {
    if (window.confirm('are you sure you want to delete me')) {
      await axios.delete(`http://127.0.0.1:8000/api/posts/${id}`)
      setPostData(postData.filter((post) => post.id !== id ));
  }}
  
  // const handleSearch = () => {
  //
  // }
  
  
  console.log(postData)
  return (
    
    <div>
      
      <div>
        
        {
          postData.map((post, index) => (
           (post.title.toUpperCase().includes(search.toUpperCase()) || post.content.toUpperCase().includes(search.toUpperCase())) && (<BlogListPost
              history={history}
              key={index}
              id={post.id}
              title={post.title}
              content={post.content}
              photo={post.photo}
              createdAt={post.createdAt}
              updatedAt={post.updatedAt}
              deletePost={deletePost}
            />)
          ))
        }
      </div>
    
    </div>
  );
};

export default BlogListPage;
