import React, {useState} from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import {handleCredentialSubmit, sendCredentials, LoginProps} from './AuthenticationUtils';
/**
  * Displays and submits login form
  */
const Login:React.FC<LoginProps> = ({ username, setUsername, password, setPassword, navigate }) => {

    function handleSubmit(e:React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        let authData = {url:"http://localhost:8000/credentials/login", credentials:{username:username, password:password}};
        handleCredentialSubmit(authData, navigate, sendCredentials)
    }

    return (
        <form className="login-form" onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" onChange={(e) => setUsername(e.target.value)} />
    
          <label htmlFor="password">Password</label>
          <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} />
    
          <button type="submit">Submit</button>
        </form>
      );
    };

export default Login;
