import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import AuthPage from './Authentication/AuthPage';
import HomePage from './Home/HomePage'; 
import StatsPage from './StatsPage';
import TrackersPage from './TrackersPage';
import JournalPromptPage from './JournalPrompt/JournalPromptPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/prompts" element={<JournalPromptPage />} />
        <Route path="/stats" element={<StatsPage />} />
        <Route path="/trackers" element={<TrackersPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
