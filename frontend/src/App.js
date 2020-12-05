import React from 'react';
import Home from "../src/components/Home";
import About from "../src/components/About";
import Contact from "../src/components/Contact";
import AdminLogin from "../src/components/AdminLogin";
import PublicRoute from "../src/components/PublicRoute";
import AdminRoute from "../src/components/AdminRoute";
import Post from "../src/components/Post";
import { Switch, BrowserRouter } from "react-router-dom";
import AdminHome from './components/AdminHome';
import NewPost from "./components/NewPost";


function App() {
  return (
      <div>
        <BrowserRouter>
          <Switch>
            <PublicRoute exact path="/" component={Home} />
            <PublicRoute exact path="/about" component={About} />
            <PublicRoute exact path="/contact" component={Contact} />
            <PublicRoute path="/post/:id" component={Post} />
            <PublicRoute exact path="/login" component={AdminLogin} />
            <AdminRoute exact path="/admin/home" component={AdminHome} />
            <AdminRoute exact path = "/admin/new" component={NewPost} />
          </Switch>
        </BrowserRouter>
      </div>
    );
}

export default App;
