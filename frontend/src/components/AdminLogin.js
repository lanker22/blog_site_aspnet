import React, { useState } from 'react';

var AdminLogin = () => {

    const [errors, setErrors] = useState([]);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        UserName: username,
        Password: password
       }),
       credentials: 'include'
    }

    const handleSubmit = async (e) => {
      e.preventDefault();
      const response = await fetch('http://localhost:5000/api/login', requestOptions)
      const data = await response.json();
      console.log(data);
      if(data.errors) {
        setErrors(data.errors[""][0])
      }
    }

    return (
    <div className="container">
    <div className="row">
      <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div className="card card-signin my-5">
          <div className="card-body">
            <h5 className="card-title text-center">Administrator Sign In</h5>
            <p>{errors}</p>
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