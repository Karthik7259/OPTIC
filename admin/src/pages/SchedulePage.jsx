// import React, { useState,useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { Check, Clock, BookOpen, Users } from 'lucide-react';
// import Header from '../Components/common/Header';
// import axios from 'axios';

// const SchedulePage = () => {
//   const [subject, setSubject] = useState('');
//   const [students, setStudents] = useState([]);
//   const [time, setTime] = useState('');
//   const [date, setDate] = useState('');
//   const [duration, setDuration] = useState('60');
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [showConfirmation, setShowConfirmation] = useState(false);
//   const [mstudents, msetStudents] = useState([]);
//   const subjectOptions = [
//     { id: 1, name: 'Mathematics' },
//     { id: 2, name: 'Physics' },
//     { id: 3, name: 'Chemistry' },
//     { id: 4, name: 'Biology' },
//     { id: 5, name: 'Computer Science' },
//     { id: 6, name: 'English' },
//   ];
  


 

//   const fetchUserProfile = async () => {
//     try {
//       const response = await axios.get("http://localhost:4000/user/profile");
  
//       const studentData = response.data.map((student, index) => ({
//         id: student._id || index, // Use _id if available, else fallback to index
//         name: student.fullname || `Student ${index + 1}`, // Default fallback
//       }));
  
//       msetStudents(studentData); // Update state with fetched students
//     } catch (err) {
//       console.error("Error fetching student data:", err);
//     }
//   };
  
//   useEffect(() => {
//     fetchUserProfile(); // Fetch data when component mounts
//   }, []);
  
//   const defaultStudents = [
//     { id: 1, name: 'John Doe' },
//     { id: 2, name: 'Jane Smith' },
//     { id: 3, name: 'Mike Johnson' },
//     { id: 4, name: 'Sarah Williams' },
//     { id: 5, name: 'Alex Brown' },
//   ];
  
//   // const combinedOptions = mstudents.length > 0
//   // ? mstudents.map((student, index) => ({
//   //     id: index + 1, // Assign a sequential ID
//   //     name: student.name || `Student ${index + 1}`, // Use fetched name, else default
//   //     subject: subjectOptions[index % subjectOptions.length]?.name || "Unknown Subject", // Assign subjects cyclically
//   //   }))
//   // : [];

//   const handleStudentToggle = (studentId) => {
//     if (students.includes(studentId)) {
//       setStudents(students.filter(id => id !== studentId));
//     } else {
//       setStudents([...students, studentId]);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     // Map subject ID to subject name
//     const selectedSubject = subjectOptions.find(option => option.id === subject)?.name;

//     // Map student IDs to student names
//     const selectedStudents = students.map(studentId => {
//       return studentOptions.find(option => option.id === studentId)?.name;
//     });

//     const examData = {
//       subject: selectedSubject,
//       students: selectedStudents,
//       time,
//       date,
//       duration: `${duration} minutes`,
//     };

//     try {
//       console.log('Exam Data:', examData);
//       // If the server is running with http, change the following line to:
//       // const response = await axios.post('http://localhost:5000/add', examData);
//       const response = await axios.post('http://localhost:5000/add', examData);
//       console.log('Success:', response.data);
//       setShowConfirmation(true);
//     } catch (error) {
//       console.error('Error:', error);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const resetForm = () => {
//     setSubject('');
//     setStudents([]);
//     setTime('');
//     setDate('');
//     setDuration('60');
//     setShowConfirmation(false);
//   };

//   return (
//     <div className='flex-1 overflow-auto bg-blue-300 relative z-10'>
//       <Header title="Schedule Exam" />

