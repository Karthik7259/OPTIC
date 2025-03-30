import React from 'react'
import Header from '../Components/common/Header';
import { motion } from "framer-motion";
import StatCard from '../Components/common/StatCard';
import { AlertTriangle, BarChart, Eye, ShieldAlert } from 'lucide-react';
import RiskOverview from '../Components/Risks/RiskOverview';
import RiskByCategoryChart from '../Components/Risks/RiskByCategoryChart';
import DailyRiskTrend from '../Components/Risks/DailyRiskTrend';


const riskStats = {
	totalFlags: 8, 
	averageRiskScore: "55%", 
	highRiskExams: 4, 
	suspiciousActivityRate: "9%", 
};



const RiskPage = () => {
  return (
    <div className='flex-1 overflow-auto relative z-10'>
    <Header title='Risk Analysis Overview' />

            
    <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
                       {/* Stats section */}
                       <motion.div
					className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
				>
                           <StatCard name='Total Flags' icon={AlertTriangle} value={riskStats.totalFlags} color='#EF4444' />
<StatCard
	name='Avg. Risk Score'
	icon={BarChart}
	value={riskStats.averageRiskScore}
	color='#6366F1'
/>
<StatCard
	name='High-Risk Exams'
	icon={ShieldAlert}
	value={riskStats.highRiskExams}
	color='#F59E0B'
/>
<StatCard
	name='Suspicious Activity Rate'
	icon={Eye}
	value={riskStats.suspiciousActivityRate}
	color='#10B981'
/>
               </motion.div>
                   <RiskOverview/>
                   <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
					<RiskByCategoryChart />
					<DailyRiskTrend />
				</div>

    </main>
    </div>
  )
}

export default RiskPage