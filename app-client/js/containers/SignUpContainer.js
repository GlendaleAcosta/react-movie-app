import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signUp } from 'actions/userActions';

class SignUpContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleEmail = (e) => {
    this.setState({ email: e.target.value });
  }

  handlePassword = (e) => {
    this.setState({ password: e.target.value });
  }

  signUp = (e) => {
    e.preventDefault();
    // this.props.history.push(`/movies/search/${this.state.movieQuery}`);
    const userInfo = {
      email: this.state.email,
      password: this.state.password,
    }
    this.props.dispatch(signUp(userInfo));
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <p className="lead">
              Sign up!
            </p>
            <form onSubmit={this.signUp}>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  value={this.state.email}
                  onChange={this.handleEmail}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password..."
                  value={this.state.password}
                  onChange={this.handlePassword}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
{/* <div className="container">
          <form onSubmit={this.signUp}>
            <div className="form-group row">
              <div className="col-sm-10">
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail3"
                  placeholder="Email" 
                  value={this.state.email}
                  onChange={this.handleEmail}
                />
              </div>
              <div className="col-sm-10">
                <input
                  type="password"
                  className="form-control"
                  id="inputEmail3"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.handlePassword}
                />
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </form>
        </div> */}


function mapStateToProps(state) {
  return {
    userReducer: state.userReducer,
  };
}
// function matchDispatchToProps(dispatch) {
//   return bindActionCreators({ getMovies });
// }
export default connect(mapStateToProps)(SignUpContainer);