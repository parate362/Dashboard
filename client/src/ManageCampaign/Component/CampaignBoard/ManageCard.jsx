import React from 'react';

import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircleCheckBig } from 'lucide-react';
import { Link } from 'react-router-dom';


export const CampaignCard = ({ status , content, datePosted, platform, location }) => {
  const borderColor1 = status === 'active' ? 'border-green-400' :  'border-gray-500' ;

  return (
    
    <div className={`border ${borderColor1} rounded-lg p-2 m-2 w-[270px] h-[320px] bg-white`}>
    <table className="w-full h-full">
      <thead>
        <tr className="flex justify-between p-2">
          <th className="text-md mr-3 font-bold">Campaign Name</th>
          <th className="text-gray-500 mr-4">
            <MoreVertIcon />
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="flex p-2 mt-4 mb-1">
          <td className="text-xs w-[69px] text-gray-500 mr-8">Content</td>
          <td className="inline-block border border-green-400 text-green-400 rounded-full px-2 py-1 text-xs font-semibold">{content}</td>
        </tr>
        <tr className="flex p-2 mb-1">
          <td className="text-xs w-[72px] text-gray-500 mr-8">Date Posted</td>
          <td className="text-sm font-semibold">{datePosted}</td>
        </tr>
        <tr className="flex p-2 mb-1">
          <td className="text-xs w-[69px] text-gray-500 mr-8">Platform</td>
          <td className="text-sm font-semibold">{platform}</td>
        </tr>
        <tr className="flex p-2 mb-1">
          <td className="text-xs w-[69px] text-gray-500 mr-8">Location</td>
          <td className="text-sm font-semibold">{location}</td>
        </tr>
        <tr className="flex justify-center">
          <td colSpan="2" className="text-center">
            
            <Link to={"/ActiveCampaign"}>
            <button className="mt-5 bg-blue-700 hover:bg-blue-800 text-white px-14 py-2.5 text-center mb-2 rounded text-sm">
              View Campaign
            </button>
            </Link>
            
          
          
          </td>
        </tr>
      </tbody>
    </table>
  </div>


   
    
  );
};

export const CampaignCard2 = ({ status1 , content1, datePosted1, platform1, location1 }) => {
  const borderColor =  status1 === 'active' ? 'border-green-400' : ( status1  === 'saved' ? 'border-gray-300' : 'border-gray');

  return (
    
    <div className={`border ${borderColor} rounded-lg p-2 m-2 w-[270px] h-[320px] bg-white`}>
    <table className="w-full h-full">
      <thead>
        <tr className="flex justify-between p-2">
          <th className="text-md mr-3 font-bold">Campaign Name</th>
          <th className="text-gray-500 mr-4">
            <MoreVertIcon />
          </th>
          <th className="text-blue-700">
            <CircleCheckBig />
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="flex p-2 mt-4 mb-1">
          <td className="text-xs w-[69px] text-gray-500 mr-8">Content</td>
          <td className="inline-block border border-green-400 text-green-400 rounded-full px-2 py-1 text-xs font-semibold">{content1}</td>
        </tr>
        <tr className="flex p-2 mb-1">
          <td className="text-xs w-[72px] text-gray-500 mr-8">Date Posted</td>
          <td className="text-sm font-semibold">{datePosted1}</td>
        </tr>
        <tr className="flex p-2 mb-1">
          <td className="text-xs w-[69px] text-gray-500 mr-8">Platform</td>
          <td className="text-sm font-semibold">{platform1}</td>
        </tr>
        <tr className="flex p-2 mb-1">
          <td className="text-xs w-[69px] text-gray-500 mr-8">Location</td>
          <td className="text-sm font-semibold">{location1}</td>
        </tr>
        <tr className="flex justify-center">
          <td colSpan="2" className="text-center">
          <Link to={"/ActiveCampaign"}>
            <button className="mt-5 bg-blue-700 hover:bg-blue-800 text-white px-14 py-2.5 text-center mb-2 rounded text-sm">
              View Campaign
            </button>
            </Link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  



   
    
  );
};





