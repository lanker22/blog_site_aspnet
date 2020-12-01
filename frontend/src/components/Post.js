import React from 'react';

var Post = (props) => {
    return (
    <div>
    <header className="masthead" style={{backgroundImage: "url('img/post-bg.jpg')"}}>
    <div className="overlay"></div>
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-md-10 mx-auto">
          <div className="post-heading">
            <h1>{props.Title}</h1>
            <span className="meta">{props.Posted}</span>
          </div>
        </div>
      </div>
    </div>
  </header>
    <article>
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-md-10 mx-auto">
        {props.Content}
        </div>
      </div>
    </div>
  </article>
  </div>
    );
}