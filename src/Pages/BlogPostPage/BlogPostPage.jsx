import React, { useEffect, useState } from 'react';
import './BlogPostPage.scss';
import { withRouter } from 'react-router';
import axios from 'axios';

const BlogPostPage = (props) => {
  const { match } = props
  const { params } = match
  const { id } = params
  console.log(id)
  
  const baseUrl = `http://127.0.0.1:8000/api/posts/${id}`
  const [data, setData] = useState([])
  
  
  useEffect(() => {
    
    axios.get(baseUrl).then((response) => {
      setData(response.data)
    });
  }, []);
  
  
  return (
    <div>
      <div className={'blogpost-container'}>
        <div className={'blogpost-title'}>
          <p>
            {data.title}
          </p>
        </div>
        <div className={'blogpost-content'}>
          <div className={'blogpost-content-photo'}>
            <img src={data.photo} alt=""/>
          </div>
          <div className={'blogpost-content-content'}>
            <p>{data.content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(BlogPostPage);
