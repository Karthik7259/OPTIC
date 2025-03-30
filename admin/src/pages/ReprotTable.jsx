
import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Eye } from "lucide-react";

const violationData = [
	{ id: "VIO001", candidate: "John Doe", riskScore: 85, status: "Severe", date: "2025-03-01" },
	{ id: "VIO002", candidate: "Jane Smith", riskScore: 72, status: "High", date: "2025-03-02" },
	{ id: "VIO003", candidate: "Bob Johnson", riskScore: 60, status: "Medium", date: "2025-03-03" },
	{ id: "VIO004", candidate: "Alice Brown", riskScore: 40, status: "Low", date: "2025-03-04" },
	{ id: "VIO005", candidate: "Charlie Wilson", riskScore: 90, status: "Severe", date: "2025-03-05" },
	{ id: "VIO006", candidate: "Eva Martinez", riskScore: 65, status: "High", date: "2025-03-06" },
	{ id: "VIO007", candidate: "David Lee", riskScore: 78, status: "High", date: "2025-03-07" },
	{ id: "VIO008", candidate: "Grace Taylor", riskScore: 50, status: "Medium", date: "2025-03-08" },
];


const ReprotTable = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [filteredOrders, setFilteredOrders] = useState(violationData);

	const handleSearch = (e) => {
		const term = e.target.value.toLowerCase();
		setSearchTerm(term);
		const filtered = violationData.filter(
			(violation) => violation.id.toLowerCase().includes(term) || violation.candidate.toLowerCase().includes(term)
		);
		setFilteredOrders(filtered);
	};

	return (
	
        <motion.div
	className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700'
	initial={{ opacity: 0, y: 20 }}
	animate={{ opacity: 1, y: 0 }}
	transition={{ delay: 0.4 }}
>
	<div className='flex justify-between items-center mb-6'>
		<h2 className='text-xl font-semibold text-gray-100'>Violation Reports</h2>
		<div className='relative'>
			<input
				type='text'
				placeholder='Search violations...'
				className='bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
				value={searchTerm}
				onChange={handleSearch}
			/>
			<Search className='absolute left-3 top-2.5 text-gray-400' size={18} />
		</div>
	</div>

	<div className='overflow-x-auto'>
		<table className='min-w-full divide-y divide-gray-700'>
			<thead>
				<tr>
					<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
						Violation ID
					</th>
					<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
						Candidate
					</th>
					<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
						Risk Score
					</th>
					<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
						Status
					</th>
					<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
						Date
					</th>
					<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
						Actions
					</th>
				</tr>
			</thead>

			<tbody className='divide divide-gray-700'>
				{filteredOrders.map((violation) => (
					<motion.tr
						key={violation.id}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.3 }}
					>
						<td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100'>
							{violation.id}
						</td>
						<td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100'>
							{violation.candidate}
						</td>
						<td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100'>
							{violation.riskScore}
						</td>
						<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
							<span
								className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
									violation.status === "Severe"
										? "bg-red-100 text-red-800"
										: violation.status === "High"
										? "bg-orange-100 text-orange-800"
										: violation.status === "Medium"
										? "bg-yellow-100 text-yellow-800"
										: "bg-green-100 text-green-800"
								}`}
							>
								{violation.status}
							</span>
						</td>
						<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>{violation.date}</td>
						<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
							<button className='text-indigo-400 hover:text-indigo-300 mr-2'>
								<Eye size={18} />
							</button>
						</td>
					</motion.tr>
				))}
			</tbody>
		</table>
	</div>
</motion.div>

	);
};
export default ReprotTable;