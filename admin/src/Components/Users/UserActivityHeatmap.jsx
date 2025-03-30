import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { motion } from "framer-motion";

const userActivityData = [
        { name: "Mon", "0-4": 5, "4-8": 20, "8-12": 50, "12-16": 80, "16-20": 120, "20-24": 60 },
        { name: "Tue", "0-4": 8, "4-8": 25, "8-12": 60, "12-16": 90, "16-20": 130, "20-24": 70 },
        { name: "Wed", "0-4": 10, "4-8": 30, "8-12": 70, "12-16": 100, "16-20": 140, "20-24": 80 },
        { name: "Thu", "0-4": 6, "4-8": 35, "8-12": 65, "12-16": 110, "16-20": 135, "20-24": 85 },
        { name: "Fri", "0-4": 7, "4-8": 40, "8-12": 75, "12-16": 115, "16-20": 145, "20-24": 90 },
        { name: "Sat", "0-4": 12, "4-8": 45, "8-12": 85, "12-16": 125, "16-20": 155, "20-24": 95 },
        { name: "Sun", "0-4": 15, "4-8": 50, "8-12": 90, "12-16": 130, "16-20": 160, "20-24": 100 },
];

const UserActivityHeatmap = () => {
	return (
		<motion.div
			className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.4 }}
		>
			<h2 className='text-xl font-semibold text-gray-100 mb-4'>User Activity Heatmap</h2>
			<div style={{ width: "100%", height: 300 }}>
				<ResponsiveContainer>
					<BarChart data={userActivityData}>
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
						<Bar dataKey='0-4' stackId='a' fill='#6366F1' />
						<Bar dataKey='4-8' stackId='a' fill='#8B5CF6' />
						<Bar dataKey='8-12' stackId='a' fill='#EC4899' />
						<Bar dataKey='12-16' stackId='a' fill='#10B981' />
						<Bar dataKey='16-20' stackId='a' fill='#F59E0B' />
						<Bar dataKey='20-24' stackId='a' fill='#3B82F6' />
					</BarChart>
				</ResponsiveContainer>
			</div>
		</motion.div>
	);
};
export default UserActivityHeatmap;