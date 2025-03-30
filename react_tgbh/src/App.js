import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StudentDashboard from './StudentDashboard';
import ExamPage from './ExamPage';

function App() {
  return (
    <Router>
      <div className="App">

        <Routes>
          <Route path="/" element={<StudentDashboard />} />
          <Route path="/exam" element={<ExamPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
