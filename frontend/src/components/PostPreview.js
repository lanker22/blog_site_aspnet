import React from 'react';

var PostPreview = (props) => {
    return (
    <div>
        <div className="post-preview">
          <a href="post.html">
            <h2 className="post-title">
              {props.Title}
            </h2>
          </a>
        <p className="post-meta">Posted on {props.Posted}</p>
        </div>
        <hr/>
    </div>
    );
}

export default PostPreview;