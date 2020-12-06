import React from 'react';
import { Link } from 'react-router-dom';

var AdminPostPreview = (props) => {

    // format the "timeCreated" datetime object for display on the site
    var posted = new Date(props.Posted);
    posted = new Intl.DateTimeFormat().format(posted);
    
    return (
    <div>
    <div className="post-preview">
      <Link to={`/admin/editpost/${props.keyId}`}>
      <h2 className="post-title">
          {props.Title}
        </h2>
        </Link>
    <p className="post-meta">Posted on {posted}</p>
    </div>
    <div className="row">
    <button className="btn-danger" onClick={() => props.DeletePost(props.keyId)}>Delete Post</button>
    </div>
    <hr/>
    </div>
    );
}

export default AdminPostPreview;