import React from 'react'
import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Cell } from "recharts";


const RISK_CATEGORY_DATA = [
	{ name: "Low Risk", value: 42000 },
	{ name: "Medium Risk", value: 35000 },
	{ name: "High Risk", value: 28000 },
	{ name: "Critical Risk", value: 18000 },
];

const COLORS = ["#4F46E5", "#9333EA", "#E11D48", "#059669", "#F97316"];

const RiskChart = () => {
  return (
    <motion.div
    className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 lg:col-span-2 border border-gray-700'
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.4 }}
>
<h2 className='text-lg font-medium mb-4 text-gray-100'>Risk Category</h2>
<div className='h-80'>
<ResponsiveContainer>
					<BarChart data={RISK_CATEGORY_DATA}>
						<CartesianGrid strokeDasharray='3 3' stroke='#4B5563' />
						<XAxis dataKey='name' stroke='#9CA3AF' />
						<YAxis stroke='#9CA3AF' />
						<Tooltip
							contentStyle={{
								backgroundColor: "rgba(31, 41, 55, 0.8)",
								borderColor: "#4B5563",
							}}
							itemStyle={{ color: "#E5E7EB" }}
						/>
						<Legend />
						<Bar dataKey={"value"} fill='#8884d8'>
							{RISK_CATEGORY_DATA.map((entry, index) => (
								<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
							))}
						</Bar>
					</BarChart>
				</ResponsiveContainer>
                </div>
</motion.div>
  )
}

export default RiskChart