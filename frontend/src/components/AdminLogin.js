import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

var AdminLogin = () => {

    const history = useHistory();
    const [error, setError] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const requestOptions = {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        UserName: username,
        Password: password
       }),
       credentials:"include"
    }

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await fetch('https://localhost:5001/api/login', requestOptions)
        if(response.status !== 200) {
          const data = await response.json();
          var loginErrorMessage = data.error[0]
          throw new Error(loginErrorMessage)
        } else {
          history.push("/admin/home")  
        }
      } catch(err) {
        setError(err.message);
      }
    }

    return (
    <div className="container">
    <div className="row">
      <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div className="card card-signin my-5">
          <div className="card-body">
            <h5 className="card-title text-center">Administrator Sign In</h5>
            <p>{error}</p>
            <form className="form-signin" onSubmit={handleSubmit}>
              <div className="form-label-group">
                <input type="text" 
                      id="inputUserName" 
                      className="form-control" 
                      placeholder="User Name" 
                      value = {username}
                      onChange = {e => setUsername(e.target.value)}
                      required autoFocus />
                <label htmlFor="inputUserName">User Name</label>
              </div>
              <div className="form-label-group">
                <input type="password" 
                       id="inputPassword" 
                       className="form-control" 
                       placeholder="Password" 
                       value = {password}
                       onChange = {e => setPassword(e.target.value)}
                       required />
                <label htmlFor="inputPassword">Password</label>
              </div>
              <button type="submit" className="btn btn-primary">Log In</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div> 
    );
}

export default AdminLogin;