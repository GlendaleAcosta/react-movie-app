import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="push-sm-2 col-sm-10">
        <div className="container">
          <form>
            <div className="form-group row">
              <div className="col-sm-10">
                <input type="email" className="form-control" id="inputEmail3" placeholder="Email" />
              </div>
              <div className="col-sm-10">
                <input type="password" className="form-control" id="inputEmail3" placeholder="Password" />
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
