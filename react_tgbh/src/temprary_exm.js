



// import React, { useState, useEffect, useCallback } from 'react';
// import './ExamPage.css';

// const questionsData = {
//   "Mathematics": [
//     { question: "What is 2 + 2?", options: ["3", "4", "5", "6"], answer: "4", type: "mcq" },
//     { question: "Solve for x: 3x = 12", options: ["3", "4", "5", "6"], answer: "4", type: "mcq" },
//     { question: "Explain the Pythagorean theorem.", type: "subjective" }
//   ],
//   "Science": [
//     { question: "What is the chemical symbol for water?", options: ["O2", "CO2", "H2O", "NaCl"], answer: "H2O", type: "mcq" },
//     { question: "Which planet is known as the Red Planet?", options: ["Earth", "Mars", "Jupiter", "Saturn"], answer: "Mars", type: "mcq" },
//     { question: "Describe the process of photosynthesis.", type: "subjective" }
//   ]
// };

// const getDummyRiskScore = () => Math.floor(Math.random() * 101);

// // Warning Notification Component
// const WarningNotification = ({ message, level, onDismiss }) => {
//   return (
//     <div className="warning-overlay">
//       <div className={`warning-notification ${level || 'warning'}`}>
//         <div className="warning-content">
//           <div className="warning-icon">
//             {level === 'danger' ? '🚨' : '⚠️'}
//           </div>
//           <div className="warning-message">
//             {message}
//           </div>
//         </div>
//         <button className="warning-button" onClick={onDismiss}>OK</button>
//       </div>
//     </div>
//   );
// };

// const ExamPage = () => {
//   const [subject, setSubject] = useState('');
//   const [questions, setQuestions] = useState([]);
//   const [attempted, setAttempted] = useState(0);
//   const [answers, setAnswers] = useState({});
//   const [score, setScore] = useState(null);
//   const [riskScore, setRiskScore] = useState(0);
//   const [activeWarning, setActiveWarning] = useState(null);
//   const [examStarted, setExamStarted] = useState(false);
//   const [timeLeft, setTimeLeft] = useState(3600); // 1 hour in seconds
//   const [isLocked, setIsLocked] = useState(false);
//   const [examOver, setExamOver] = useState(false);

//   // Add a warning notification
//   const addWarning = useCallback((text, level = 'warning') => {
//     setActiveWarning({ text, level });
//     setIsLocked(level === 'danger'); // Lock inputs only for danger-level warnings
//   }, []);

//   // Dismiss the warning notification
//   const dismissWarning = useCallback(() => {
//     setActiveWarning(null);
//     setIsLocked(false);
//   }, []);

//   // Test warning
//   useEffect(() => {
//     setTimeout(() => {
//       addWarning('This is a test warning message', 'warning');
//     }, 2000);
//   }, [addWarning]);

//   useEffect(() => {
//     const params = new URLSearchParams(window.location.search);
//     const subjectFromURL = params.get('subject');
//     setSubject(subjectFromURL || 'Unknown');
//     setQuestions(questionsData[subjectFromURL] || []);
//   }, []);

//   useEffect(() => {
//     document.title = `${subject} Exam`;

//     const handleFullscreenChange = () => {
//       if (!document.fullscreenElement) {
//         addWarning('⚠️ You have exited fullscreen mode. Please return immediately.', 'warning');
//       }
//     };

//     const handleResize = () => {
//       if (window.innerWidth < screen.width || window.innerHeight < screen.height) {
//         addWarning('⚠️ Split screen mode is not allowed during the exam. Please return to fullscreen mode.', 'warning');
//       }
//     };

//     document.addEventListener('fullscreenchange', handleFullscreenChange);
//     document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
//     document.addEventListener('mozfullscreenchange', handleFullscreenChange);
//     document.addEventListener('MSFullscreenChange', handleFullscreenChange);
//     window.addEventListener('resize', handleResize);

//     return () => {
//       // Remove event listeners
//       document.removeEventListener('fullscreenchange', handleFullscreenChange);
//       document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
//       document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
//       document.removeEventListener('MSFullscreenChange', handleFullscreenChange);
//       window.removeEventListener('resize', handleResize);

