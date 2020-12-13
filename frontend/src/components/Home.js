import React, { useState, useEffect } from 'react';
import PostPreview from "./PostPreview";

var Home = () => {

    const [blogPosts, setBlogPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const url = "http://localhost:8080/api/";
            const response = await fetch(url);
            const data = await response.json();
            setBlogPosts(data);
        }
        fetchData();
    }, [])

    return (
    <div>
    <div className="container">
    <div className="row">
    <div className="col-lg-8 col-md-10 mx-auto">
        {blogPosts.map((blog) => (
            <PostPreview 
                key={blog.id} 
                keyId={blog.id} 
                Posted={blog.timeCreated} 
                Title={blog.title} 
                Content={blog.content} 
            />
        ))}
    </div>
    </div>
    </div>
    </div>
    );
}

export default Home;