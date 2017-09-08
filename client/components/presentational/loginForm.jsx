import React from 'react';
import { Link } from 'react-router-dom';
import Container from './container';
import VisitorNav from './visitornav';

const Login = (props) => {
  let loginValue = '';
  if (props.loading) {
    loginValue = 'Loging in...';
  } else {
    loginValue = 'Login';
  } 
  return (
    <div>
      <VisitorNav />
      <Container>
      <div className="col s12 l6 offset-l3 component-container " >
      <h3 className="header center grey-text" >Login</h3>
      <p className="red-text"> {props.error} </p>
      <form method="POST" onSubmit={props.handleSubmit.bind(this)} >
        <div className="input-field">
          <input type="text" name="username" id="username" onChange={props.handleChange.bind(this)}/>
          <label htmlFor="username"> Username</label>
        </div> 
        <div className="input-field">
          <input type="password" name="password" id="password" onChange={props.handleChange.bind(this)}/>
          <label htmlFor="password">Password</label>
        </div>
        <p className="row"> <input type="submit" value={loginValue} className="btn blue col s8 offset-s2" />
        </p>
        
        <p className="center">
          <span> Don't have an account?</span> 
          <Link to="/signup" className="waves-effect"> Signup </Link>
        </p>
        <p className="center">
          <Link to="/password_reset" className="waves-effect">Forgot password</Link>
        </p>
      </form>
      </div>
      </Container>
    </div>
  );
}
export default Login;
