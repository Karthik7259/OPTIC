import { ClipboardList, Users, ShieldAlert, TrendingUp, Check } from 'lucide-react'
import { motion } from 'framer-motion'
import React, { useState, useEffect } from 'react'
import Header from '../Components/common/Header'
import StatCard from '../Components/common/StatCard'
import ViolationChart from '../Components/overview/ViolationChart'
import PatternChart from '../Components/overview/PatternChart'
import RiskChart from '../Components/overview/RiskChart'


const Overviewpage = () => {
  // Simplified state - just for notification
  const [notification, setNotification] = useState(null);
  
  // Show notification after 80 seconds automatically
  useEffect(() => {
    const notificationTimer = setTimeout(() => {
      setNotification('New exam completed: Physics by John Doe');
    }, 10000); // 80 seconds
    
    // Clean up timer when component unmounts
    return () => clearTimeout(notificationTimer);
  }, []);

  // Clear notification after it's shown
  useEffect(() => {
    if (notification) {
      const hideNotification = setTimeout(() => {
        setNotification(null);
      }, 5000); // Hide after 5 seconds

      return () => clearTimeout(hideNotification);
    }
  }, [notification]);

  return (
    <div className='flex-1 overflow-auto relative z-10'>
      {/* Notification with inline styles for animation */}
      {notification && (
        <div 
          className="fixed top-5 right-5 z-50" 
          style={{
            animation: 'slideIn 0.5s ease-out',
          }}
        >
          <div className="bg-green-500 text-white px-5 py-3 rounded-lg shadow-lg flex items-center gap-3">
            <Check size={20} />
            <p>{notification}</p>
          </div>
        </div>
      )}
      
      {/* Add keyframes for the animation */}
      <style jsx>{`
        @keyframes slideIn {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
      
      <Header title="Overview" />
      <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
        {/* stats */}
        <motion.div
          className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name="Total Exams Administered"
            icon={ClipboardList}
            value="5"
            color='#2563eb'
          />
          <StatCard name='New Users' icon={Users} value='3' color='#9333ea' />
          <StatCard name='Violation Detection Rate' icon={ShieldAlert} value='3' color='#dc2626' />
          <StatCard name='Risk Escalation Trend	' icon={TrendingUp} value='12.5%' color='#f97316' />
        </motion.div>

        {/* Charts and Reports Grid */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
          <ViolationChart />
          <PatternChart />
          <RiskChart />
        </div>
      </main>
    </div>
  );
}

export default Overviewpage;