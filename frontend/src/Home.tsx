import React from 'react';
import logo from './logo.svg';
import './Home.css';
import {Link} from 'react-router-dom';
import Navigation from './Navigation';

function Home() {
  return (
    <div className="App">
      <Navigation />
      <p>This is the body content</p>
      
    </div>
  );
}

export default Home;
