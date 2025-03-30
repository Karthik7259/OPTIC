import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { User } from 'lucide-react'; // Assuming you're using Lucide React icons
import SettingSection from './SettingSection'; // Assuming you have a SettingSection component
import Admin from '../../../../Backend/AuraAi/src/context/AdminContext'

const Profile = () => {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  console.log(Admin)

  // Fetch profile data when the component mounts
  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/admin/profile");
        console.log(response.data.Admin.email); // Logs the actual profile data
        setProfileData(response.data.Admin); // Store the profile data in state
		
      } catch (err) {
        console.error("Error fetching profile data:", err);
        setError(err.message || "An error occurred while fetching profile data.");
      } finally {
        setLoading(false); // Set loading to false after the request completes
      }
    };

    fetchProfileData();
  }, []); // Empty dependency array ensures this runs only once on mount

  if (loading) {
    return <div>Loading profile data...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <SettingSection icon={User} title={"Profile"}>
      <div className='flex flex-col sm:flex-row items-center mb-6'>
        <img
          src={profileData?.profilePicture || ''} // Use profile picture URL from fetched data
          alt='Profile'
          className='rounded-full w-20 h-20 object-cover mr-4'
        />

        <div>
          <h3 className='text-lg font-semibold text-gray-100'>
            {profileData?.fullname || 'Admin123'}
  {/* Fallback to default if no data */}
          </h3>
          <p className='text-gray-400'>
            {profileData?.email || 'Admin@Aura.com'} {/* Fallback to default if no data */}
          </p>
        </div>
      </div>

      <button className='bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-200 w-full sm:w-auto'>
        Edit Profile
      </button>
    </SettingSection>
  );
};

export default Profile;