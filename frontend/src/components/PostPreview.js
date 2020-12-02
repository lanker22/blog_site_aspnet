import React from 'react';
import { Link } from "react-router-dom";

var PostPreview = (props) => {

    // format the DateTime string received from API to "DD/MM/YYYY"
    var posted = new Date(props.Posted);
    posted = new Intl.DateTimeFormat().format(posted);

    return (
    <div>
        <div className="post-preview">
          <Link to={`/post/${props.keyId}`}>
          <h2 className="post-title">
              {props.Title}
            </h2>
          </Link>
        <p className="post-meta">Posted on {posted}</p>
        </div>
        <hr/>
    </div>
    );
}

export default PostPreview;