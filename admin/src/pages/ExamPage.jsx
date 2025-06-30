import { motion } from "framer-motion";
import React from 'react'
import Header from '../Components/common/Header'
import { ClipboardList, CheckCircle, PauseCircle, AlertTriangle, Bot, UploadCloud, Coffee, MessageSquare } from 'lucide-react';
import StatCard from "../Components/common/StatCard";
import Examtable from "../Components/Exams/Examtable";
import ExamChart from "../Components/Exams/ExamChart";
import RiskChart from "../Components/overview/RiskChart";
import PatternChart from "../Components/overview/PatternChart";

const ExamPage = () => {
  return (
    <div className='flex-1 overflow-auto relative z-10'>
			<Header title='Employees' />
            <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
 {/* stats */}
 <motion.div
        className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      
      >
              <StatCard
  name="Smart Task Allocations"
  icon={Bot}
  value="7"
  color="#4F46E5"
/>

<StatCard
  name="Code Checkpoint Submissions"
  icon={UploadCloud}
  value="13"
  color="#10B981"
/>

<StatCard
  name="Wellness Breaks Suggested"
  icon={Coffee}
  value="4"
  color="#F59E0B"
/>

<StatCard
  name="Agent-Generated Feedback"
  icon={MessageSquare}
  value="9"
  color="#0EA5E9"
/>







      </motion.div>
{/* Exam table */}
      <Examtable/>
     {/* Charts */}
     

      </main>
            </div>
  )
}

export default ExamPage