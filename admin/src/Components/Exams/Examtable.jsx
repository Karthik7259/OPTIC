import { useState } from "react";
import { motion } from "framer-motion";
import { Edit, Trash2, Search,Download } from "lucide-react";
import jsPDF from "jspdf";
// Replace this with your real data or import it
const EMPLOYEE_TASK_DATA = [
	{
	  id: 1,
	  employeeName: "Alice",
	  skillset: ["React", "Node.js", "MongoDB"],
	  experience: "3 years",
	  tasksHandled: 12,
	  currentTask: {
		title: "Build Authentication Module",
		assignedByAgent: true,
		assignedAt: "2025-04-25T09:00:00Z",
		subTasks: [
		  { subTaskTitle: "Design Authentication UI", deadline: "2025-04-26T12:00:00Z", completed: false },
		  { subTaskTitle: "Implement API for Authentication", deadline: "2025-04-27T12:00:00Z", completed: false }
		],
		finalFeedbackGenerated: false
	  }
	},
	{
	  id: 2,
	  employeeName: "Bob",
	  skillset: ["Python", "Flask", "PostgreSQL"],
	  experience: "5 years",
	  tasksHandled: 20,
	  currentTask: {
		title: "API Backend for Task Management",
		assignedByAgent: true,
		assignedAt: "2025-04-25T10:00:00Z",
		subTasks: [
		  { subTaskTitle: "Create Task Management Database", deadline: "2025-04-26T14:00:00Z", completed: false },
		  { subTaskTitle: "Develop API Endpoints", deadline: "2025-04-27T14:00:00Z", completed: false }
		],
		finalFeedbackGenerated: false
	  }
	},
	{
	  id: 3,
	  employeeName: "Charlie",
	  skillset: ["Vue.js", "Firebase", "TailwindCSS"],
	  experience: "2 years",
	  tasksHandled: 8,
	  currentTask: {
		title: "Develop E-commerce Dashboard",
		assignedByAgent: true,
		assignedAt: "2025-04-25T11:00:00Z",
		subTasks: [
		  { subTaskTitle: "Create Dashboard UI", deadline: "2025-04-26T15:00:00Z", completed: false },
		  { subTaskTitle: "Integrate Firebase for Authentication", deadline: "2025-04-27T15:00:00Z", completed: false }
		],
		finalFeedbackGenerated: false
	  }
	},
	{
	  id: 4,
	  employeeName: "David",
	  skillset: ["Django", "Python", "AWS"],
	  experience: "6 years",
	  tasksHandled: 30,
	  currentTask: {
		title: "Cloud Deployment Automation",
		assignedByAgent: true,
		assignedAt: "2025-04-24T15:30:00Z",
		subTasks: [
		  { subTaskTitle: "Set up Cloud Infrastructure", deadline: "2025-04-25T18:00:00Z", completed: false },
		  { subTaskTitle: "Automate Deployment Pipeline", deadline: "2025-04-26T18:00:00Z", completed: false }
		],
		finalFeedbackGenerated: true
	  }
	},
	{
	  id: 5,
	  employeeName: "Eve",
	  skillset: ["Angular", "Java", "Spring Boot"],
	  experience: "4 years",
	  tasksHandled: 17,
	  currentTask: {
		title: "Microservices Integration",
		assignedByAgent: true,
		assignedAt: "2025-04-25T12:00:00Z",
		subTasks: [
		  { subTaskTitle: "Integrate Service A", deadline: "2025-04-26T17:00:00Z", completed: false },
		  { subTaskTitle: "Integrate Service B", deadline: "2025-04-27T17:00:00Z", completed: false }
		],
		finalFeedbackGenerated: false
	  }
	},
	{
	  id: 6,
	  employeeName: "Frank",
	  skillset: ["Go", "Kubernetes", "Docker"],
	  experience: "7 years",
	  tasksHandled: 40,
	  currentTask: {
		title: "Containerize Legacy Application",
		assignedByAgent: true,
		assignedAt: "2025-04-25T13:00:00Z",
		subTasks: [
		  { subTaskTitle: "Containerize Service 1", deadline: "2025-04-26T18:00:00Z", completed: false },
		  { subTaskTitle: "Test Containerized Service", deadline: "2025-04-27T18:00:00Z", completed: false }
		],
		finalFeedbackGenerated: false
	  }
	},
	{
	  id: 7,
	  employeeName: "Grace",
	  skillset: ["Swift", "iOS", "Xcode"],
	  experience: "2 years",
	  tasksHandled: 10,
	  currentTask: {
		title: "iOS UI Revamp",
		assignedByAgent: true,
		assignedAt: "2025-04-23T09:45:00Z",
		subTasks: [
		  { subTaskTitle: "Revamp Home Screen UI", deadline: "2025-04-24T10:00:00Z", completed: false },
		  { subTaskTitle: "Improve Navigation Flows", deadline: "2025-04-25T10:00:00Z", completed: false }
		],
		finalFeedbackGenerated: false
	  }
	},
	{
	  id: 8,
	  employeeName: "Heidi",
	  skillset: ["C#", "Azure", "SQL Server"],
	  experience: "3 years",
	  tasksHandled: 14,
	  currentTask: {
		title: "Develop Azure Cloud Service",
		assignedByAgent: true,
		assignedAt: "2025-04-25T14:00:00Z",
		subTasks: [
		  { subTaskTitle: "Set up Azure Resource Group", deadline: "2025-04-26T16:00:00Z", completed: false },
		  { subTaskTitle: "Deploy Service to Azure", deadline: "2025-04-27T16:00:00Z", completed: false }
		],
		finalFeedbackGenerated: false
	  }
	},
	{
	  id: 9,
	  employeeName: "Ivy",
	  skillset: ["JavaScript", "React", "CSS"],
	  experience: "3 years",
	  tasksHandled: 14,
	  currentTask: {
		title: "Frontend Development for Dashboard",
		assignedByAgent: true,
		assignedAt: "2025-04-25T15:00:00Z",
		subTasks: [
		  { subTaskTitle: "Create Dashboard UI", deadline: "2025-04-26T19:00:00Z", completed: false },
		  { subTaskTitle: "Implement User Authentication", deadline: "2025-04-27T19:00:00Z", completed: false }
		],
		finalFeedbackGenerated: false
	  }
	},
	{
	  id: 10,
	  employeeName: "Jack",
	  skillset: ["Ruby", "Rails", "Heroku"],
	  experience: "3 years",
	  tasksHandled: 14,
	  currentTask: {
		title: "Web Application Deployment",
		assignedByAgent: true,
		assignedAt: "2025-04-25T16:00:00Z",
		subTasks: [
		  { subTaskTitle: "Set up Web Server", deadline: "2025-04-26T20:00:00Z", completed: false },
		  { subTaskTitle: "Deploy Web Application to Heroku", deadline: "2025-04-27T20:00:00Z", completed: false }
		],
		finalFeedbackGenerated: false
	  }
	},
	{
	  id: 11,
	  employeeName: "Karen",
	  skillset: ["PHP", "Laravel", "MySQL"],
	  experience: "3 years",
	  tasksHandled: 14,
	  currentTask: {
		title: "Develop API for Web Application",
		assignedByAgent: true,
		assignedAt: "2025-04-25T17:00:00Z",
		subTasks: [
		  { subTaskTitle: "Create API Endpoints", deadline: "2025-04-26T21:00:00Z", completed: false },
		  { subTaskTitle: "Integrate Database with API", deadline: "2025-04-27T21:00:00Z", completed: false }
		],
		finalFeedbackGenerated: false
	  }
	}
  ];
  
