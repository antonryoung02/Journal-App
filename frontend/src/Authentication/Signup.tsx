import React, {useState} from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import {handleCredentialSubmit, sendCredentials, LoginProps} from './utils';
/**
  * Displays and submits sign up form
  */
const Signup:React.FC<LoginProps> = ({ username, setUsername, password, setPassword, navigate }) => {
    const [confirmPassword, setConfirmPassword] = useState('');

    function handleSubmit(e:React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if(password !== confirmPassword) {
            console.log("Passwords don't match!");
            return;
        }
        let authData = {url:"http://localhost:8000/credentials/signup", credentials:{username:username, password:password}};
        handleCredentialSubmit(authData, navigate, sendCredentials);
    }

    return (
        <form className="login-form" onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" onChange={(e) => setUsername(e.target.value)} />
    
          <label htmlFor="password">Password</label>
          <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} />
    
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="password" name="confirmPassword" onChange={(e) => setConfirmPassword(e.target.value)} />
    
          <button type="submit">Submit</button>
        </form>
      );
    };

  export default Signup;