//       // Exit fullscreen mode when component unmounts
//       if (document.fullscreenElement) {
//         if (document.exitFullscreen) {
//           document.exitFullscreen();
//         } else if (document.mozCancelFullScreen) { /* Firefox */
//           document.mozCancelFullScreen();
//         } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
//           document.webkitExitFullscreen();
//         } else if (document.msExitFullscreen) { /* IE/Edge */
//           document.msExitFullscreen();
//         }
//       }
//     };
//   }, [subject, addWarning]);

//   const handleRiskScore = useCallback((score) => {
//     if (score >= 40 && score < 70) {
//       addWarning('⚠️ Suspicious behavior detected. Please focus on your exam.', 'warning');
//     } else if (score >= 70) {
//       addWarning('🚨 High-risk behavior detected! Your activity is being monitored.', 'danger');
//     }
//   }, [addWarning]);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       const newRiskScore = getDummyRiskScore();
//       setRiskScore(newRiskScore);
//       handleRiskScore(newRiskScore);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [handleRiskScore]);

//   const handleSubmit = useCallback(() => {
//     if (!isLocked) {
//       let scoreCount = 0;
//       questions.forEach((q, index) => {
//         if (q.type === "mcq" && answers[index] === q.answer) {
//           scoreCount++;
//         }
//       });
//       setScore(`${scoreCount} / ${questions.length}`);
//       setIsLocked(true);
//       setExamOver(true);

//       // Exit fullscreen mode when exam is submitted
//       if (document.fullscreenElement) {
//         if (document.exitFullscreen) {
//           document.exitFullscreen();
//         } else if (document.mozCancelFullScreen) { /* Firefox */
//           document.mozCancelFullScreen();
//         } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
//           document.webkitExitFullscreen();
//         } else if (document.msExitFullscreen) { /* IE/Edge */
//           document.msExitFullscreen();
//         }
//       }
//     }
//   }, [answers, questions, isLocked]);

//   useEffect(() => {
//     if (examStarted) {
//       const timer = setInterval(() => {
//         setTimeLeft(prevTime => {
//           if (prevTime <= 1) {
//             clearInterval(timer);
//             handleSubmit();
//             return 0;
//           }
//           return prevTime - 1;
//         });
//       }, 1000);

//       return () => clearInterval(timer);
//     }
//   }, [examStarted, handleSubmit]);

//   const handleOptionSelect = (index, option) => {
//     if (!isLocked) {
//       setAnswers((prev) => ({ ...prev, [index]: option }));
//       updateAttemptedCount();
//     }
//   };

//   const handleSubjectiveAnswer = (index, value) => {
//     if (!isLocked) {
//       setAnswers((prev) => ({ ...prev, [index]: value }));
//       updateAttemptedCount();
//     }
//   };

//   const updateAttemptedCount = () => {
//     const attemptedCount = Object.values(answers).filter(Boolean).length;
//     setAttempted(attemptedCount);
//   };

//   const startExam = () => {
//     setExamStarted(true);

//     // Request fullscreen mode
//     if (document.documentElement.requestFullscreen) {
//       document.documentElement.requestFullscreen();
//     } else if (document.documentElement.mozRequestFullScreen) { /* Firefox */
//       document.documentElement.mozRequestFullScreen();
//     } else if (document.documentElement.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
//       document.documentElement.webkitRequestFullscreen();
//     } else if (document.documentElement.msRequestFullscreen) { /* IE/Edge */
//       document.documentElement.msRequestFullscreen();
//     }

//     // Disable ESC key to prevent exiting fullscreen
//     document.addEventListener('keydown', handleKeyDown);

