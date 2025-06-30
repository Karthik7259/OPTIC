// c:\Documents\optic\AURA_AI\admin\src\pages\AssignTask.jsx
import { useState, useRef } from "react";
import {
  Database,
  Bot,
  ArrowRight,
  ArrowDown,
  ArrowUp,
  X,
  Upload,
  Search,
  FileText,
  Briefcase, // Added for tasks
  UserCheck, // Added for occupied status
  UserX,     // Added for unoccupied status
} from "lucide-react";
import ReactMarkdown from "react-markdown";

// Define the color classes for skill badges
const skillColors = [
  "bg-blue-100 text-blue-800",
  "bg-purple-100 text-purple-800",
  "bg-green-100 text-green-800",
  "bg-yellow-100 text-yellow-800",
  "bg-red-100 text-red-800",
  "bg-indigo-100 text-indigo-800",
  "bg-pink-100 text-pink-800",
  "bg-gray-200 text-gray-800",
];


export default function TaskAllocationSystem() {
  // --- Employee Skillset Data ---
  const rawEmployeeData = `Alice,"React, Node.js, MongoDB",3,8.5
Bob,"Python, Flask, PostgreSQL",5,9.2
Charlie,"Vue.js, Firebase, TailwindCSS",2,7.8
David,"Django, Python, AWS",6,9.5
Eve,"Angular, Java, Spring Boot",4,8.0
Frank,"Go, Kubernetes, Docker",7,9.7
Grace,"Swift, iOS, Xcode",2,7.5
Heidi,"C#, Azure, SQL Server",3,8.3
Ivy,"JavaScript, React, CSS",3,7.9
Jack,"Ruby, Rails, Heroku",3,8.1
Karen,"PHP, Laravel, MySQL",3,8.4`;

  // Parse the raw skillset data
  const parseCSVLine = (line) => {
    const parts = [];
    let currentPart = "";
    let inQuotes = false;
    for (let i = 0; i < line.length; i++) {
      const char = line[i];
      if (char === '"') {
        inQuotes = !inQuotes;
      } else if (char === "," && !inQuotes) {
        parts.push(currentPart.trim());
        currentPart = "";
      } else {
        currentPart += char;
      }
    }
    parts.push(currentPart.trim());
    return parts;
  };

  const employees = rawEmployeeData
    .split("\n")
    .filter((line) => line.trim() !== "")
    .map((line) => {
      const parts = parseCSVLine(line);
      if (parts.length === 4) {
        return {
          name: parts[0],
          skills: parts[1],
          experience: parseInt(parts[2], 10),
          productivityScore: parseFloat(parts[3]),
        };
      }
      return null;
    })
    .filter((emp) => emp !== null);

  // --- Employee Occupancy Data ---
  const rawOccupancyData = `name of employee,occupied,current task,tasks completed
Alice,Yes,Build Authentication Module,12
Bob,No,API Backend for Task Management,20
Charlie,Yes,Dashboard UI for Analytics,8
David,Yes,Cloud Deployment Automation,30
Eve,Yes,Microservices Integration,17
Frank,No,DevOps CI/CD Pipeline,40
Grace,Yes,iOS UI Revamp,10
Heidi,Yes,Database Optimization,14
Ivy,Yes,Frontend Revamp,14
Jack,Yes,Performance Tuning,14
Karen,No,Security Enhancements,14`;

  // Parse the raw occupancy data (simpler CSV, no quotes needed)
  const employeeOccupancy = rawOccupancyData
    .split('\n')
    .slice(1) // Skip header row
    .filter(line => line.trim() !== '')
    .map(line => {
        const parts = line.split(',');
        if (parts.length === 4) {
            return {
                name: parts[0].trim(),
                occupied: parts[1].trim(), // "Yes" or "No"
                currentTask: parts[2].trim(),
                tasksCompleted: parseInt(parts[3].trim(), 10)
            };
        }
        return null;
    })
    .filter(emp => emp !== null);


  // --- Component State ---
  const [activePopup, setActivePopup] = useState(null);
  const [taskInput, setTaskInput] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false); // Add loading state
  const [submitError, setSubmitError] = useState(null); // Add error state
  const [recommendations, setRecommendations] = useState(null);
  const [taskAllocationResponse, setTaskAllocationResponse] = useState(null);
  const fileInputRef = useRef(null);

  // --- Component Functions ---
  const showPopup = (popupName) => setActivePopup(popupName);
  const closePopup = () => setActivePopup(null);
  const handleDragOver = (e) => { e.preventDefault(); setIsDragging(true); };
  const handleDragLeave = () => setIsDragging(false);
  const handleDrop = (e) => { /* ... (keep existing drop logic) ... */ };
  const handleFileInputChange = (e) => { /* ... (keep existing file input logic) ... */ };
  const processFile = (file) => { /* ... (keep existing file processing logic) ... */ };
  const formatFileSize = (bytes) => { /* ... (keep existing file size formatting) ... */ };
  
  const handleTaskSubmit = async (e) => {
    e.preventDefault();
    if (!taskInput.trim()) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch('http://localhost:8000/evaluate-task/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ description: taskInput }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit task');
      }

      const data = await response.json();
      const message = data.recommendations+"Choose among the people whose names i have mentioned before";
      console.log("Response from task evaluation:", message);
      
      try {
        const response = await fetch('http://127.0.0.1:5000/assign-task', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({query: message}),
        });
        console.log("Response from task allocation:", response);
        if (!response.ok) {
          throw new Error('Failed to assign task');
        }
        
        const data2 = await response.json();
        console.log("Response from data2 allocation:", data2);
        const { response: Objectresponse } = data2;
