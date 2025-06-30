import React from 'react';
import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Cell } from "recharts";

const RISK_CATEGORY_DATA = [
  { name: "Highly Productive", value: 5, names: ["Alice", "Bob", "Charlie", "David", "Eve"] },
  { name: "Stable Performance", value: 3, names: ["Frank", "Grace", "Heidi"] },
  { name: "Needs Support", value: 2, names: ["Ivy", "Jack"] },
  { name: "At Risk", value: 1, names: ["Karen"] },
];

const COLORS = ["#4F46E5", "#9333EA", "#E11D48", "#059669", "#F97316"];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div
        style={{
          backgroundColor: "rgba(31, 41, 55, 0.8)",
          border: "1px solid #4B5563",
          padding: "10px",
          borderRadius: "5px",
          color: "#E5E7EB",
        }}
      >
        <p className="label">{`${data.name}`}</p>
        <p>{`Value: ${data.value}`}</p>
        <p>Names:</p>
        <ul>
          {data.names.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
      </div>
    );
  }

  return null;
};

const RiskChart = () => {
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 lg:col-span-2 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      <h2 className="text-lg font-medium mb-4 text-gray-100">Risk Category</h2>
      <div className="h-80">
        <ResponsiveContainer>
          <BarChart data={RISK_CATEGORY_DATA}>
            <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
            <XAxis dataKey="name" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Bar dataKey={"value"} fill="#8884d8">
              {RISK_CATEGORY_DATA.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default RiskChart;