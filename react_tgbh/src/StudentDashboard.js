// src/StudentDashboard.js
import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { saveAs } from 'file-saver';
import './StudentDashboard.css';


const StudentDashboard = () => {
  const navigate = useNavigate();
  const [assignedSubjects, setAssignedSubjects] = useState([]);
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAssignedSubjects(prev => {
        if (!prev.includes('Physics')) {
          setNotification('New exam assigned: Physics');
          return [...prev, 'Physics'];
        }
        return prev;
      });
    }, 40000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (notification) {
      const hideNotification = setTimeout(() => {
        setNotification(null);
      }, 5000);

      return () => clearTimeout(hideNotification);
    }
  }, [notification]);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
  };

  const startExam = (subject) => {
    navigate(`/exam?subject=${encodeURIComponent(subject)}`);
  };

  const generateAIQuiz = async (subject) => {
    const prompt = `Generate a short quiz with 5 questions for ${subject}. Include 4 MCQs and 1 subjective question. Provide answers and options in JSON format.`;

    try {
      const response = await axios.post(
        'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent',
        { contents: [{ parts: [{ text: prompt }] }] },
        { params: { key: 'YOUR_GEMINI_API_KEY' } }
      );

      const quiz = response.data.candidates[0].content.parts[0].text;
      const blob = new Blob([quiz], { type: 'application/json' });
      saveAs(blob, `${subject}_AI_Quiz.json`);
      setNotification(`AI-generated quiz for ${subject} downloaded!`);
    } catch (error) {
      console.error('Gemini API Error:', error);
      setNotification('Error generating AI quiz.');
    }
  };

  return (
    <div className="dashboard">
      {notification && (
        <div className="notification">
          <div className="notification-content">
            <span>🔔</span>
            <p>{notification}</p>
          </div>
        </div>
      )}

      <div className="sidebar">
        <h2>STUDENT DASHBOARD</h2>
        <div className="profile">
          <img src="https://via.placeholder.com/80" alt="Student Profile" />
          <p><strong>{'Pranav Jambur'}</strong></p>
          <p>Email: {'jambur.pranav@gmail.com'}</p>
        </div>

        <nav>
          <ul>
            <li><a href="#assigned-exams" onClick={(e) => handleSmoothScroll(e, 'assigned-exams')}>Assigned Exams</a></li>
            <li><a href="#available-exams" onClick={(e) => handleSmoothScroll(e, 'available-exams')}>Example Exams</a></li>
            <li><a href="#test-scores" onClick={(e) => handleSmoothScroll(e, 'test-scores')}>Test Scores</a></li>
            <li><a href="#warnings" onClick={(e) => handleSmoothScroll(e, 'warnings')}>Warnings</a></li>
          </ul>
        </nav>

        <button className="logout-btn" onClick={() => { localStorage.removeItem('token'); navigate('/login'); }}>Logout</button>
      </div>

      <div className="main-content">
        <h1>Welcome, {'Pranav Jambur'}</h1>

        <div id="assigned-exams" className="section">
          <h3>Assigned Exams</h3>
          {assignedSubjects.length > 0 ? (
            <ul className="exam-list">
              {assignedSubjects.map(subject => (
                <li key={subject} className={subject === 'Physics' ? 'new-exam' : ''}>
                  {subject} {subject === 'Physics' && <span className="new-badge">NEW</span>}
                  <button className="start-btn" onClick={() => startExam(subject)}>Start</button>
                </li>
              ))}
            </ul>
          ) : (
            <p>No exams currently assigned.</p>
          )}
        </div>

        <div id="available-exams" className="section">
          <h3>Example Exams</h3>
          <ul className="exam-list">
            {['Mathematics', 'Science', 'History', 'English', 'Computer Science'].map(subject => (
              <li key={subject}>
                {subject}
                <button className="start-btn" onClick={() => startExam(subject)}>Start</button>
                <button className="ai-btn" onClick={() => generateAIQuiz(subject)}>✨ AI</button>
              </li>
            ))}
          </ul>
        </div>

        <div id="test-scores" className="section">
          <h3>{'Pranav V Jambur'}'s Test Scores (March 15, 2025)</h3>
          <table>
            <thead>
              <tr><th>Subject</th><th>Score</th><th>Date</th></tr>
            </thead>
            <tbody>
              <tr><td>Mathematics</td><td><div className="score-circle"><span>88%</span></div></td><td>March 15, 2025</td></tr>
              <tr><td>Science</td><td><div className="score-circle"><span>93%</span></div></td><td>March 15, 2025</td></tr>
            </tbody>
          </table>
        </div>

        <div id="warnings" className="section">
          <h3>Warnings Issued (March 15, 2025)</h3>
          <ul>
            <li>⚠ Idle detected for more than 10 seconds.</li>
            <li>⚠ Attempted to exit fullscreen mode.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