console.log("Final task allocation response:", Objectresponse);
        
        
        setTaskAllocationResponse(data2);
      } catch (error) {
        console.error('Error assigning task:', error);
        setTaskAllocationResponse({ error: error.message });
      }



      setRecommendations(data.recommendations);
      showPopup('allocationAgent');
    } 
    
    
    catch (error) {
      setSubmitError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };






  const triggerFileInput = () => fileInputRef.current.click();

  // --- JSX ---
  return (
    <div
      className="w-full min-h-full bg-gradient-to-br from-amber-100 via-purple-300 to-purple-900 p-6"
      style={{ backfaceVisibility: "hidden" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* --- Page Title --- */}
        <h1
          className="text-3xl font-bold text-black text-center mb-12"
          style={{ transform: "translateZ(0)" }}
        >
          AI Task Allocation System
        </h1>

        {/* --- Top Section - HR Agent --- */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-16">
          <div
            className="bg-white rounded-lg shadow-lg p-4 cursor-pointer flex items-center"
            onClick={() => showPopup("tasksDatabase")} // This button opens the popup we are modifying
            style={{ transform: "translateZ(0)", willChange: "transform" }}
          >
            <Database size={48} className="text-purple-600 mr-3" />
            <div>
              <h3 className="font-bold text-gray-800">Employee Status</h3>
              <p className="text-sm text-gray-600">Occupancy & Task Details</p>
            </div>
          </div>
          {/* ... rest of HR Agent section ... */}
           <ArrowRight size={24} className="text-white" />

          <div
            className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center"
            style={{ transform: "translateZ(0)", willChange: "transform" }}
          >
            <Bot size={64} className="text-purple-700 mb-2" />
            <h2 className="font-bold text-lg text-center">HR Agent</h2>
            <button
              className="mt-4 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full text-sm"
              onClick={() => showPopup("hrAgent")}
            >
              Interact with Agent

            </button>
          </div>
        

        </div>

        {/* --- Middle Section - Task Allocation Agent --- */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-16">
          <div
            className="bg-white rounded-lg shadow-lg p-4 cursor-pointer flex items-center"
            onClick={() => showPopup("skillsDatabase")}
            style={{ transform: "translateZ(0)", willChange: "transform" }}
          >
            <Database size={48} className="text-blue-600 mr-3" />
            <div>
              <h3 className="font-bold text-gray-800">Employee Skillset</h3>
              <p className="text-sm text-gray-600">
                Database of employee skills
              </p>
            </div>
          </div>
          {/* ... rest of Task Allocation Agent section ... */}
           <ArrowRight size={24} className="text-white" />

          <div
            className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center"
            style={{ transform: "translateZ(0)", willChange: "transform" }}
          >
            <Bot size={64} className="text-blue-700 mb-2" />
            <h2 className="font-bold text-lg text-center">
              Task Allocation Agent
            </h2>
            <button
              className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm"
              onClick={() => showPopup("allocationAgent")}
            >
              Interact with Agent
            </button>
          </div>
        </div>

        {/* --- Bottom Section - Input Methods --- */}
        {/* ... (keep existing input section) ... */}
         <div className="flex flex-col items-center">
          <ArrowUp size={32} className="text-white mb-6" />

          <div
            className="bg-white rounded-lg shadow-lg p-6 w-full max-w-xl mb-8"
            style={{ transform: "translateZ(0)", willChange: "transform" }}
          >
            <h2 className="text-xl font-bold text-center mb-4">
              Submit New Task
            </h2>

            {/* Hidden file input */}
            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              onChange={handleFileInputChange}
              accept=".pdf,.docx,.txt,.xlsx,.csv"
            />

            {/* Drag & Drop Area */}
            <div
              className={`border-2 border-dashed rounded-lg p-8 mb-6 text-center cursor-pointer ${
                isDragging
                  ? "bg-blue-100 border-blue-500"
                  : "border-gray-300 hover:bg-gray-50"
              }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={triggerFileInput}
              style={{ transform: "translateZ(0)", willChange: "transform" }}
            >
              <Upload size={48} className="mx-auto mb-2 text-gray-500" />
              <p className="font-medium">
                Drag your file here or click to browse
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Supported formats: PDF, DOCX, TXT, XLSX, CSV
              </p>
            </div>

            <div className="text-center font-bold mb-4">OR</div>

            {/* Text Input */}
            <form onSubmit={handleTaskSubmit}>
              <div
                className="relative"
                style={{ transform: "translateZ(0)", willChange: "transform" }}
              >
                <input
                  type="text"
                  className="w-full p-4 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                  placeholder="Enter what task has to be done..."
                  value={taskInput}
                  onChange={(e) => setTaskInput(e.target.value)}
                  disabled={isSubmitting}
                />
                <button
                  type="submit"
                  className={`absolute right-2 top-1/2 -translate-y-1/2 ${
                    isSubmitting ? 'bg-purple-400' : 'bg-purple-600 hover:bg-purple-700'
                  } text-white p-2 rounded-full`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full" />
                  ) : (
                    <Search size={20} />
                  )}
                </button>
              </div>
              {submitError && (
                <p className="mt-2 text-red-600 text-sm">{submitError}</p>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* --- Popups --- */}
      {activePopup && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
          onClick={closePopup}
          style={{ backdropFilter: "blur(0px)" }}
        >
          <div
            className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[80vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
            style={{ transform: "translateZ(0)", willChange: "transform" }}
          >
            {/* Popup Header */}
            <div className="flex justify-between items-center border-b p-4 sticky top-0 bg-white z-10">
              <h2 className="text-xl font-bold">
                {activePopup === "tasksDatabase" && "Employee Status"} {/* Updated Title */}
                {activePopup === "skillsDatabase" && "Employee Skillset Database"}
                {activePopup === "hrAgent" && "HR Agent Interaction"}
                {activePopup === "allocationAgent" && "Task Allocation Agent"}
                {activePopup === "fileUploaded" && "File Upload Successful"}
                {activePopup === "taskSubmitted" && "Task Submission Successful"}
              </h2>
              <button onClick={closePopup} className="text-gray-500 hover:text-gray-700">
                <X size={24} />
              </button>
            </div>

            {/* Popup Content Area */}
            <div className="p-6">
              {/* --- Tasks Database Popup Content (MODIFIED) --- */}
              {activePopup === "tasksDatabase" && (
                <div>
                  <div className="flex items-center mb-4">
                    <Database size={32} className="text-purple-600 mr-2" />
                    <h3 className="font-bold">Employee Status & Tasks</h3>
                  </div>
                  {/* Grid container for employee status cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {employeeOccupancy.map((emp, index) => (
                      <div key={index} className="border rounded-lg p-4 shadow-sm">
                        <h4 className="font-bold mb-2 text-gray-800">{emp.name}</h4>
                        <div className="mb-2 flex items-center">
                          {emp.occupied === 'Yes' ? (
                            <span className="inline-flex items-center bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full mr-2">
                              <UserCheck size={14} className="mr-1" /> Occupied
                            </span>
                          ) : (
                            <span className="inline-flex items-center bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded-full mr-2">
                              <UserX size={14} className="mr-1" /> Available
                            </span>
                          )}
                        </div>
                        <div className="text-sm text-gray-600 mb-1">
                          <span className="font-medium text-gray-700">Current Task:</span> {emp.currentTask || 'N/A'}
                        </div>
                        <div className="text-sm text-gray-600">
                          <span className="font-medium text-gray-700">Tasks Completed:</span> {emp.tasksCompleted}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* --- Skills Database Popup Content --- */}
              {activePopup === 'skillsDatabase' && (
                 <div>
                  <div className="flex items-center mb-4">
                    <Database size={32} className="text-blue-600 mr-2" />
                    <h3 className="font-bold">Employee Skillset Explorer</h3>
                  </div>
                  {/* Container for the employee cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {employees.map((employee) => {
                      // Split skills string into an array, trim whitespace, and filter out empty strings
                      const skillList = employee.skills.split(',').map(s => s.trim()).filter(s => s);

                      return (
                        // Individual employee card
                        <div key={employee.name} className="border rounded-lg p-4">
                          <h4 className="font-bold mb-1">{employee.name}</h4>
                          <p className="text-sm text-gray-600 mb-2">
                            Experience: {employee.experience} years | Score: {employee.productivityScore}
                          </p>
                          {/* Skill badges container */}
                          <div className="mt-2 flex flex-wrap gap-1">
                            {skillList.map((skill, skillIndex) => {
                              // Cycle through colors using modulo operator
                              const colorIndex = skillIndex % skillColors.length;
                              const colorClasses = skillColors[colorIndex];
                              return (
                                <span key={`${employee.name}-${skill}-${skillIndex}`} className={`text-xs px-2 py-0.5 rounded ${colorClasses}`}>
                                  {skill}
                                </span>
                              );
                            })}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* --- Other Popup Contents (HR Agent, Allocation Agent, etc.) --- */}
              {/* ... (keep existing content for other popups) ... */}
               {/* --- HR Agent Popup Content --- */}
              {activePopup === "hrAgent" && (
                <div className="flex flex-col items-center">
                  <div className="mb-4 relative">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-purple-500 shadow-lg">
                      <img
                        src="/hr.jpg"
                        
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <Bot size={24} className="text-purple-700 absolute -bottom-1 -right-1 bg-white rounded-full p-1" />
                  </div>
                  <h3 className="font-bold text-lg mb-4">HR Agent</h3>
                  <div className="bg-gray-100 w-full p-4 rounded-lg mb-4">
                    <p className="italic text-gray-700">
                      "I can help manage employee records, track task
                      assignments, and coordinate with the Task Allocation Agent
                      to optimize workloads."
                    </p>
                  </div>
                  <div className="border rounded-lg p-4 w-full mb-4">
                    <h4 className="font-medium mb-2">
                      Current Responsibilities:
                    </h4>
                    <ul className="pl-5 list-disc">
                      <li>Task progress tracking</li>
                      <li>Employee availability monitoring</li>
                      <li>Performance metrics analysis</li>
                    </ul>
                  </div>

                  {/* Task Assignment Response Section */}
                  {taskAllocationResponse && (
                    <div className="w-full mt-4 p-4 rounded-lg border">
                      <h4 className="font-medium mb-2">Task Assignment Status</h4>
                      {taskAllocationResponse.error ? (
                        <div className="bg-red-100 text-red-700 p-3 rounded">
                          {taskAllocationResponse.error}
                        </div>
                      ) : (
                        <div className="space-y-2">
                          <div className="bg-green-100 text-green-700 p-3 rounded">
                            Task successfully assigned!
                          </div>
                          {/* <div className="bg-gray-50 p-3 rounded">
                            <p><strong>Assigned To:</strong> {taskAllocationResponse.assigned_to}</p>
                            <p><strong>Task Priority:</strong> {taskAllocationResponse.priority}</p>
                            <p><strong>Expected Duration:</strong> {taskAllocationResponse.duration}</p>
                            {taskAllocationResponse.notes && (
                              <p><strong>Notes:</strong> {taskAllocationResponse.notes}</p>
                            )}
                          </div> */}
                            <p className="mt-4 text-sm text-gray-700 text-center">
    {taskAllocationResponse.response}
  </p>

                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}

              {/* --- Allocation Agent Popup Content --- */}
              {activePopup === "allocationAgent" && (
                <div className="flex flex-col items-center">
                  <div className="mb-4 relative">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-blue-500 shadow-lg">
                      <img
                        src="/task.jpg"
                        alt="Task Distribution Agent"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <Bot size={24} className="text-blue-700 absolute -bottom-1 -right-1 bg-white rounded-full p-1" />
                  </div>
                  <h3 className="font-bold text-lg mb-4">Task Distribution Agent</h3>
                  <div className="bg-gray-100 w-full p-4 rounded-lg mb-4">
                    <p className="italic text-gray-700">
                      "I analyze task requirements and employee skillsets to
                      optimize task assignments and ensure timely completion
                      with the right resources."
                    </p>
                  </div>
                  <div className="border rounded-lg p-4 w-full">
                    <h4 className="font-medium mb-2">Task Analysis Results:</h4>
                    <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
                      <p className="font-medium text-gray-700 mb-2">Task Description:</p>
                      <p className="text-gray-600 mb-4">{taskInput}</p>
                    </div>
                    <h4 className="font-medium mb-2">Recommended Allocations:</h4>
                    {recommendations ? (
                      <div className="space-y-2">
                        {recommendations.split('\n').map((rec, index) => (
                          rec.trim() && (
                            <div key={index} className="bg-gray-50 p-3 rounded text-gray-700 border border-gray-100">
                              {rec.replace(/[\[\]]/g, '')} {/* Remove square brackets */}
                            </div>
                          )
                        ))}
                      </div>
                    ) : (
                      <p className="text-gray-500 italic">Processing task allocation...</p>
                    )}
                  </div>
                </div>
              )}

              {/* --- File Uploaded Popup Content --- */}
              {activePopup === "fileUploaded" && (
                <div className="text-center">
                  <div className="bg-green-100 text-green-700 rounded-full p-4 inline-block mb-4">
                    <FileText size={48} />
                  </div>
                  <h3 className="text-xl font-bold mb-4">
                    File Uploaded Successfully!
                  </h3>

                  {uploadedFile && (
                    <div className="bg-gray-50 rounded-lg p-4 mb-4 text-left">
                      <div className="flex items-center">
                        <div className="mr-3">
                          <FileText size={24} className="text-blue-600" />
                        </div>
                        <div>
                          <p className="font-medium">{uploadedFile.name}</p>
                          <p className="text-sm text-gray-500">
                            {uploadedFile.size}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  <p className="mb-4">
                    Your task file has been received and is being processed by
                    the Task Allocation Agent.
                  </p>
                  <p className="text-sm text-gray-600">
                    You will receive a notification when the task has been
                    assigned.
                  </p>
                </div>
              )}

              {/* --- Task Submitted Popup Content --- */}
              {activePopup === "taskSubmitted" && (
                <div className="text-center">
                  <div className="bg-green-100 text-green-700 rounded-full p-4 inline-block mb-4">
                    <Search size={48} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    Task Submitted Successfully!
                  </h3>
                  <p className="mb-2">
                    Task description:{" "}
                    <span className="font-medium">{taskInput}</span>
                  </p>
                  <p className="mb-4">
                    The Task Allocation Agent is now analyzing and assigning
                    this task to the most suitable employee.
                  </p>
                  <p className="text-sm text-gray-600">
                    Task ID: #TA{Math.floor(Math.random() * 10000)}
                  </p>
                </div>
              )}

            </div> {/* End Popup Content Area */}

            {/* Popup Footer (Close Button) */}
            <div className="mt-6 flex justify-end sticky bottom-0 bg-white py-4 px-6 border-t">
              <button
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg"
                onClick={closePopup}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
