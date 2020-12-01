import React from 'react';
import Home from "../src/components/Home";
import NavBar from "../src/components/NavBar";
import About from "../src/components/About";
import Contact from "../src/components/Contact";
import AdminLogin from "../src/components/AdminLogin";
import { BrowserRouter, Route } from "react-router-dom";


function App() {
  return (
      <div>
        <NavBar />
        <BrowserRouter>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/admin/login" component={AdminLogin} />
        </BrowserRouter>
      </div>
    );
}

export default App;
