import React from 'react';

var AdminLogin = () => {
    return (
    <div className="container">
    <div className="row">
      <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div className="card card-signin my-5">
          <div className="card-body">
            <h5 className="card-title text-center">Administrator Sign In</h5>
            <form className="form-signin">
              <div className="form-label-group">
                <input type="text" id="inputUserName" class="form-control" placeholder="User Name" required autofocus />
                <label for="inputUserName">User Name</label>
              </div>

              <div className="form-label-group">
                <input type="password" id="inputPassword" class="form-control" placeholder="Password" required />
                <label for="inputPassword">Password</label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div> 
    );
}

export default AdminLogin;