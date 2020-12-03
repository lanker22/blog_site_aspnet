import React, { useState, useEffect, useCallback } from 'react';
import AdminPostPreview from "./AdminPostPreview";

var AdminHome = () => {
    
    const [blogPosts, setBlogPosts] = useState([]);

    const [wasBlogDeleted, setWasBlogDeleted] = useState(false);

    const deletePost = useCallback(async (blogId) => {
       await fetch(`http://localhost:5000/api/admin/delete/${blogId}`,
       {
           method:"DELETE",
           headers: {
               "Content-Type":"application/json"
        },
       })
       setWasBlogDeleted(true)
    }, [])

    useEffect(() => {
        const fetchData = async () => {
            const url = "http://localhost:5000/api/admin/";
            const response = await fetch(url);
            console.log(response);
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
