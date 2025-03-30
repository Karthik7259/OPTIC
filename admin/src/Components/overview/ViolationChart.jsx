import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";
import React from 'react'

const violationData = [
	{ name: "Jul", violations: 15 },
	{ name: "Aug", violations: 12 },
	{ name: "Sep", violations: 18 },
	{ name: "Oct", violations: 14 },
	{ name: "Nov", violations: 20 },
	{ name: "Dec", violations: 25 },
	{ name: "Jan", violations: 22 },
	{ name: "Feb", violations: 19 },
	
	
];


const ViolationChart = () => {
  return (
    <motion.div
    className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-4 border border-gray-700'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.2 }}
    
    >
         <h2 className='text-lg font-medium mb-4 text-gray-100'>Violation Trend Analysis</h2>

               <div className="h-80">
                         <ResponsiveContainer width={"100%"} height={"100%"}>
                              <LineChart data={violationData}
                              margin={{ top: 10, right: 30, left: 10, bottom: 20 }}
                              >
                              <CartesianGrid strokeDasharray='3 3' stroke='#4B5563' />
                              <XAxis dataKey={"name"} stroke='#9ca3af'
                              interval={0}
                              />
                              <YAxis stroke='#9ca3af' />
                              <Tooltip
							contentStyle={{
								backgroundColor: "rgba(31, 41, 55, 0.8)",
								borderColor: "#4B5563",
							}}
							itemStyle={{ color: "#E5E7EB" }}
						/>
                        <Line
							type='monotone'
							dataKey='violations'
							stroke='#6366F1'
							strokeWidth={3}
							dot={{ fill: "#6366F1", strokeWidth: 2, r: 6 }}
							activeDot={{ r: 8, strokeWidth: 2 }}
						/>
                        </LineChart>
                         </ResponsiveContainer>
               </div>

        </motion.div>
  )
}

export default ViolationChart