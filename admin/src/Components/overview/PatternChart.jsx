import React from 'react'
import {motion } from 'framer-motion'
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";

const categoryData = [
	{ name: "Keystrokes", value: 42 },
	{ name: "Mouse Moves", value: 350 },
	{ name: "Tab Swaps", value: 300 },
	{ name: "Copy-Paste", value: 250 },
	{ name: "Inactivity", value: 220 },
];

const COLORS = ["#4F46E5", "#9333EA", "#E11D48", "#059669", "#F97316"];
const PatternChart = () => {
  return (
    <motion.div
    className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700'
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.3 }}
>
<h2 className='text-lg font-medium mb-4 text-gray-100'>Risk Pattern Analysis</h2>
<div className='h-80'>
<ResponsiveContainer width={"100%"} height={"100%"}>
					<PieChart>
						<Pie
							data={categoryData}
							cx={"50%"}
							cy={"50%"}
                           
							labelLine={false}
                         
							outerRadius={80}
							fill='#8884d8'
							dataKey='value'
                            
							label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                            
						>
							{categoryData.map((entry, index) => (
								<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
							))}
						</Pie>
						<Tooltip
							contentStyle={{
								backgroundColor: "rgba(31, 41, 55, 0.8)",
								borderColor: "#4B5563",
							}}
							itemStyle={{ color: "#E5E7EB" }}
						/>
						<Legend />
					</PieChart>
				</ResponsiveContainer>
                </div>
</motion.div>
  )
}

export default PatternChart