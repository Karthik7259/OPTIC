import React from 'react'
import Header from '../Components/common/Header';
import { UserCheck, UserPlus, UsersIcon, UserX } from "lucide-react";
import { motion } from "framer-motion";
import StatCard from '../Components/common/StatCard';
import UserTable from '../Components/Users/UserTable';
import UserGrowthChart from '../Components/Users/UserGrowthChart';
import UserActivityHeatmap from '../Components/Users/UserActivityHeatmap';
import UserDemographicsChart from '../Components/Users/UserDemographicsChart';



const userStats = {
	totalUsers: 5,
	newUsersToday: 2,
	activeUsers: 3,
	churnRate: "0%",
};


const UsersPage = () => {
  return (
    <div className='flex-1 overflow-auto relative z-10'>
        <Header title='Responses' />
        <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
        {/* STATS */}
				<motion.div
					className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
				>
					<StatCard
						name='Total Users'
						icon={UsersIcon}
						value={userStats.totalUsers.toLocaleString()}
						color='#6366F1'
					/>
					<StatCard name='New Users Today' icon={UserPlus} value={userStats.newUsersToday} color='#10B981' />
					<StatCard
						name='Active Users'
						icon={UserCheck}
						value={userStats.activeUsers.toLocaleString()}
						color='#F59E0B'
					/>
					<StatCard name='Churn Rate' icon={UserX} value={userStats.churnRate} color='#EF4444' />
	
    			</motion.div>



                         <UserTable/>
              {/* USER CHARTS */}
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8'>
        
              <UserGrowthChart />
					<UserActivityHeatmap />
					<UserDemographicsChart />
                      
              </div>
                </main>
		</div>
  )
}

export default UsersPage;