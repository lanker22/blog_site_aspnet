import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ErrorPage from './ErrorPage';

var Post = () => {

    const [blogPost, setBlogPost] = useState([]);

    const [didThrowError, setDidThrowError] = useState(false);

    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
          try {
            const url = `http://localhost:5000/api/${id}`;
            const response = await fetch(url);
            const data = await response.json();
            setBlogPost(data);
          } catch(err) {
            setDidThrowError(true)
          }
        }
        fetchData();
    })
    
    if(didThrowError === true) {
      return (
        <ErrorPage />
      )
    } else {
      return (
        <div>
        <header className="masthead" style={{backgroundImage: "url('img/post-bg.jpg')"}}>
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              <div className="post-heading">
                <h1>{blogPost.title}</h1>
                <span className="meta">{blogPost.content}</span>
              </div>
            </div>
          </div>
        </div>
      </header>
        <article>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
            {blogPost.timeCreated}
            </div>
          </div>
        </div>
      </article>
      </div>
        );  
    }
}

export default Post;