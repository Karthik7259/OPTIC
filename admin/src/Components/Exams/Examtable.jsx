import React from 'react'
import { motion } from "framer-motion";
import { Edit, Search, Trash2 } from "lucide-react";
import { useState } from "react";

const EXAM_DATA = [
	{ id: 1, name: "Mathematics Final", category: "Mathematics", difficulty: "Hard", maxScore: 100, studentsAttempted: 1200 },
	{ id: 2, name: "Physics Midterm", category: "Science", difficulty: "Medium", maxScore: 75, studentsAttempted: 950 },
	{ id: 3, name: "History Quiz", category: "History", difficulty: "Easy", maxScore: 50, studentsAttempted: 800 },
	{ id: 4, name: "Programming Basics", category: "Computer Science", difficulty: "Medium", maxScore: 100, studentsAttempted: 1100 },
	{ id: 5, name: "English Literature", category: "Language", difficulty: "Hard", maxScore: 90, studentsAttempted: 730 },
];




const Examtable = () => {

    const [searchTerm, setSearchTerm] = useState("");
	const [filteredExam, setFilteredExam] = useState(EXAM_DATA);
 
    const handleSearch = (e) => {
		const term = e.target.value.toLowerCase();
		setSearchTerm(term);
		const filtered = EXAM_DATA.filter(
			(exam) => exam.name.toLowerCase().includes(term) || exam.category.toLowerCase().includes(term)
		);

		setFilteredExam(filtered);
	};

  return (
    <motion.div
			className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.2 }}
		>

<div className='flex justify-between items-center mb-6'>
<h2 className='text-xl font-semibold text-gray-100'>Exam List</h2>
<div className='relative'>
					<input
						type='text'
						placeholder='Search products...'
						className='bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
						onChange={handleSearch}
						value={searchTerm}
					/>
					<Search className='absolute left-3 top-2.5 text-gray-400' size={18} />
				</div>
    </div>
    <div>
    <div className='overflow-x-auto'>
    <table className='min-w-full divide-y divide-gray-700'>
    <thead>
						<tr>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								Name
							</th>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								Category
							</th>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
                            difficulty
							</th>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
                            maxScore
							</th>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
                            students Attempted
							</th>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								Actions
							</th>
						</tr>
					</thead>
                    <tbody className='divide-y divide-gray-700'>
						{filteredExam.map((product) => (
							<motion.tr
								key={product.id}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.3 }}
							>
								<td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100 flex gap-2 items-center'>
									
									{product.name}
								</td>

								<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
									{product.category}
								</td>

								<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
									{product.difficulty}
								</td>
								<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>{product.maxScore}</td>
								<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>{product.studentsAttempted}</td>
								<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
									<button className='text-indigo-400 hover:text-indigo-300 mr-2'>
										<Edit size={18} />
									</button>
									<button className='text-red-400 hover:text-red-300'>
										<Trash2 size={18} />
									</button>
								</td>
							</motion.tr>
						))}
					</tbody>
        </table>
        </div>
    </div>
        </motion.div>
  )
}

export default Examtable