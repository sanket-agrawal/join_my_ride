import React, { Component } from 'react'
import {} from 'react-bootstrap';
import AdminController from './AdminController';
import LoginComp from './LoginComp';


class AdminLogin extends Component {
  render() {
    return (
      <div>
      <h1>Admin Login</h1>  
      <LoginComp></LoginComp>  
      </div>
     
    )
  }
}

export default AdminLogin;