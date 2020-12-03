import React from 'react';

var AdminPostPreview = (props) => {

    var posted = new Date(props.Posted);
    posted = new Intl.DateTimeFormat().format(posted);
    
    return (
    <div>
    <div className="post-preview">
      <h2 className="post-title">
          {props.Title}
        </h2>
    <p className="post-meta">Posted on {posted}</p>
    </div>
    <button className="btn-danger" onClick={() => props.DeletePost(props.keyId)}>Delete Post</button>
    <hr/>
    </div>
    );
}

export default AdminPostPreview;