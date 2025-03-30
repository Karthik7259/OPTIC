import { motion } from "framer-motion";
import React from 'react'
import Header from '../Components/common/Header'
import { AlertTriangle, CheckCircle, ClipboardList, PauseCircle } from "lucide-react";
import StatCard from "../Components/common/StatCard";
import Examtable from "../Components/Exams/Examtable";
import ExamChart from "../Components/Exams/ExamChart";
import RiskChart from "../Components/overview/RiskChart";
import PatternChart from "../Components/overview/PatternChart";

const ExamPage = () => {
  return (
    <div className='flex-1 overflow-auto relative z-10'>
			<Header title='Exams' />
            <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
 {/* stats */}
 <motion.div
        className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      
      >
              <StatCard
              name="Active Exams"
              icon={ClipboardList}
              value= "2"
              color='#4F46E5'

              />
              <StatCard name='Completed Exams' icon={CheckCircle} value='5' color='#10B981' />
					<StatCard name='Inactive Candidates' icon={PauseCircle} value='1 cases' color='#9CA3AF' />
					<StatCard name='High-Risk Attempts' icon={AlertTriangle} value='2' color='#DC2626' />
      </motion.div>
{/* Exam table */}
      <Examtable/>
     {/* Charts */}
     <div className='grid grid-col-1 lg:grid-cols-2 gap-8'>
					<ExamChart/>
					<PatternChart />
				</div>

      </main>
            </div>
  )
}

export default ExamPage