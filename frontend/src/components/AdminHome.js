import React, { useState, useEffect, useCallback } from 'react';
import AdminPostPreview from "./AdminPostPreview";

var AdminHome = () => {
    
    const [blogPosts, setBlogPosts] = useState([]);

    // boolean which triggers useEffect every time a post is deleted
    const [wasBlogDeleted, setWasBlogDeleted] = useState(false);

    // passed down to individual blog posts as a prop enabling that blog to be deleted
    const deletePost = useCallback(async (blogId) => {
       await fetch(`http://localhost:5000/api/admin/delete/${blogId}`,
       {
           method:"DELETE",
           headers: {
               "Content-Type":"application/json"
        },
        credentials: "include"
       })
       setWasBlogDeleted(true)
    }, [])

    // fetch all blog posts from API every time a post is deleted or page is loaded/refreshed
    useEffect(() => {
        const fetchData = async () => {
            const url = "https://localhost:5001/api/admin/";
            const response = await fetch(url, {credentials: "include"});
            const data = await response.json();
            setBlogPosts(data);        
        }   
        fetchData();
        setWasBlogDeleted(false);
    }, [wasBlogDeleted])

    return (
    <div>
    <div className="container">
    <div className="row">
    <div className="col-lg-8 col-md-10 mx-auto">
        {blogPosts.map((blog) => (
            <AdminPostPreview
                key={blog.id} 
                keyId={blog.id} 
                Posted={blog.timeCreated} 
                Title={blog.title} 
                Content={blog.content} 
                DeletePost={deletePost}
            />
        ))}
    </div>
    </div>
    </div>
    </div>
    );
}


export default AdminHome;
