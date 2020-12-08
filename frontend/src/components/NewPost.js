import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

var NewPost = () => {

    const history = useHistory();
    
    const [blogTitle, setBlogTitle] = useState("");

    const [blogContent, setBlogContent] = useState("");
    
    var requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          Title: blogTitle,
          Content: blogContent,
          TimeCreated: new Date().toISOString()
         }),
         credentials: "include"
      }
    
    const addNewPost = async (e) => {
        e.preventDefault();
        try {
            await fetch("http://localhost:5000/api/admin/new", requestOptions);
            history.push("/admin/home");
        } catch(err) {
            console.log(err)
        }
    }

    return (
    <div className="container">
    <div className="row">
    <div className="col-lg-8 col-md-10 mx-auto">
    <form onSubmit={addNewPost}>
    <div className = "form-group" id="newPost">
       <label htmlFor = "name" className="section-heading">Blog Title</label>
       <input type = "text" value={blogTitle} onChange={e => setBlogTitle(e.target.value)} className ="form-control" required/>
    </div>
    <div className = "form-group">
       <label htmlFor = "name" className="section-heading">Blog Content</label>
       <textarea value={blogContent} onChange={e => setBlogContent(e.target.value)} className = "form-control" rows = "3" required></textarea>
    </div>
    <button className="btn-success" type="submit">Add Post</button>
 </form>
 </div>
 </div>
 </div>
    )
}

export default NewPost;

