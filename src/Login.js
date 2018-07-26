import React from 'react';
import { LoginForm } from 'react-form-login';
import { Link } from 'react-router-dom';
 
class Login extends React.Component {
  render() {
    return (
      <div className="loginform">
        <div className="loginforminput">
      <LoginForm
        onSubmit={(username, password, isRemember) => {
          // Sending AJAX request ...
          console.log(username, password, isRemember);
        }}
      />
      <p className="message">Nie masz konta? <Link to="/Register">Zarejestruj się!</Link></p>
      
      <p className="message">Nie pamiętasz hasła? <a href="#">Zresetuj hasło!</a></p>
      </div>
      </div>
    )
  }
}

export default Login;
