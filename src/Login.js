import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Login extends Component {
  render() {
    return (
        <form>
        <div className="form-group col-md-3">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter email"/>
        </div>
        <div className="form-group col-md-3">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" className="form-control"placeholder="Password"/>
        </div>
        <button type="submit" className="btn btn-primary" style={{backgroundColor: "orange",marginLeft:"14px"}}>Login</button>
        <button type="submit" className="btn btn-primary" style={{backgroundColor: "orange",marginLeft:"14px"}}>Register</button>
        </form>
    );
  }
}

export default Login;