//       <motion.div
//         className='max-w-4xl mx-auto py-6 px-4 lg:px-8'
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         {showConfirmation ? (
//           <div className='bg-gray-800 bg-opacity-60 backdrop-blur-md p-8 rounded-xl border border-green-500 text-center'>
//             <div className='w-16 h-16 bg-green-500 rounded-full mx-auto flex items-center justify-center mb-4'>
//               <Check size={32} />
//             </div>
//             <h2 className='text-2xl font-bold text-white mb-2'>Exam Scheduled Successfully!</h2>
//             <p className='text-gray-300 mb-6'>
//               Your exam has been scheduled and notifications will be sent to all selected students.
//             </p>
//             <button
//               onClick={resetForm}
//               className='px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors'
//             >
//               Schedule Another Exam
//             </button>
//           </div>
//         ) : (
//           <form onSubmit={handleSubmit} className='space-y-6'>
//             <div className='bg-gray-800 bg-opacity-60 backdrop-blur-md p-6 rounded-xl border border-gray-700'>
//               <div className='flex items-center mb-4'>
//                 <BookOpen className='text-blue-400 mr-2' size={20} />
//                 <h3 className='text-lg font-medium text-white'>Select Subject</h3>
//               </div>
              
//               <div className='grid grid-cols-2 md:grid-cols-3 gap-3'>
//                 {subjectOptions.map((subjectOption) => (
//                   <div 
//                     key={subjectOption.id}
//                     onClick={() => setSubject(subjectOption.id)}
//                     className={`p-4 rounded-lg cursor-pointer transition-all ${
//                       subject === subjectOption.id 
//                         ? 'bg-blue-600 text-white border-2 border-blue-400' 
//                         : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
//                     }`}
//                   >
//                     {subjectOption.name}
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className='bg-gray-800 bg-opacity-60 backdrop-blur-md p-6 rounded-xl border border-gray-700'>
//               <div className='flex items-center mb-4'>
//                 <Users className='text-blue-400 mr-2' size={20} />
//                 <h3 className='text-lg font-medium text-white'>Select Students</h3>
//               </div>
              
//               <div className='space-y-2 max-h-60 overflow-y-auto'>
//                 {studentOptions.map((studentOption) => (
//                   <div 
//                     key={studentOption.id}
//                     onClick={() => handleStudentToggle(studentOption.id)}
//                     className={`p-4 rounded-lg cursor-pointer transition-all flex justify-between items-center ${
//                       students.includes(studentOption.id)
//                         ? 'bg-blue-600 text-white border border-blue-400' 
//                         : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
//                     }`}
//                   >
//                     <span>{studentOption.name}</span>
//                     {students.includes(studentOption.id) && <Check size={18} />}
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className='bg-gray-800 bg-opacity-60 backdrop-blur-md p-6 rounded-xl border border-gray-700'>
//               <div className='flex items-center mb-4'>
//                 <Clock className='text-blue-400 mr-2' size={20} />
//                 <h3 className='text-lg font-medium text-white'>Select Time</h3>
//               </div>
              
//               <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
//                 <div>
//                   <label className='block text-sm font-medium text-gray-300 mb-1'>Date</label>
//                   <input
//                     type="date"
//                     value={date}
//                     onChange={(e) => setDate(e.target.value)}
//                     className='w-full bg-gray-700 border border-gray-600 rounded-lg p-2 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent'
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label className='block text-sm font-medium text-gray-300 mb-1'>Time</label>
//                   <input
//                     type="time"
//                     value={time}
//                     onChange={(e) => setTime(e.target.value)}
//                     className='w-full bg-gray-700 border border-gray-600 rounded-lg p-2 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent'
//                     required
//                   />
//                 </div>
//                 <div className='md:col-span-2'>
//                   <label className='block text-sm font-medium text-gray-300 mb-1'>Duration (minutes)</label>
//                   <select
//                     value={duration}
//                     onChange={(e) => setDuration(e.target.value)}
//                     className='w-full bg-gray-700 border border-gray-600 rounded-lg p-2 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent'
//                     required
//                   >
//                     <option value="30">30 minutes</option>
//                     <option value="60">1 hour</option>
//                     <option value="90">1 hour 30 minutes</option>
//                     <option value="120">2 hours</option>
//                     <option value="180">3 hours</option>
//                   </select>
//                 </div>
//               </div>
//             </div>

//             <div className='flex justify-end'>
//               <button
//                 type='submit'
//                 disabled={!subject || students.length === 0 || !time || !date || isSubmitting}
//                 className={`px-6 py-3 rounded-lg transition-all ${
//                   !subject || students.length === 0 || !time || !date || isSubmitting
//                     ? 'bg-gray-600 text-gray-300 cursor-not-allowed'
//                     : 'bg-blue-600 text-white hover:bg-blue-500'
//                 }`}
//               >
//                 {isSubmitting ? 'Scheduling...' : 'Schedule Exam'}
//               </button>
//             </div>
//           </form>
//         )}
//       </motion.div>
//     </div>
//   );
// };

// export default SchedulePage;

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check, Clock, BookOpen, Users } from 'lucide-react';
import Header from '../Components/common/Header';
import axios from 'axios';

const SchedulePage = () => {
  const [subject, setSubject] = useState('');
  const [students, setStudents] = useState([]);
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');
  const [duration, setDuration] = useState('60');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [mstudents, setMStudents] = useState([]);

  const subjectOptions = [
    { id: 1, name: 'Mathematics' },
    { id: 2, name: 'Physics' },
    { id: 3, name: 'Chemistry' },
    { id: 4, name: 'Biology' },
    { id: 5, name: 'Computer Science' },
    { id: 6, name: 'English' },
  ];

  const defaultStudents = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Mike Johnson' },
    { id: 4, name: 'Sarah Williams' },
    { id: 5, name: 'Alex Brown' },
  ];

  // Fetch student data from the backend
  const fetchUserProfile = async () => {
    try {
      const response = await axios.get('http://localhost:4000/user/profile');
      const studentData = response.data.map((student, index) => ({
        id: student._id || index + 1, // Use _id if available, else fallback to index
        name: student.fullname || `Student ${index + 1}`, // Fallback if name is missing
      }));
      setMStudents(studentData); // Update state with fetched students
    } catch (err) {
      console.error('Error fetching student data:', err);
      // Fallback to default students if the API call fails
      setMStudents(defaultStudents);
    }
  };

  useEffect(() => {
    fetchUserProfile(); // Fetch data when the component mounts
  }, []);

  // Combine fetched students with default students
  const studentOptions = mstudents.length > 0 ? mstudents : defaultStudents;

  const handleStudentToggle = (studentId) => {
    if (students.includes(studentId)) {
      setStudents(students.filter((id) => id !== studentId));
    } else {
      setStudents([...students, studentId]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Map subject ID to subject name
    const selectedSubject = subjectOptions.find((option) => option.id === subject)?.name;

    // Map student IDs to student names
    const selectedStudents = students.map((studentId) => {
      return studentOptions.find((option) => option.id === studentId)?.name;
    });

    const examData = {
      subject: selectedSubject,
      students: selectedStudents,
      time,
      date,
      duration: `${duration} minutes`,
    };

    try {
      console.log('Exam Data:', examData);
      const response = await axios.post('http://localhost:5000/add', examData);
      console.log('Success:', response.data);
      setShowConfirmation(true);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setSubject('');
    setStudents([]);
    setTime('');
    setDate('');
    setDuration('60');
    setShowConfirmation(false);
  };

  return (
    <div className='flex-1 overflow-auto bg-blue-300 relative z-10'>
      <Header title='Schedule Exam' />

      <motion.div
        className='max-w-4xl mx-auto py-6 px-4 lg:px-8'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {showConfirmation ? (
          <div className='bg-gray-800 bg-opacity-60 backdrop-blur-md p-8 rounded-xl border border-green-500 text-center'>
            <div className='w-16 h-16 bg-green-500 rounded-full mx-auto flex items-center justify-center mb-4'>
              <Check size={32} />
            </div>
            <h2 className='text-2xl font-bold text-white mb-2'>Exam Scheduled Successfully!</h2>
            <p className='text-gray-300 mb-6'>
              Your exam has been scheduled and notifications will be sent to all selected students.
            </p>
            <button
              onClick={resetForm}
              className='px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors'
            >
              Schedule Another Exam
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className='space-y-6'>
            <div className='bg-gray-800 bg-opacity-60 backdrop-blur-md p-6 rounded-xl border border-gray-700'>
              <div className='flex items-center mb-4'>
                <BookOpen className='text-blue-400 mr-2' size={20} />
                <h3 className='text-lg font-medium text-white'>Select Subject</h3>
              </div>

              <div className='grid grid-cols-2 md:grid-cols-3 gap-3'>
                {subjectOptions.map((subjectOption) => (
                  <div
                    key={subjectOption.id}
                    onClick={() => setSubject(subjectOption.id)}
                    className={`p-4 rounded-lg cursor-pointer transition-all ${
                      subject === subjectOption.id
                        ? 'bg-blue-600 text-white border-2 border-blue-400'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                  >
                    {subjectOption.name}
                  </div>
                ))}
              </div>
            </div>

            <div className='bg-gray-800 bg-opacity-60 backdrop-blur-md p-6 rounded-xl border border-gray-700'>
              <div className='flex items-center mb-4'>
                <Users className='text-blue-400 mr-2' size={20} />
                <h3 className='text-lg font-medium text-white'>Select Students</h3>
              </div>

              <div className='space-y-2 max-h-60 overflow-y-auto'>
                {studentOptions.map((studentOption) => (
                  <div
                    key={studentOption.id}
                    onClick={() => handleStudentToggle(studentOption.id)}
                    className={`p-4 rounded-lg cursor-pointer transition-all flex justify-between items-center ${
                      students.includes(studentOption.id)
                        ? 'bg-blue-600 text-white border border-blue-400'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                  >
                    <span>{studentOption.name}</span>
                    {students.includes(studentOption.id) && <Check size={18} />}
                  </div>
                ))}
              </div>
            </div>

            <div className='bg-gray-800 bg-opacity-60 backdrop-blur-md p-6 rounded-xl border border-gray-700'>
              <div className='flex items-center mb-4'>
                <Clock className='text-blue-400 mr-2' size={20} />
                <h3 className='text-lg font-medium text-white'>Select Time</h3>
              </div>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div>
                  <label className='block text-sm font-medium text-gray-300 mb-1'>Date</label>
                  <input
                    type='date'
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className='w-full bg-gray-700 border border-gray-600 rounded-lg p-2 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                    required
                  />
                </div>
                <div>
                  <label className='block text-sm font-medium text-gray-300 mb-1'>Time</label>
                  <input
                    type='time'
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className='w-full bg-gray-700 border border-gray-600 rounded-lg p-2 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                    required
                  />
                </div>
                <div className='md:col-span-2'>
                  <label className='block text-sm font-medium text-gray-300 mb-1'>Duration (minutes)</label>
                  <select
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    className='w-full bg-gray-700 border border-gray-600 rounded-lg p-2 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                    required
                  >
                    <option value='30'>30 minutes</option>
                    <option value='60'>1 hour</option>
                    <option value='90'>1 hour 30 minutes</option>
                    <option value='120'>2 hours</option>
                    <option value='180'>3 hours</option>
                  </select>
                </div>
              </div>
            </div>

            <div className='flex justify-end'>
              <button
                type='submit'
                disabled={!subject || students.length === 0 || !time || !date || isSubmitting}
                className={`px-6 py-3 rounded-lg transition-all ${
                  !subject || students.length === 0 || !time || !date || isSubmitting
                    ? 'bg-gray-600 text-gray-300 cursor-not-allowed'
                    : 'bg-blue-600 text-white hover:bg-blue-500'
                }`}
              >
                {isSubmitting ? 'Scheduling...' : 'Schedule Exam'}
              </button>
            </div>
          </form>
        )}
      </motion.div>
    </div>
  );
};

export default SchedulePage;