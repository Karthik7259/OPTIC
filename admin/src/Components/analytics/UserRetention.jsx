import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";

const riskTrendData = [
	{ name: "Week 1", riskScore: 85 },
	{ name: "Week 2", riskScore: 80 },
	{ name: "Week 3", riskScore: 78 },
	{ name: "Week 4", riskScore: 75 },
	{ name: "Week 5", riskScore: 72 },
	{ name: "Week 6", riskScore: 70 },
	{ name: "Week 7", riskScore: 68 },
	{ name: "Week 8", riskScore: 65 },
];


const UserRetention = () => {
	return (
		<motion.div
			className='bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6 border border-gray-700'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.5 }}
		>
			<h2 className='text-xl font-semibold text-gray-100 mb-4'>User Retention</h2>
			<div style={{ width: "100%", height: 300 }}>
				<ResponsiveContainer>
					<LineChart data={riskTrendData }>
						<CartesianGrid strokeDasharray='3 3' stroke='#374151' />
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
						<Line type='monotone' dataKey='riskScore' stroke='#8B5CF6' strokeWidth={2} />
					</LineChart>
				</ResponsiveContainer>
			</div>
		</motion.div>
	);
};
export default UserRetention;