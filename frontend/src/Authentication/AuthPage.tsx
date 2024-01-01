import React, {useState, useEffect} from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import './AuthPage.css';
import Login from './Login';
import Signup from './Signup';

/**
  *  Displays user login screen
  */
function AuthPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const navigate: NavigateFunction = useNavigate();

  return (
    <div>
      <h1>Journal App</h1>
      {isLogin && <Login  username={username} setUsername={setUsername} 
        password={password} setPassword={setPassword} navigate={navigate} />}

      {!isLogin && <Signup username={username} setUsername={setUsername} 
        password={password} setPassword={setPassword} navigate={navigate} />}
      <button onClick={() => setIsLogin(!isLogin)}>{isLogin ? "Sign Up" : "Login"}</button>

    </div>
    );
};

export default AuthPage;