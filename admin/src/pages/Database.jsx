import { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { ArrowUpDown, Star, Users, Clock } from "lucide-react";

export default function EmployeeDashboard() {
  const [employees, setEmployees] = useState([]);
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "ascending",
  });
  const [loading, setLoading] = useState(true);

  // Simulate fetching data from MongoDB
  useEffect(() => {
    // This mimics an API call to fetch data
    setTimeout(() => {
      const data = [
        {
          name: "Alice",
          skills: ["React", "Node.js", "MongoDB"],
          experience: 3,
          productivityScore: 8.5,
        },
        {
          name: "Bob",
          skills: ["Python", "Flask", "PostgreSQL"],
          experience: 5,
          productivityScore: 9.2,
        },
        {
          name: "Charlie",
          skills: ["Vue.js", "Firebase", "TailwindCSS"],
          experience: 2,
          productivityScore: 7.8,
        },
        {
          name: "David",
          skills: ["Django", "Python", "AWS"],
          experience: 6,
          productivityScore: 9.5,
        },
        {
          name: "Eve",
          skills: ["Angular", "Java", "Spring Boot"],
          experience: 4,
          productivityScore: 8.0,
        },
        {
          name: "Frank",
          skills: ["Go", "Kubernetes", "Docker"],
          experience: 7,
          productivityScore: 9.7,
        },
        {
          name: "Grace",
          skills: ["Swift", "iOS", "Xcode"],
          experience: 2,
          productivityScore: 7.5,
        },
        {
          name: "Heidi",
          skills: ["C#", "Azure", "SQL Server"],
          experience: 3,
          productivityScore: 8.3,
        },
        {
          name: "Ivy",
          skills: ["JavaScript", "React", "CSS"],
          experience: 3,
          productivityScore: 7.9,
        },
        {
          name: "Jack",
          skills: ["Ruby", "Rails", "Heroku"],
          experience: 3,
          productivityScore: 8.1,
        },
        {
          name: "Karen",
          skills: ["PHP", "Laravel", "MySQL"],
          experience: 3,
          productivityScore: 8.4,
        },
      ];
      setEmployees(data);
      setLoading(false);
    }, 1000);
  }, []);

  // Sort function
  const sortBy = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });

    const sortedData = [...employees].sort((a, b) => {
      if (a[key] < b[key]) {
        return direction === "ascending" ? -1 : 1;
      }
      if (a[key] > b[key]) {
        return direction === "ascending" ? 1 : -1;
      }
      return 0;
    });

    setEmployees(sortedData);
  };

  // Function to get color based on productivity score
  const getScoreColor = (score) => {
    if (score >= 9.0) return "bg-green-500";
    if (score >= 8.0) return "bg-blue-500";
    if (score >= 7.0) return "bg-yellow-500";
    return "bg-red-500";
  };

  // Calculate average productivity score
  const averageScore =
    employees.length > 0
      ? (
          employees.reduce((sum, emp) => sum + emp.productivityScore, 0) /
          employees.length
        ).toFixed(1)
      : 0;

  // Calculate total years of experience
  const totalExperience = employees.reduce(
    (sum, emp) => sum + emp.experience,
    0
  );

  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-lg max-w-6xl mx-auto relative z-10">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Employee Skills Dashboard
      </h1>
  
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : (
        <>
          {/* Data Table */}
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                    onClick={() => sortBy("name")}
                  >
                    <div className="flex items-center">
                      Name
                      <ArrowUpDown className="ml-1 h-4 w-4" />
                    </div>
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Skill Set
                  </th>
                  <th
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                    onClick={() => sortBy("experience")}
                  >
                    <div className="flex items-center">
                      Experience (Years)
                      <ArrowUpDown className="ml-1 h-4 w-4" />
                    </div>
                  </th>
                  <th
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                    onClick={() => sortBy("productivityScore")}
                  >
                    <div className="flex items-center">
                      Productivity Score
                      <ArrowUpDown className="ml-1 h-4 w-4" />
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {employees.map((employee, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {employee.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="flex flex-wrap gap-1">
                        {employee.skills.map((skill, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {employee.experience}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div
                          className={`h-2.5 w-24 rounded-full overflow-hidden bg-gray-200`}
                        >
                          <div
                            className={`h-full ${getScoreColor(
                              employee.productivityScore
                            )}`}
                            style={{
                              width: `${
                                (employee.productivityScore / 10) * 100
                              }%`,
                            }}
                          ></div>
                        </div>
                        <span className="ml-3 text-sm font-medium text-gray-900">
                          {employee.productivityScore}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}
