import React, { useState, useEffect,  } from 'react';
import { useHistory, useParams } from 'react-router-dom';

var UpdatePost = () => {

    const history = useHistory();
    
    const [blogTitle, setBlogTitle] = useState("");

    const [blogContent, setBlogContent] = useState("");

    const { id } = useParams();
    
    var requestOptions = {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          Id: id,
          Title: blogTitle,
          Content: blogContent
         }),
         credentials: "include",
      }

    useEffect(() => {
        const fetchData = async () => {
            const url = `http://localhost:5000/api/admin/${id}`;
            const response = await fetch(url, {credentials: "include"});
            const data = await response.json();
            setBlogTitle(data.title);
            setBlogContent(data.content);
        }
        fetchData();
    }, [id])
    
    const updatePost = async (e) => {
        e.preventDefault();
        try {
            await fetch(`http://localhost:5000/api/admin/editpost/${id}`, requestOptions);    
        } catch(err) {
            console.log(err);
        }
        history.push("/admin/home");
    }

    return (
    <div className="container">
    <div className="row">
    <div className="col-lg-8 col-md-10 mx-auto">
    <form onSubmit={updatePost}>
    <div className = "form-group" id="updatePost">
       <label htmlFor = "name" className="section-heading">Blog Title</label>
       <input type = "text" value={blogTitle} onChange={e => setBlogTitle(e.target.value)} className ="form-control" required/>
    </div>
    <div className = "form-group">
       <label htmlFor = "name" className="section-heading">Blog Content</label>
       <textarea value={blogContent} onChange={e => setBlogContent(e.target.value)} className = "form-control" rows = "3" required></textarea>
    </div>
    <button className="btn-success" type="submit">Update Post</button>
 </form>
 </div>
 </div>
 </div>
    )
}

export default UpdatePost;

