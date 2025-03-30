import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { motion } from "framer-motion";

const violationPerformanceData = [
	{ name: "Mouse Activity Anomalies", occurrences: 4200, riskScore: 85, flaggedCases: 1200 },
	{ name: "Keystroke Irregularities", occurrences: 3100, riskScore: 78, flaggedCases: 950 },
	{ name: "Frequent Tab Switching", occurrences: 2600, riskScore: 92, flaggedCases: 1300 },
	{ name: "Inactive Periods", occurrences: 2900, riskScore: 70, flaggedCases: 850 },
	{ name: "Copy-Paste Detection", occurrences: 1800, riskScore: 88, flaggedCases: 1100 },
];


const ProductPerformance = () => {
	return (
		<motion.div
			className='bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6 border border-gray-700'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.4 }}
		>
			<h2 className='text-xl font-semibold text-gray-100 mb-4'>User Performance</h2>
			<div style={{ width: "100%", height: 300 }}>
				<ResponsiveContainer>
					<BarChart data={violationPerformanceData}>
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
						<Bar dataKey='occurrences' fill='#8B5CF6' />
						<Bar dataKey='riskScore' fill='#10B981' />
						<Bar dataKey='flaggedCases' fill='#F59E0B' />
					</BarChart>
				</ResponsiveContainer>
			</div>
		</motion.div>
	);
};
export default ProductPerformance;