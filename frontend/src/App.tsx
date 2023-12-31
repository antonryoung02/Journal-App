import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Auth from './Authentication/Auth';
import Home from './Home'; 
import JournalPromptPage from './JournalPrompt/JournalPromptPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/journalprompt" element={<JournalPromptPage />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
