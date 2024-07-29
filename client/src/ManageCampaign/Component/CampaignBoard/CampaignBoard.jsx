import React, { useState } from 'react';
import { CampaignCard, CampaignCard2 } from './ManageCard';
import FilterListIcon from '@mui/icons-material/FilterList';
import { Link } from 'react-router-dom';
import CampaignFilterOptions from './CampaignFilterOptions';

const CampaignBoard = () => {
  const activeCampaigns = [
    { content: '1 x Story', datePosted: 'Wed, 06 Jun 2024', platform: 'Instagram', location: 'Delhi, India' },
    { content: '2 x Story', datePosted: 'Thu, 07 Jun 2024', platform: 'Instagram', location: 'Pune, India' },
    { content: '3 x Story', datePosted: 'Fri, 08 Jun 2024', platform: 'Instagram', location: 'Delhi, India' },
    { content: '4 x Story', datePosted: 'Sat, 09 Jun 2024', platform: 'Instagram', location: 'Delhi, India' },
  ];

  const savedCampaigns = [
    { content: '1 x Story', datePosted: 'Wed, 06 Jun 2024', platform: 'Instagram', location: 'Delhi, India' },
    { content: '2 x Story', datePosted: 'Thu, 07 Jun 2024', platform: 'Instagram', location: 'Pune, India' },
  ];

  const pastCampaigns = [
    { content1: '1 x Story', datePosted1: 'Wed, 06 Jun 2024', platform1: 'Instagram', location1: 'Delhi, India' },
    { content1: '2 x Story', datePosted1: 'Thu, 07 Jun 2024', platform1: 'Instagram', location1: 'Pune, India' },
    { content1: '3 x Story', datePosted1: 'Fri, 08 Jun 2024', platform1: 'Instagram', location1: 'Delhi, India' },
    { content1: '4 x Story', datePosted1: 'Sat, 09 Jun 2024', platform1: 'Instagram', location1: 'Delhi, India' },
  ];

  const [isModalVisible, setIsModalVisible] = useState(false);
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <div className="container mt-[40px] relative">
      <div className="relative bg-white rounded-lg p-4 mb-8">
        <div className="flex items-center justify-between">
          <div className="text-sm font-bold pl-3 text-blue-700">Manage Campaign</div>
          <div className="flex space-x-4 relative">
            <button 
              onClick={toggleModal} 
              className="flex items-center text-sm space-x-2 bg-white border border-gray-800 text-gray-800 px-4 py-2 rounded-md"
            >
              <FilterListIcon className="mr-2" /> Filters
            </button>
            {isModalVisible && (
              <div className="absolute top-full right-40 mt-4 z-50">
                <CampaignFilterOptions 
                  isModalVisible={isModalVisible} 
                  setIsModalVisible={setIsModalVisible} 
                />
              </div>
            )}
            <Link to={"/AddCampaign"}>
              <button className="flex items-center text-sm space-x-2 bg-purple-500 bg-gradient-to-r from-blue-600 to-pink-600 text-white px-4 py-2 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 3a1 1 0 0 1 1 1v4h4a1 1 0 0 1 0 2h-4v4a1 1 0 1 1-2 0v-4H5a1 1 0 1 1 0-2h4V4a1 1 0 0 1 1-1z" />
                </svg>
                <span>Add Campaign</span>
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div>
        <div className='flex justify-between items-center mb-2 mr-10'>
          <h2 className="text-[18px] font-semibold ml-2 mb-2">Active Campaigns</h2>
          <a href="#" className='font-semibold text-blue-700'>view all</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-4 mb-8">
          {activeCampaigns.map((campaign, index) => (
            <CampaignCard key={index} status="active" {...campaign} />
          ))}
        </div>
      </div>

      <div>
        <div className='flex justify-between items-center mb-2 mr-10'>
          <h2 className="text-[18px] font-semibold ml-2 mb-2">Saved Campaigns</h2>
          <a href="#" className='font-semibold text-blue-700'>view all</a>
        </div>
        <div className="grid grid-cols-4 mb-8">
          {savedCampaigns.map((campaign, index) => (
            <CampaignCard key={index} status="saved" {...campaign} />
          ))}
        </div>
      </div>

      <div>
        <div className='flex justify-between items-center mb-2 mr-10'>
          <h2 className="text-[18px] font-semibold ml-2 mb-2">Past Campaigns</h2>
          <a href="#" className='font-semibold text-blue-700'>view all</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 flex space-x-1">
          {pastCampaigns.map((campaign, index) => (
            <CampaignCard2 key={index} status1="past" {...campaign} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CampaignBoard;
