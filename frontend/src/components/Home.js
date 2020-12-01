import React from 'react';
import PostPreview from "./PostPreview";


var Home = () => {
    return (
    <div>
    <header className="masthead" style={{backgroundImage: "url('/home-bg.jpg')"}}>
    <div className="overlay"></div>
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-md-10 mx-auto">
          <div className="site-heading">
            <h1>George's Blog</h1>
            <span className="subheading">A Blog By George in C#</span>
          </div>
        </div>
      </div>
    </div>
  </header>
    <div className="container">
    <div className="row">
    <div className="col-lg-8 col-md-10 mx-auto">

    </div>
    </div>
    </div>
    </div>
    );
}

export default Home;