import React, { useState, useEffect, useRef, useCallback } from 'react';
import axios from 'axios';
import './ExamPage.css';
import jsPDF from 'jspdf';



const questionsData = {
  "Mathematics": [
    { question: "What is 2 + 2?", options: ["3", "4", "5", "6"], answer: "4", type: "mcq" },
    { question: "Solve for x: 3x = 12", options: ["3", "4", "5", "6"], answer: "4", type: "mcq" },
    { question: "Explain the Pythagorean theorem.", type: "subjective" }
  ],
  "Science": [
    { question: "What is the chemical symbol for water?", options: ["O2", "CO2", "H2O", "NaCl"], answer: "H2O", type: "mcq" },
    { question: "Which planet is known as the Red Planet?", options: ["Earth", "Mars", "Jupiter", "Saturn"], answer: "Mars", type: "mcq" },
    { question: "Describe the process of photosynthesis.", type: "subjective" }
  ],
  // Add Physics - this will be the subject assigned after 40 seconds
  "Physics": [
    { question: "What is Newton's First Law of Motion?", options: ["An object at rest stays at rest", "Force equals mass times acceleration", "For every action there is an equal and opposite reaction", "Energy cannot be created or destroyed"], answer: "An object at rest stays at rest", type: "mcq" },
    { question: "What is the SI unit of electric current?", options: ["Volt", "Ampere", "Ohm", "Watt"], answer: "Ampere", type: "mcq" },
    { question: "Calculate the velocity of a car that travels 150 meters in 6 seconds.", options: ["15 m/s", "25 m/s", "30 m/s", "90 m/s"], answer: "25 m/s", type: "mcq" },
    { question: "Explain the concept of gravitational potential energy.", type: "subjective" }
  ],
  // Add History
  "History": [
    { question: "Who was the first President of the United States?", options: ["Thomas Jefferson", "George Washington", "Abraham Lincoln", "John Adams"], answer: "George Washington", type: "mcq" },
    { question: "In which year did World War II end?", options: ["1943", "1944", "1945", "1946"], answer: "1945", type: "mcq" },
    { question: "Describe the significance of the Industrial Revolution.", type: "subjective" }
  ],
  // Add English
  "English": [
    { question: "Which of these is a Shakespeare play?", options: ["Pride and Prejudice", "Hamlet", "The Great Gatsby", "War and Peace"], answer: "Hamlet", type: "mcq" },
    { question: "What is the main function of an adverb?", options: ["To describe a noun", "To describe a verb", "To replace a noun", "To connect clauses"], answer: "To describe a verb", type: "mcq" },
    { question: "Write a short paragraph analyzing the theme of identity in literature.", type: "subjective" }
  ],
  // Add Computer Science
  "Computer Science": [
    { question: "What does HTML stand for?", options: ["Hyper Text Markup Language", "High Tech Modern Language", "Hyper Transfer Markup Language", "Home Tool Markup Language"], answer: "Hyper Text Markup Language", type: "mcq" },
    { question: "Which data structure operates on a Last-In-First-Out principle?", options: ["Queue", "Stack", "Linked List", "Tree"], answer: "Stack", type: "mcq" },
    { question: "What is the time complexity of binary search?", options: ["O(n)", "O(log n)", "O(n log n)", "O(n²)"], answer: "O(log n)", type: "mcq" },
    { question: "Explain the concept of object-oriented programming.", type: "subjective" }
  ],
  // Add default for General Knowledge
  "General Knowledge": [
    { question: "Which is the largest ocean on Earth?", options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"], answer: "Pacific Ocean", type: "mcq" },
    { question: "Who wrote the theory of relativity?", options: ["Isaac Newton", "Albert Einstein", "Stephen Hawking", "Nikola Tesla"], answer: "Albert Einstein", type: "mcq" },
    { question: "Discuss the impact of social media on modern society.", type: "subjective" }
  ]
};

// Simple mock translations for demo purposes (Indian languages)
const translations = {
  "en": {}, // English is default, no translation needed
  "hi": {
    "What is 2 + 2?": "2 + 2 क्या है?",
    "Solve for x: 3x = 12": "x के लिए हल करें: 3x = 12",
    "Explain the Pythagorean theorem.": "पाइथागोरस प्रमेय की व्याख्या करें।",
    "What is the chemical symbol for water?": "पानी का रासायनिक प्रतीक क्या है?",
    "Which planet is known as the Red Planet?": "किस ग्रह को लाल ग्रह के रूप में जाना जाता है?",
    "Describe the process of photosynthesis.": "प्रकाश संश्लेषण की प्रक्रिया का वर्णन करें।",
    // Physics translations
    "What is Newton's First Law of Motion?": "न्यूटन का गति का प्रथम नियम क्या है?",
    "What is the SI unit of electric current?": "विद्युत धारा की SI इकाई क्या है?",
    "Calculate the velocity of a car that travels 150 meters in 6 seconds.": "एक कार की गति की गणना करें जो 6 सेकंड में 150 मीटर की दूरी तय करती है।",
    "Explain the concept of gravitational potential energy.": "गुरुत्वाकर्षण स्थितिज ऊर्जा की अवधारणा समझाइए।"
  },
  "ta": {
    "What is 2 + 2?": "2 + 2 என்றால் என்ன?",
    "Solve for x: 3x = 12": "x-க்கு தீர்வு காண்க: 3x = 12",
    "Explain the Pythagorean theorem.": "பைதகரஸ் தேற்றத்தை விளக்குக.",
    "What is the chemical symbol for water?": "நீருக்கான இரசாயன குறியீடு என்ன?",
    "Which planet is known as the Red Planet?": "எந்த கிரகம் செவ்வாய் கிரகம் என அழைக்கப்படுகிறது?",
    "Describe the process of photosynthesis.": "ஒளிச்சேர்க்கை செயல்முறையை விவரிக்கவும்.",
    // Physics translations
    "What is Newton's First Law of Motion?": "நியூட்டனின் முதல் இயக்க விதி என்ன?",
    "What is the SI unit of electric current?": "மின்சாரத்தின் SI அலகு என்ன?",
    "Calculate the velocity of a car that travels 150 meters in 6 seconds.": "6 வினாடிகளில் 150 மீட்டர் பயணிக்கும் கார் வேகத்தைக் கணக்கிடவும்.",
    "Explain the concept of gravitational potential energy.": "ஈர்ப்பு நிலை ஆற்றலின் கருத்தை விளக்குங்கள்."
  },
  "bn": {
    "What is 2 + 2?": "২ + ২ কত?",
    "Solve for x: 3x = 12": "x এর মান বের করুন: ৩x = ১২",
    "Explain the Pythagorean theorem.": "পাইথাগোরাসের উপপাদ্য ব্যাখ্যা করুন।",
    "What is the chemical symbol for water?": "পানির রাসায়নিক প্রতীক কী?",
    "Which planet is known as the Red Planet?": "কোন গ্রহকে লাল গ্রহ বলা হয়?",
    "Describe the process of photosynthesis.": "সালোকসংশ্লেষণ প্রক্রিয়া বর্ণনা করুন।"
  },
  "te": {
    "What is 2 + 2?": "2 + 2 ఎంత?",
    "Solve for x: 3x = 12": "x కోసం పరిష్కరించండి: 3x = 12",
    "Explain the Pythagorean theorem.": "పైథాగరస్ సిద్ధాంతాన్ని వివరించండి.",
    "What is the chemical symbol for water?": "నీటికి రసాయన చిహ్నం ఏమిటి?",
    "Which planet is known as the Red Planet?": "ఏ గ్రహం ఎర్ర గ్రహంగా పిలుస్తారు?",
    "Describe the process of photosynthesis.": "కిరణజన్య సంయోగక్రియ ప్రక్రియను వివరించండి."
  },
  "kn": {
    "What is 2 + 2?": "2 + 2 ಎಷ್ಟು?",
    "Solve for x: 3x = 12": "x ಗಾಗಿ ಪರಿಹರಿಸಿ: 3x = 12",
    "Explain the Pythagorean theorem.": "ಪೈಥಾಗೊರಸ್ ಪ್ರಮೇಯವನ್ನು ವಿವರಿಸಿ.",
    "What is the chemical symbol for water?": "ನೀರಿನ ರಾಸಾಯನಿಕ ಸಂಕೇತ ಯಾವುದು?",
    "Which planet is known as the Red Planet?": "ಯಾವ ಗ್ರಹವನ್ನು ಕೆಂಪು ಗ್ರಹ ಎಂದು ಕರೆಯಲಾಗುತ್ತದೆ?",
    "Describe the process of photosynthesis.": "ದುಯತಿಸಂಶ್ಲೇಷಣೆ ಪ್ರಕ್ರಿಯೆಯನ್ನು ವಿವರಿಸಿ."
  }
};

const languageOptions = [
  { code: 'en', name: 'English' },
  { code: 'hi', name: 'हिंदी (Hindi)' },
  { code: 'ta', name: 'தமிழ் (Tamil)' },
  { code: 'bn', name: 'বাংলা (Bengali)' },
  { code: 'te', name: 'తెలుగు (Telugu)' },
  { code: 'kn', name: 'ಕನ್ನಡ (Kannada)' }
];

const getDummyRiskScore = () => Math.floor(Math.random() * 101);

// Warning Notification Component
const WarningNotification = ({ message, level, onDismiss }) => {
  return (
    <div className="warning-overlay">
      <div className={`warning-notification ${level || 'warning'}`}>
        <div className="warning-content">
          <div className="warning-icon">
            {level === 'danger' ? '🚨' : '⚠️'}
          </div>
          <div className="warning-message">
            {message}
          </div>
        </div>
        <button className="warning-button" onClick={onDismiss}>OK</button>
      </div>
    </div>
  );
};

const ExamPage = () => {
  const [initialIp, setInitialIp] = useState('');
  const [celebrationMessage, setCelebrationMessage] = useState('');
  const pdfRef = useRef(null); 
  const [subject, setSubject] = useState('');
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [attempted, setAttempted] = useState(0);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);
  const [riskScore, setRiskScore] = useState(0);
  const [activeWarning, setActiveWarning] = useState(null);
  const [examStarted, setExamStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(3600); // 1 hour in seconds
  const [isLocked, setIsLocked] = useState(false);
  const [examOver, setExamOver] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [translatedQuestions, setTranslatedQuestions] = useState({});
  
  // Speech synthesis
  const synth = useRef(window.speechSynthesis);
  const [isSpeaking, setIsSpeaking] = useState(false);

  // First effect: Set the initial subject (runs once)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const subjectFromURL = params.get('subject');
    setSubject(subjectFromURL || 'General Knowledge');
  }, []);

  // Second effect: Load questions whenever subject changes
  useEffect(() => {
    // Skip the initial render when subject is empty
    if (!subject) return;
    
    const loadQuestions = async () => {
      setLoading(true);
      
      try {
        console.log(`Loading questions for ${subject}`);
        // First check for default questions for this subject
        const defaultSubjectQuestions = questionsData[subject];
        
        // If no default questions found, try AI generation
        if (!defaultSubjectQuestions || defaultSubjectQuestions.length === 0) {
          try {
            console.log(`Generating AI questions for ${subject}`);
            // Check if we have cached questions for this subject
            
            // Cache the AI-generated questions
            
          } catch (error) {
            console.error('AI generation failed:', error);
            // No fallback here, we'll just show an empty exam
            setQuestions([]);
          }
        } else {
          // Use default questions
          console.log(`Using default questions for ${subject}`);
          setQuestions(defaultSubjectQuestions);
        }
      } catch (error) {
        console.error('Error loading questions:', error);
        setQuestions([]);
      } finally {
        setLoading(false);
      }
    };
    
    loadQuestions();
  }, [subject]); // Now correctly depend on subject

  // Function to translate question text when language changes
  useEffect(() => {
    if (selectedLanguage === 'en' || questions.length === 0) return;
    
    const translateQuestions = async () => {
      // Check if we already have translations for this language
      const existingTranslations = translatedQuestions[selectedLanguage] || {};
      const newTranslations = { ...existingTranslations };
      let hasNewTranslations = false;
      
      // Only translate questions we haven't translated yet
      
      
      if (hasNewTranslations) {
        setTranslatedQuestions(prev => ({
          ...prev,
          [selectedLanguage]: newTranslations
        }));
      }
    };
    
    translateQuestions();
  }, [selectedLanguage, questions, translatedQuestions]);

  // Get translated text
  const getTranslatedText = (text) => {
    if (selectedLanguage === 'en') return text;
    
    // First check dynamically translated questions
    if (translatedQuestions[selectedLanguage]?.[text]) {
      return translatedQuestions[selectedLanguage][text];
    }
    
    // Fallback to static translations
    return translations[selectedLanguage]?.[text] || text;
  };

  // Function to read text aloud
  const speakText = (text) => {
    // Cancel any ongoing speech
    synth.current.cancel();
    
    const utterance = new SpeechSynthesisUtterance(text);
    
    // Set language based on selected language
    // Note: browser support for Indian languages varies
    utterance.lang = selectedLanguage === 'en' ? 'en-IN' : 
                     selectedLanguage === 'hi' ? 'hi-IN' :
                     selectedLanguage === 'ta' ? 'ta-IN' :
                     selectedLanguage === 'bn' ? 'bn-IN' :
                     selectedLanguage === 'te' ? 'te-IN' : 'kn-IN';
    
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => {
      setIsSpeaking(false);
      addWarning('Error reading text. This language may not be fully supported by your browser.', 'warning');
    };
    
    synth.current.speak(utterance);
  };

  // Add a warning notification
  const addWarning = useCallback((text, level = 'warning') => {
    setActiveWarning({ text, level });
    setIsLocked(level === 'danger'); // Lock inputs only for danger-level warnings
  }, []);

  // Dismiss the warning notification
  const dismissWarning = useCallback(() => {
    setActiveWarning(null);
    setIsLocked(false);
  }, []);

  // Test warning
  useEffect(() => {
    setTimeout(() => {
      addWarning('This is a test warning message', 'warning');
    }, 2000);
  }, [addWarning]);

  useEffect(() => {
    document.title = `${subject} Exam`;

    const handleFullscreenChange = () => {
      // No need to update state, just handle fullscreen change
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('mozfullscreenchange', handleFullscreenChange);
    document.addEventListener('MSFullscreenChange', handleFullscreenChange);

    return () => {
      // Remove event listeners
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
      document.removeEventListener('MSFullscreenChange', handleFullscreenChange);

      // Exit fullscreen mode when component unmounts
      if (document.fullscreenElement) {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.mozCancelFullScreen) { /* Firefox */
          document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
          document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { /* IE/Edge */
          document.msExitFullscreen();
        }
      }
    };
  }, [subject]);

  // Clean up speech synthesis when component unmounts
  useEffect(() => {
    const currentSynth = synth.current;
    return () => {
      if (currentSynth) {
        currentSynth.cancel();
      }
    };
  }, []);

  const handleRiskScore = useCallback((score) => {
    if (score >= 90 && score < 250) {
      addWarning('⚠️ Suspicious behavior detected. Please focus on your exam.', 'warning');
    } else if (score >= 250) {
      addWarning('🚨 High-risk behavior detected! Your activity is being monitored.', 'danger');
    }
  }, [addWarning]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newRiskScore = getDummyRiskScore();
      setRiskScore(newRiskScore);
      handleRiskScore(newRiskScore);
    }, 5000);

    return () => clearInterval(interval);
  }, [handleRiskScore]);

  const handleSubmit = useCallback(() => {
    if (!isLocked) {
      let scoreCount = 0;
      questions.forEach((q, index) => {
        if (q.type === "mcq" && answers[index] === q.answer) {
          scoreCount++;
        }
      });
      setScore(`${scoreCount} / ${questions.length}`);
      setIsLocked(true);
      setExamOver(true);

      // Exit fullscreen mode when exam is submitted
      if (document.fullscreenElement) {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.mozCancelFullScreen) { /* Firefox */
          document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
          document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { /* IE/Edge */
          document.msExitFullscreen();
        }
      }
    }
  }, [answers, questions, isLocked]);

  useEffect(() => {
    if (examStarted) {
      const timer = setInterval(() => {
        setTimeLeft(prevTime => {
          if (prevTime <= 1) {
            clearInterval(timer);
            handleSubmit();
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [examStarted, handleSubmit]);

  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.value);
  };

  useEffect(() => {
    if (examStarted) {
      const timer = setInterval(() => {
        setTimeLeft(prevTime => {
          if (prevTime <= 1) {
            clearInterval(timer);
            handleSubmit();
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [examStarted, handleSubmit]);

  const handleOptionSelect = (index, option) => {
    if (!isLocked) {
      setAnswers((prev) => ({ ...prev, [index]: option }));
      updateAttemptedCount();
    }
  };

  const handleSubjectiveAnswer = (index, value) => {
    if (!isLocked) {
      setAnswers((prev) => ({ ...prev, [index]: value }));
      updateAttemptedCount();
    }
  };

  const updateAttemptedCount = () => {
    const attemptedCount = Object.values(answers).filter(Boolean).length;
    setAttempted(attemptedCount);
  };

  const startExam = async () => {
    setExamStarted(true);

    // Request fullscreen mode
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) { /* Firefox */
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
      document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) { /* IE/Edge */
      document.documentElement.msRequestFullscreen();
    }

    // Disable ESC key to prevent exiting fullscreen
    document.addEventListener('keydown', handleKeyDown);

    // Add event listener for window blur
    window.addEventListener('blur', handleWindowBlur);






    // Get initial IP address
    try {
      const response = await axios.get('https://api.ipify.org?format=json');
      setInitialIp(response.data.ip);
    } catch (error) {
      console.error('Error fetching IP address:', error);
      addWarning('⚠ Unable to fetch IP address. Please check your internet connection.', 'danger');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      addWarning('⚠ Pressing the Escape key is not allowed during the exam.', 'warning');
    }
  };

  const handleWindowBlur = () => {
    addWarning('⚠ You have switched away from the exam window. Please return immediately.', 'warning');
  };

  const checkIpAddress = async () => {
    try {
      const response = await axios.get('https://api.ipify.org?format=json');
      const currentIp = response.data.ip;
      if (initialIp && currentIp !== initialIp) {
        addWarning('⚠ VPN usage detected. Please disable VPN and return to the exam.', 'danger');
      }
    } catch (error) {
      console.error('Error fetching IP address:', error);
      addWarning('⚠ Unable to fetch IP address. Please check your internet connection.', 'danger');
    }
  };

  useEffect(() => {
    if (examStarted) {
      const ipCheckInterval = setInterval(checkIpAddress, 10000); // Check IP address every 10 seconds
      return () => clearInterval(ipCheckInterval);
    }
  }, [examStarted, initialIp]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  useEffect(() => {
    let idleTimer;
  
    const resetIdleTimer = () => {
      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => {
        addWarning('⚠ You have been idle for a while. Please continue with your exam.', 'warning');
      }, 10000); // 10 seconds
    };
  
    // Detect user interactions
    window.addEventListener('mousemove', resetIdleTimer);
    window.addEventListener('keydown', resetIdleTimer);
    window.addEventListener('scroll', resetIdleTimer);
    window.addEventListener('click', resetIdleTimer);
  
    // Initialize timer on component mount
    resetIdleTimer();
  
    // Cleanup event listeners on unmount
    return () => {
      clearTimeout(idleTimer);
      window.removeEventListener('mousemove', resetIdleTimer);
      window.removeEventListener('keydown', resetIdleTimer);
      window.removeEventListener('scroll', resetIdleTimer);
      window.removeEventListener('click', resetIdleTimer);
    };
  }, [addWarning]);
  


  

if (examOver) {
  // Extract the numeric score for celebration message
  const scoreValues = score ? score.split(' / ') : [0, 0];
  const scoreNumber = parseInt(scoreValues[0], 10);
  const totalQuestions = parseInt(scoreValues[1], 10);
  const percentage = totalQuestions > 0 ? (scoreNumber / totalQuestions) * 100 : 0;

  let celebrationMessage = "";
  if (percentage >= 90) {
    celebrationMessage = "Outstanding! Excellent performance!";
  } else if (percentage >= 75) {
    celebrationMessage = "Great job! Well done!";
  } else if (percentage >= 60) {
    celebrationMessage = "Good work! Keep it up!";
  } else if (percentage >= 40) {
    celebrationMessage = "You passed! Keep studying!";
  } else {
    celebrationMessage = "More practice needed. Don't give up!";
  }

  

  // Generate random realistic data for the PDF summary
  const generatePDFSummary = () => {
    const doc = new jsPDF();

    const randomRisk = Math.floor(Math.random() * (100 - 30 + 1)) + 30;
    const randomIdle = Math.floor(Math.random() * 4);
    const randomIPChanges = Math.floor(Math.random() * 2);

    doc.setFontSize(18);
    doc.text('Exam Session Summary', 10, 20);

    doc.setFontSize(12);
    doc.text(`Subject: ${subject}`, 10, 30);
    doc.text(`Score: ${score}`, 10, 40);
    doc.text(`Percentage: ${percentage.toFixed(2)}%`, 10, 50);
    doc.text(`Time Taken: ${(3600 - timeLeft) / 60} minutes`, 10, 60);
    doc.text(' ', 10, 70);

    doc.text('Risk Analysis:', 10, 80);
    doc.text(`Suspicious Activity Detected: ${randomRisk}%`, 10, 70);
    doc.text(`Idle Warnings: ${randomIdle}`, 10, 80);
    doc.text(`IP Address Changes: ${Math.floor(randomIdle / 2)}`, 10, 90);

    doc.setFontSize(14);
    doc.text('AI-Generated Summary:', 10, 110);
    doc.setFontSize(12);
    doc.text("The candidate completed the exam with a moderate risk profile. The primary concerns identified include a moderate number of idle warnings and minimal IP address fluctuations. Overall, the performance metrics indicate typical exam-taking behavior, though vigilance is advised for idle time management.", 10, 120, { maxWidth: 180 });

    doc.save(`Exam_Summary_${subject}_${Date.now()}.pdf`);
  };

  return (
    <div className="exam-over-container">
      <div className="exam-over">
        <div className="confetti-overlay"></div>
        <div className="exam-result-card">
          <h2>Exam Completed!</h2>
          <div className="score-display">
            <div className="score-circle">
              <span className="score-text">{score}</span>
            </div>
          </div>
          <p className="celebration-message">{celebrationMessage}</p>
          <p className="subject-name">{subject}</p>
          <button 
            className="pdf-button"
            onClick={generatePDFSummary}
            style={{ marginBottom: '15px', background: '#28a745', color: 'white', padding: '8px 16px', borderRadius: '5px', border: 'none', cursor: 'pointer' }}
          >
            Download Exam Report (PDF)
          </button>
          <button 
            className="exit-button" 
            onClick={() => window.location.href = 'http://localhost:3000/'}
          >
            Return to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}


if (!examStarted) {
  return (
    <div id="exam-container">
      <h1>{subject} Exam</h1>
      <div className="exam-rules">
        <h2>General Exam Rules</h2>
        <ul>
          <li>No cheating or using unauthorized materials.</li>
          <li>Stay focused and avoid distractions.</li>
          <li>Do not leave the fullscreen mode during the exam.</li>
          <li>Ensure a stable internet connection.</li>
          <li>Submit your answers before the time runs out.</li>
        </ul>
      </div>
      <button
        onClick={startExam}
        style={{
          margin: '10px',
          padding: '8px 16px',
          background: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Start Exam
      </button>
    </div>
  );
}

if (examOver) {
  return (
    <div className="exam-over-container">
      <div className="exam-over">
        <div className="confetti-overlay"></div>
        <div className="exam-result-card">
          <h2>Exam Completed!</h2>
          <div className="score-display">
            <div className="score-circle">
              <span className="score-text">{score}</span>
            </div>
          </div>
          <p className="celebration-message">{celebrationMessage}</p>
          <p className="subject-name">{subject}</p>
          <button
            className="exit-button"
            onClick={() => (window.location.href = 'http://localhost:3000/')}
          >
            Return to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}

return (
  <div id="exam-container">
    <h1>{subject} Exam</h1>

    <div className="status-bar">
      <p>
        <strong>Total Questions:</strong> {questions.length}
      </p>
      <p>
        <strong>Attempted:</strong> {attempted}
      </p>
      <p>
        <strong>Remaining:</strong> {questions.length - attempted}
      </p>
      <p>
        <strong>Risk Score:</strong> {riskScore}
      </p>
      <p>
        <strong>Time Left:</strong> {formatTime(timeLeft)}
      </p>
    </div>

    {activeWarning && (
      <WarningNotification
        message={activeWarning.text}
        level={activeWarning.level}
        onDismiss={dismissWarning}
      />
    )}

    <div id="questions-container">
      {questions.map((q, index) => (
        <div key={index} className="question">
          <h3>
            {index + 1}. {q.question}
          </h3>
          {q.type === 'mcq' ? (
            <div className="options">
              {q.options.map((option) => (
                <label key={option}>
                  <input
                    type="radio"
                    name={`q${index}`}
                    value={option}
                    onChange={() => handleOptionSelect(index, option)}
                    disabled={isLocked}
                  />
                  {option}
                </label>
              ))}
            </div>
          ) : (
            <textarea
              className="subjective-answer"
              placeholder="Write your answer here..."
              onChange={(e) => handleSubjectiveAnswer(index, e.target.value)}
              disabled={isLocked}
            ></textarea>
          )}
        </div>
      ))}
    </div>

    <button id="submit-btn" onClick={handleSubmit} disabled={isLocked}>
      Submit Exam
    </button>
  </div>
);   
}
export default ExamPage;