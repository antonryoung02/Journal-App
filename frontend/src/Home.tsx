import React from 'react';
import logo from './logo.svg';
import './Home.css';
import {Link} from 'react-router-dom';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/auth">Logout </Link>
      </nav>
      <h2> Sample website name</h2>
      <button>Button 1</button>
      <button>Button 2</button>
      </header>
      <p>This is the body content</p>
      
    </div>
  );
}

export default Home;
