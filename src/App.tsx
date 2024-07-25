import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import { DEFAULT_USER_ID } from './constants';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to={`/welcome/${DEFAULT_USER_ID}`} />} />
        <Route path="/welcome/:userId" element={<WelcomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
