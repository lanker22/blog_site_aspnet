import React from 'react';
import { useHistory, Link } from 'react-router-dom';

var AdminNavBar = () => {
    
    const history = useHistory();

    const requestOptions = {
      method: 'GET',
      credentials: "include"
    }
    
    const logOut = async(e) => {
        e.preventDefault();
        await fetch("http://localhost:8080/api/logout", requestOptions);
        history.replace("/login");
    }

    return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
        <div className="container">
        <a className="navbar-brand" href="index.html">Admin</a>
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu
            <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <Link to="/admin/new" className="nav-link">
                  Create Post
                </Link>
            </li>
            <li className="nav-item">
                <a href="" className="nav-link" onClick={logOut}>Logout</a>
            </li>
            </ul>
        </div>
        </div>
    </nav>
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
  </div>
    );
};

export default AdminNavBar;