const Examtable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(EMPLOYEE_TASK_DATA);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = EMPLOYEE_TASK_DATA.filter(
      (emp) =>
        emp.employeeName.toLowerCase().includes(term) ||
        emp.skillset.join(" ").toLowerCase().includes(term)
    );
    setFilteredData(filtered);
  };

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-100">
          Employee Task Dashboard
        </h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search employees..."
            className="bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleSearch}
            value={searchTerm}
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-700">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Employee
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Skillset
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Experience
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Tasks Handled
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Current Task
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {filteredData.map((emp) => (
              <motion.tr
                key={emp.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">
                  {emp.employeeName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {emp.skillset.join(", ")}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {emp.experience}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {emp.tasksHandled}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {emp.currentTask ? (
                    emp.currentTask.title
                  ) : (
                    <span className="text-gray-500 italic">No task</span>
                  )}
                </td>
				<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                  {/* Use an anchor tag for downloading */}
                  <a
                    href="/report.pdf" // Path relative to the public folder
                    download="employee_report.pdf" // Optional: Suggest a filename for the user
                    className="text-blue-400 hover:text-blue-300 inline-flex items-center" // Add styling to make it look like a button/link if needed
                    title="Download Report" // Tooltip for accessibility
                  >
                    <Download size={18} />
                    {/* Optional: Add text next to the icon */}
                    {/* <span className="ml-1">Download</span> */}
                  </a>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default Examtable;
