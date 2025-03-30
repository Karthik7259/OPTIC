import { motion } from "framer-motion";
import { ShieldCheck, AlertTriangle, EyeOff, BarChart2 } from "lucide-react";

const INSIGHTS = [
	{
		icon: ShieldCheck,
		color: "text-green-500",
		insight: "Low-risk candidates account for 75% of total test-takers, indicating a stable exam environment.",
	},
	{
		icon: AlertTriangle,
		color: "text-yellow-500",
		insight: "Medium-risk behaviors such as rapid answering and short idle times have increased by 10% this month.",
	},
	{
		icon: EyeOff,
		color: "text-red-500",
		insight: "High-risk activities, including multiple tab switches and irregular keystrokes, detected in 5% of candidates.",
	},
	{
		icon: BarChart2,
		color: "text-blue-500",
		insight: "Adaptive interventions reduced suspicious activity by 20%, improving exam integrity.",
	},
];


const AIPoweredInsights = () => {
	return (
		<motion.div
			className='bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6 border border-gray-700'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 1.0 }}
		>
			<h2 className='text-xl font-semibold text-gray-100 mb-4'>AI-Powered Insights</h2>
			<div className='space-y-4'>
				{INSIGHTS.map((item, index) => (
					<div key={index} className='flex items-center space-x-3'>
						<div className={`p-2 rounded-full ${item.color} bg-opacity-20`}>
							<item.icon className={`size-6 ${item.color}`} />
						</div>
						<p className='text-gray-300'>{item.insight}</p>
					</div>
				))}
			</div>
		</motion.div>
	);
};
export default AIPoweredInsights;
