import { motion } from "framer-motion";
import {
	ResponsiveContainer,
	Radar,
	RadarChart,
	PolarGrid,
	PolarAngleAxis,
	PolarRadiusAxis,
	Legend,
	Tooltip,
} from "recharts";

const candidateBehaviorSegmentationData = [
	{ subject: "Mouse Movement", LowRisk: 120, HighRisk: 110, fullMark: 150 },
	{ subject: "Keystroke Dynamics", LowRisk: 98, HighRisk: 130, fullMark: 150 },
	{ subject: "Tab Switching", LowRisk: 86, HighRisk: 130, fullMark: 150 },
	{ subject: "Idle Time", LowRisk: 99, HighRisk: 100, fullMark: 150 },
	{ subject: "Unusual Activity", LowRisk: 85, HighRisk: 90, fullMark: 150 },
	{ subject: "Rapid Answering", LowRisk: 65, HighRisk: 85, fullMark: 150 },
];


const CustomerSegmentation = () => {
	return (
		<motion.div
			className='bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6 border border-gray-700'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.6 }}
		>
			<h2 className='text-xl font-semibold text-gray-100 mb-4'>Candidate Behavior Segmentation</h2>
			<div style={{ width: "100%", height: 300 }}>
				<ResponsiveContainer>
					<RadarChart cx='50%' cy='50%' outerRadius='80%' data={candidateBehaviorSegmentationData}>
						<PolarGrid stroke='#374151' />
						<PolarAngleAxis dataKey='subject' stroke='#9CA3AF' />
						<PolarRadiusAxis angle={30} domain={[0, 150]} stroke='#9CA3AF' />
						<Radar name='Segment A' dataKey='LowRisk' stroke='#8B5CF6' fill='#8B5CF6' fillOpacity={0.6} />
						<Radar name='Segment B' dataKey='HighRisk' stroke='#10B981' fill='#10B981' fillOpacity={0.6} />
						<Legend />
						<Tooltip
							contentStyle={{
								backgroundColor: "rgba(31, 41, 55, 0.8)",
								borderColor: "#4B5563",
							}}
							itemStyle={{ color: "#E5E7EB" }}
						/>
					</RadarChart>
				</ResponsiveContainer>
			</div>
		</motion.div>
	);
};
export default CustomerSegmentation;
