// c:\Documents\optic\AURA_AI\admin\src\App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Overviewpage from './pages/Overviewpage';
import ExamPage from './pages/ExamPage';
import SettingsPage from './pages/settingsPage';
import Sidebar from './Components/Sidebar';
import UsersPage from './pages/UsersPage';
import RiskPage from './pages/RiskPage';
import ViolationPage from './pages/ViolationPage';
import AnalyticsPage from './pages/analyticsPage';
import SchedulePage from './pages/SchedulePage';
import AssignTask from './pages/AssignTask';
import Database from './pages/Database';

const App = () => {
  return (
    // REMOVED overflow-hidden from here
    <div className='flex h-screen bg-gradient-to-br from-amber-100 via-purple-300 to-purple-900'>
      {/* BG */}
      <div className='fixed inset-0 z-0'>
        <div className='absolute inset-0 bg-gradient-to-br from-amber-100 via-purple-300 to-purple-900 opacity-80' />
        <div className='absolute inset-0 backdrop-blur-sm' />
      </div>

      <Sidebar />

      {/* ADDED this wrapper div for the content area */}
      <div className='flex-1 overflow-y-auto relative z-10'> {/* flex-1 makes it take remaining space, overflow-y-auto enables scrolling */}
        <Routes>
          <Route path='/' element={<Overviewpage />} />
          <Route path='/Exam' element={<ExamPage />} />
          <Route path='/AssignTask' element={<AssignTask />} />
          <Route path='/Schedule' element={<SchedulePage />} />
          <Route path='/users' element={<UsersPage />} />
          <Route path='/risk' element={<RiskPage />} />
          {/* <Route path='/Violation' element={<ViolationPage/>}/> */}
          {/* <Route path='/analytics' element={<AnalyticsPage/>}/> */}
          <Route path='/setting' element={<SettingsPage />} />
          <Route path='/database' element={<Database />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
