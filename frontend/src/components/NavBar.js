import React from 'react';
import { Link } from "react-router-dom"

var NavBar = () => {
    return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
        <div className="container">
        <Link to={`/`} className="navbar-brand">George's Blog</Link>
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu
            <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
            <li className="nav-item">
            <Link to={`/`} className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
            <Link to={`/about`} className="nav-link">About</Link>
            </li>
            <li className="nav-item">
            <Link to={`/contact`} className="nav-link">Contact</Link>
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
}

export default NavBar;