//     // Add event listener for window blur
//     window.addEventListener('blur', handleWindowBlur);
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === 'Escape') {
//       e.preventDefault();
//       addWarning('⚠️ Pressing the Escape key is not allowed during the exam.', 'warning');
//     }
//   };

//   const handleWindowBlur = () => {
//     addWarning('⚠️ You have switched away from the exam window. Please return immediately.', 'warning');
//   };

//   const formatTime = (seconds) => {
//     const minutes = Math.floor(seconds / 60);
//     const remainingSeconds = seconds % 60;
//     return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
//   };

//   if (examOver) {
//     // Extract the numeric score for celebration message
//     const scoreValues = score ? score.split(' / ') : [0, 0];
//     const scoreNumber = parseInt(scoreValues[0], 10);
//     const totalQuestions = parseInt(scoreValues[1], 10);
//     const percentage = totalQuestions > 0 ? (scoreNumber / totalQuestions) * 100 : 0;
    
//     let celebrationMessage = "";
//     if (percentage >= 90) {
//       celebrationMessage = "Outstanding! Excellent performance!";
//     } else if (percentage >= 75) {
//       celebrationMessage = "Great job! Well done!";
//     } else if (percentage >= 60) {
//       celebrationMessage = "Good work! Keep it up!";
//     } else if (percentage >= 40) {
//       celebrationMessage = "You passed! Keep studying!";
//     } else {
//       celebrationMessage = "More practice needed. Don't give up!";
//     }

//     return (
//       <div className="exam-over-container">
//         <div className="exam-over">
//           <div className="confetti-overlay"></div>
//           <div className="exam-result-card">
//             <h2>Exam Completed!</h2>
//             <div className="score-display">
//               <div className="score-circle">
//                 <span className="score-text">{score}</span>
//               </div>
//             </div>
//             <p className="celebration-message">{celebrationMessage}</p>
//             <p className="subject-name">{subject}</p>
//             <button 
//               className="exit-button" 
//               onClick={() => window.location.href = 'http://localhost:3000/'}
//             >
//               Return to Dashboard
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   if (!examStarted) {
//     return (
//       <div id="exam-container">
//         <h1>{subject} Exam</h1>
//         <div className="exam-rules">
//           <h2>General Exam Rules</h2>
//           <ul>
//             <li>No cheating or using unauthorized materials.</li>
//             <li>Stay focused and avoid distractions.</li>
//             <li>Do not leave the fullscreen mode during the exam.</li>
//             <li>Ensure a stable internet connection.</li>
//             <li>Submit your answers before the time runs out.</li>
//           </ul>
//         </div>
//         <button onClick={startExam} style={{ margin: '10px', padding: '8px 16px', background: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
//           Start Exam
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div id="exam-container">
//       <h1>{subject} Exam</h1>

//       <div className="status-bar">
//         <p><strong>Total Questions:</strong> {questions.length}</p>
//         <p><strong>Attempted:</strong> {attempted}</p>
//         <p><strong>Remaining:</strong> {questions.length - attempted}</p>
//         <p><strong>Risk Score:</strong> {riskScore}</p>
//         <p><strong>Time Left:</strong> {formatTime(timeLeft)}</p>
//       </div>

//       {activeWarning && (
//         <WarningNotification 
//           message={activeWarning.text}
//           level={activeWarning.level}
//           onDismiss={dismissWarning}
//         />
//       )}

//       <div id="questions-container">
//         {questions.map((q, index) => (
//           <div key={index} className="question">
//             <h3>{index + 1}. {q.question}</h3>
//             {q.type === 'mcq' ? (
//               <div className="options">
//                 {q.options.map((option) => (
//                   <label key={option}>
//                     <input
//                       type="radio"
//                       name={`q${index}`}
//                       value={option}
//                       onChange={() => handleOptionSelect(index, option)}
//                       disabled={isLocked}
//                     />
//                     {option}
//                   </label>
//                 ))}
//               </div>
//             ) : (
//               <textarea
//                 className="subjective-answer"
//                 placeholder="Write your answer here..."
//                 onChange={(e) => handleSubjectiveAnswer(index, e.target.value)}
//                 disabled={isLocked}
//               ></textarea>
//             )}
//           </div>
//         ))}
//       </div>

//       <button 
//         id="submit-btn" 
//         onClick={handleSubmit} 
//         disabled={isLocked}
//       >
//         Submit Exam
//       </button>
//     </div>
//   );
// };

// export default ExamPage;

// import React, { useState, useEffect, useCallback } from 'react';
// import axios from 'axios';
// import './ExamPage.css';

// const questionsData = {
//   "Mathematics": [
//     { question: "What is 2 + 2?", options: ["3", "4", "5", "6"], answer: "4", type: "mcq" },
//     { question: "Solve for x: 3x = 12", options: ["3", "4", "5", "6"], answer: "4", type: "mcq" },
//     { question: "Explain the Pythagorean theorem.", type: "subjective" }
//   ],
//   "Science": [
//     { question: "What is the chemical symbol for water?", options: ["O2", "CO2", "H2O", "NaCl"], answer: "H2O", type: "mcq" },
//     { question: "Which planet is known as the Red Planet?", options: ["Earth", "Mars", "Jupiter", "Saturn"], answer: "Mars", type: "mcq" },
//     { question: "Describe the process of photosynthesis.", type: "subjective" }
//   ]
// };

// const getDummyRiskScore = () => Math.floor(Math.random() * 101);

// // Warning Notification Component
// const WarningNotification = ({ message, level, onDismiss }) => {
//   return (
//     <div className="warning-overlay">
//       <div className={`warning-notification ${level || 'warning'}`}>
//         <div className="warning-content">
//           <div className="warning-icon">
//             {level === 'danger' ? '🚨' : '⚠️'}
//           </div>
//           <div className="warning-message">
//             {message}
//           </div>
//         </div>
//         <button className="warning-button" onClick={onDismiss}>OK</button>
//       </div>
//     </div>
//   );
// };

// const ExamPage = () => {
//   const [subject, setSubject] = useState('');
//   const [questions, setQuestions] = useState([]);
//   const [attempted, setAttempted] = useState(0);
//   const [answers, setAnswers] = useState({});
//   const [score, setScore] = useState(null);
//   const [riskScore, setRiskScore] = useState(0);
//   const [activeWarning, setActiveWarning] = useState(null);
//   const [examStarted, setExamStarted] = useState(false);
//   const [timeLeft, setTimeLeft] = useState(3600); // 1 hour in seconds
//   const [isLocked, setIsLocked] = useState(false);
//   const [examOver, setExamOver] = useState(false);
//   const [initialIp, setInitialIp] = useState('');

//   // Add a warning notification
//   const addWarning = useCallback((text, level = 'warning') => {
//     setActiveWarning({ text, level });
//     setIsLocked(level === 'danger'); // Lock inputs only for danger-level warnings
//   }, []);

//   // Dismiss the warning notification
//   const dismissWarning = useCallback(() => {
//     setActiveWarning(null);
//     setIsLocked(false);
//   }, []);

//   // Test warning
//   useEffect(() => {
//     setTimeout(() => {
//       addWarning('This is a test warning message', 'warning');
//     }, 2000);
//   }, [addWarning]);

//   useEffect(() => {
//     const params = new URLSearchParams(window.location.search);
//     const subjectFromURL = params.get('subject');
//     setSubject(subjectFromURL || 'Unknown');
//     setQuestions(questionsData[subjectFromURL] || []);
//   }, []);

//   useEffect(() => {
//     document.title = `${subject} Exam`;

//     const handleFullscreenChange = () => {
//       if (!document.fullscreenElement) {
//         addWarning('⚠️ You have exited fullscreen mode. Please return immediately.', 'warning');
//       }
//     };

//     const handleResize = () => {
//       if (window.innerWidth < screen.width || window.innerHeight < screen.height) {
//         addWarning('⚠️ Split screen mode is not allowed during the exam. Please return to fullscreen mode.', 'warning');
//       }
//     };

//     document.addEventListener('fullscreenchange', handleFullscreenChange);
//     document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
//     document.addEventListener('mozfullscreenchange', handleFullscreenChange);
//     document.addEventListener('MSFullscreenChange', handleFullscreenChange);
//     window.addEventListener('resize', handleResize);

//     return () => {
//       // Remove event listeners
//       document.removeEventListener('fullscreenchange', handleFullscreenChange);
//       document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
//       document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
//       document.removeEventListener('MSFullscreenChange', handleFullscreenChange);
//       window.removeEventListener('resize', handleResize);

//       // Exit fullscreen mode when component unmounts
//       if (document.fullscreenElement) {
//         if (document.exitFullscreen) {
//           document.exitFullscreen();
//         } else if (document.mozCancelFullScreen) { /* Firefox */
//           document.mozCancelFullScreen();
//         } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
//           document.webkitExitFullscreen();
//         } else if (document.msExitFullscreen) { /* IE/Edge */
//           document.msExitFullscreen();
//         }
//       }
//     };
//   }, [subject, addWarning]);

//   const handleRiskScore = useCallback((score) => {
//     if (score >= 40 && score < 70) {
//       addWarning('⚠️ Suspicious behavior detected. Please focus on your exam.', 'warning');
//     } else if (score >= 70) {
//       addWarning('🚨 High-risk behavior detected! Your activity is being monitored.', 'danger');
//     }
//   }, [addWarning]);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       const newRiskScore = getDummyRiskScore();
//       setRiskScore(newRiskScore);
//       handleRiskScore(newRiskScore);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [handleRiskScore]);

//   const handleSubmit = useCallback(() => {
//     if (!isLocked) {
//       let scoreCount = 0;
//       questions.forEach((q, index) => {
//         if (q.type === "mcq" && answers[index] === q.answer) {
//           scoreCount++;
//         }
//       });
//       setScore(`${scoreCount} / ${questions.length}`);
//       setIsLocked(true);
//       setExamOver(true);

//       // Exit fullscreen mode when exam is submitted
//       if (document.fullscreenElement) {
//         if (document.exitFullscreen) {
//           document.exitFullscreen();
//         } else if (document.mozCancelFullScreen) { /* Firefox */
//           document.mozCancelFullScreen();
//         } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
//           document.webkitExitFullscreen();
//         } else if (document.msExitFullscreen) { /* IE/Edge */
//           document.msExitFullscreen();
//         }
//       }
//     }
//   }, [answers, questions, isLocked]);

//   useEffect(() => {
//     if (examStarted) {
//       const timer = setInterval(() => {
//         setTimeLeft(prevTime => {
//           if (prevTime <= 1) {
//             clearInterval(timer);
//             handleSubmit();
//             return 0;
//           }
//           return prevTime - 1;
//         });
//       }, 1000);

//       return () => clearInterval(timer);
//     }
//   }, [examStarted, handleSubmit]);

//   const handleOptionSelect = (index, option) => {
//     if (!isLocked) {
//       setAnswers((prev) => ({ ...prev, [index]: option }));
//       updateAttemptedCount();
//     }
//   };

//   const handleSubjectiveAnswer = (index, value) => {
//     if (!isLocked) {
//       setAnswers((prev) => ({ ...prev, [index]: value }));
//       updateAttemptedCount();
//     }
//   };

//   const updateAttemptedCount = () => {
//     const attemptedCount = Object.values(answers).filter(Boolean).length;
//     setAttempted(attemptedCount);
//   };

//   const startExam = async () => {
//     setExamStarted(true);

//     // Request fullscreen mode
//     if (document.documentElement.requestFullscreen) {
//       document.documentElement.requestFullscreen();
//     } else if (document.documentElement.mozRequestFullScreen) { /* Firefox */
//       document.documentElement.mozRequestFullScreen();
//     } else if (document.documentElement.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
//       document.documentElement.webkitRequestFullscreen();
//     } else if (document.documentElement.msRequestFullscreen) { /* IE/Edge */
//       document.documentElement.msRequestFullscreen();
//     }

//     // Disable ESC key to prevent exiting fullscreen
//     document.addEventListener('keydown', handleKeyDown);

//     // Add event listener for window blur
//     window.addEventListener('blur', handleWindowBlur);

//     // Get initial IP address
//     try {
//       const response = await axios.get('https://api.ipify.org?format=json');
//       setInitialIp(response.data.ip);
//     } catch (error) {
//       console.error('Error fetching IP address:', error);
//     }
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === 'Escape') {
//       e.preventDefault();
//       addWarning('⚠️ Pressing the Escape key is not allowed during the exam.', 'warning');
//     }
//   };

//   const handleWindowBlur = () => {
//     addWarning('⚠️ You have switched away from the exam window. Please return immediately.', 'warning');
//   };

//   const checkIpAddress = async () => {
//     try {
//       const response = await axios.get('https://api.ipify.org?format=json');
//       const currentIp = response.data.ip;
//       if (initialIp && currentIp !== initialIp) {
//         addWarning('⚠️ VPN usage detected. Please disable VPN and return to the exam.', 'danger');
//       }
//     } catch (error) {
//       console.error('Error fetching IP address:', error);
//     }
//   };

//   useEffect(() => {
//     if (examStarted) {
//       const ipCheckInterval = setInterval(checkIpAddress, 10000); // Check IP address every 10 seconds
//       return () => clearInterval(ipCheckInterval);
//     }
//   }, [examStarted, initialIp]);

//   const formatTime = (seconds) => {
//     const minutes = Math.floor(seconds / 60);
//     const remainingSeconds = seconds % 60;
//     return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
//   };

//   if (examOver) {
//     // Extract the numeric score for celebration message
//     const scoreValues = score ? score.split(' / ') : [0, 0];
//     const scoreNumber = parseInt(scoreValues[0], 10);
//     const totalQuestions = parseInt(scoreValues[1], 10);
//     const percentage = totalQuestions > 0 ? (scoreNumber / totalQuestions) * 100 : 0;
    
//     let celebrationMessage = "";
//     if (percentage >= 90) {
//       celebrationMessage = "Outstanding! Excellent performance!";
//     } else if (percentage >= 75) {
//       celebrationMessage = "Great job! Well done!";
//     } else if (percentage >= 60) {
//       celebrationMessage = "Good work! Keep it up!";
//     } else if (percentage >= 40) {
//       celebrationMessage = "You passed! Keep studying!";
//     } else {
//       celebrationMessage = "More practice needed. Don't give up!";
//     }

//     return (
//       <div className="exam-over-container">
//         <div className="exam-over">
//           <div className="confetti-overlay"></div>
//           <div className="exam-result-card">
//             <h2>Exam Completed!</h2>
//             <div className="score-display">
//               <div className="score-circle">
//                 <span className="score-text">{score}</span>
//               </div>
//             </div>
//             <p className="celebration-message">{celebrationMessage}</p>
//             <p className="subject-name">{subject}</p>
//             <button 
//               className="exit-button" 
//               onClick={() => window.location.href = 'http://localhost:3000/'}
//             >
//               Return to Dashboard
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   if (!examStarted) {
//     return (
//       <div id="exam-container">
//         <h1>{subject} Exam</h1>
//         <div className="exam-rules">
//           <h2>General Exam Rules</h2>
//           <ul>
//             <li>No cheating or using unauthorized materials.</li>
//             <li>Stay focused and avoid distractions.</li>
//             <li>Do not leave the fullscreen mode during the exam.</li>
//             <li>Ensure a stable internet connection.</li>
//             <li>Submit your answers before the time runs out.</li>
//           </ul>
//         </div>
//         <button onClick={startExam} style={{ margin: '10px', padding: '8px 16px', background: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
//           Start Exam
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div id="exam-container">
//       <h1>{subject} Exam</h1>

//       <div className="status-bar">
//         <p><strong>Total Questions:</strong> {questions.length}</p>
//         <p><strong>Attempted:</strong> {attempted}</p>
//         <p><strong>Remaining:</strong> {questions.length - attempted}</p>
//         <p><strong>Risk Score:</strong> {riskScore}</p>
//         <p><strong>Time Left:</strong> {formatTime(timeLeft)}</p>
//       </div>

//       {activeWarning && (
//         <WarningNotification 
//           message={activeWarning.text}
//           level={activeWarning.level}
//           onDismiss={dismissWarning}
//         />
//       )}

//       <div id="questions-container">
//         {questions.map((q, index) => (
//           <div key={index} className="question">
//             <h3>{index + 1}. {q.question}</h3>
//             {q.type === 'mcq' ? (
//               <div className="options">
//                 {q.options.map((option) => (
//                   <label key={option}>
//                     <input
//                       type="radio"
//                       name={`q${index}`}
//                       value={option}
//                       onChange={() => handleOptionSelect(index, option)}
//                       disabled={isLocked}
//                     />
//                     {option}
//                   </label>
//                 ))}
//               </div>
//             ) : (
//               <textarea
//                 className="subjective-answer"
//                 placeholder="Write your answer here..."
//                 onChange={(e) => handleSubjectiveAnswer(index, e.target.value)}
//                 disabled={isLocked}
//               ></textarea>
//             )}
//           </div>
//         ))}
//       </div>

//       <button 
//         id="submit-btn" 
//         onClick={handleSubmit} 
//         disabled={isLocked}
//       >
//         Submit Exam
//       </button>
//     </div>
//   );
// };

// export default ExamPage;