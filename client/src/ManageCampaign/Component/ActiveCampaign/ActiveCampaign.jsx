import React, { useContext, useState } from "react";
import { SlOptionsVertical } from "react-icons/sl";
import { FaArrowDown } from "react-icons/fa";
import { Mycontext } from "../../../utils/Context";
import { IoEyeOutline } from "react-icons/io5";
import { MdOutlineComment } from "react-icons/md";
import { MdIosShare } from "react-icons/md";
import { TfiVideoClapper } from "react-icons/tfi";
import { RiGalleryLine } from "react-icons/ri";
import { CiVideoOn } from "react-icons/ci";
import profileDemoPic from '../../../Assets/intersect.jpg'

const ActiveCampaign = () => {
  const contextState = useContext(Mycontext);
  const expanded = contextState.expanded;

  const [isModalVisible, setIsModalVisible] = useState(false);

    const [reelsCount, setReelsCount] = useState(1);
    const [imagesCount, setImagesCount] = useState(0);
    const [storiesCount, setStoriesCount] = useState(0);
  

    
 
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const ViewContentButton = ({ buttonIcons, buttonTexts, buttonStyle }) => {
    return (
      <button className="flex w-32 h-28 items-center justify-center text-white font-medium rounded-lg mx-2 mb-2 ">
       <span>{buttonIcons}</span> 
        <span>{buttonTexts}</span>
      </button>
    );
  };

  
  const influencerData = [
    { name: "Xyz", highestViews: 1000 },
    { name: "CarryMinati", highestViews: "1000" },
    { name: "Bold text column", highestViews: "Regular text column" },
    { name: "Bold text column", highestViews: "Regular text column" },
    { name: "Bold text column", highestViews: "Regular text column" },
    { name: "Bold text column", highestViews: "Regular text column" },
  ];

  const cardData = [
    { title: "Media Analyst", imgSrc: profileDemoPic },
    { title: "Media Analyst", imgSrc: profileDemoPic },
    { title: "Media Analyst", imgSrc: profileDemoPic },
    { title: "Media Analyst", imgSrc: profileDemoPic },
    { title: "Media Analyst", imgSrc: profileDemoPic },
    { title: "Media Analyst", imgSrc: profileDemoPic },
    { title: "Media Analyst", imgSrc: profileDemoPic },
    { title: "Media Analyst", imgSrc: profileDemoPic },
  ];
  const visibleCards = expanded ? cardData.slice(0, 6) : cardData;

  return (
   <div className={`flex relative top-20 ${
    !expanded
      ? "left-[100px] w-[calc(100%-110px)]"
      : "left-[350px] w-[calc(100%-360px)]"
  }  overflow-y-auto  bg-[#F5F5F5] space-y-4`}>
     <div className="w-full mt-[49px]">
      <div className="">
        <div className="h-[71.42px] pl-[31.4px] mr-10 bg-white flex items-center">
          <nav className="text-sm pt-[27.42] text-muted-foreground">
            <a href="#" className="hover:text-primary text-base font-normal mr-1">
              Manage Campaigns{" "}
            </a>
            &gt;&nbsp;
            <a href="#" className="hover:text-primary text-base font-normal mr-1">
              {" "}
              Active Campaigns{" "}
            </a>
            &gt;&nbsp;
            <span className="text-primary text-blue-500 text-base font-semibold">
              {" "}
              Campaign Name{" "}
            </span>
          </nav>
        </div>
      </div>

      <div className="grid grid-cols-1 mt-[29px] md:grid-cols-4 mr-10 gap-20 mb-8">
        <div
          className={`bg-card bg-white py-5 px-9  ${
            !expanded ? "w-full" : "w-[216px]"
          }  h-[150px] rounded-lg shadow`}
        >
          <div className="flex flex-col items-center">
            <img
              alt="heart-icon"
              src="https://openui.fly.dev/openui/24x24.svg?text=❤️"
              className="mb-2"
            />
            <span className="text-muted-foreground">Total Likes</span>
            <span className="font-bold text-2xl text-muted-foreground">
              200,000
            </span>
          </div>
        </div>
        <div
          className={`bg-card bg-white py-5 px-9  ${
            !expanded ? "w-full" : "w-[216px]"
          }  h-[150px] rounded-lg shadow`}
        >
          <div className="flex flex-col items-center">
            <IoEyeOutline className="text-green-500 size-6 mb-2" />
            <span className="text-muted-foreground">Total Views</span>
            <span className="font-bold text-2xl text-muted-foreground">
              200,000
            </span>
          </div>
        </div>
        <div
          className={`bg-card bg-white py-5 px-9  ${
            !expanded ? "w-full " : "w-[216px]"
          }  h-[150px] rounded-lg shadow`}
        >
          <div className="flex flex-col items-center">
            <MdOutlineComment className="text-orange-500 size-6 mb-2" />
            <span className="text-muted-foreground">Total Comment</span>
            <span className="font-bold text-2xl text-muted-foreground">
              200,000
            </span>
          </div>
        </div>
        <div
          className={`bg-card bg-white py-5 px-9  ${
            !expanded ? "w-full" : "w-[216px]"
          }  h-[150px] rounded-lg shadow`}
        >
          <div className="flex flex-col items-center">
            <MdIosShare className="text-blue-500 size-6 mb-2" />
            <span className="text-muted-foreground">Total Shares</span>
            <span className="font-bold text-2xl text-muted-foreground">
              200,000
            </span>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mt-[34px] pl-2 mr-10 mb-4">
        <h2 className="text-lg font-bold">Influencers List</h2>
        <a href="#" className="text-primary mr-2 hover:underline">
          View all
        </a>
      </div>

      <div
        className={`grid grid-cols-1 mt-[20px] w-full h-[151px] ${
          expanded
            ? "grid-cols-3 gap-y-[15px] gap-x-[75px]"
            : "grid-cols-4  gap-y-[15px]"
        } mb-8`}
      >
        {visibleCards.map((card, index) => (
          <div
            key={index}
            className="flex items-center bg-white w-[305px] h-[68px] pl-2.5 bg-card rounded-lg shadow"
          >
            <div className="flex-1 flex items-center p-1.5 w-[127px] h-[36px]">
              <img
                className="w-6 h-6 rounded-full mr-3"
                src={card.imgSrc}
                alt={card.title}
              />
              <span className="text-xs font-normal mr-[20px]">
                {card.title}
              </span>
            </div>
           <button
  onClick={toggleModal}
  className="block text-white bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gradient-to-br dark:from-[#1E3BDD] dark:to-[#1D9ED5] mr-3.5  "
  type="button"
>
  View Content
</button>
          </div>
        ))}
      </div>

      <div
        className={`grid grid-cols-1 mt-[56px] md:grid-cols-3 mr-10  gap-y-[15px] gap-x-[71px]`}
      >
        <div className="bg-card bg-white w-full h-[246px] rounded-lg shadow">
          <table className="table-auto w-full text-left">
            <thead className="justify-center items-center">
              <tr className="border-b">
                <th className="w-[123.75px] h-[34.53px] bg-[#0070FF] rounded-tl-lg pl-[18.83px]">
                  <span className="w-[98.7px] h-[15px] text-[9.75px] text-white font-bold">
                    Influencer's Name{" "}
                    <FaArrowDown className="inline-block size-2" />
                  </span>
                </th>
                <th className="w-[123.75px] h-[34.53px] bg-[#0070FF] pl-[18.83px]">
                  <span className="w-[98.7px] h-[15px] text-[9.75px] text-white font-bold">
                    Highest Views{" "}
                    <FaArrowDown className="inline-block size-2" />
                  </span>
                </th>
                <th className="w-[58.60px] h-[34.53px] bg-[#0070FF] rounded-tr-lg text-[9.75px] font-bold"></th>
              </tr>
            </thead>
            <tbody>
              {influencerData.map((influencer, index) => (
                <tr className="border-b text-left" key={index}>
                  <td className="pl-[18.83px] font-bold w-[123.75px] h-[34.83px] text-[10.99px] leading-[15.7px]">
                    {influencer.name}
                  </td>
                  <td className="pl-[18.83px] text-[10.99px] font-normal w-[123.75px] h-[34.83px]">
                    {influencer.highestViews}
                  </td>
                  <td className="pl-[18.83px] text-[10.99px] font-normal w-[58.6px] h-[34.83px] text-center">
                    <SlOptionsVertical className="text-gray-500 mx-auto" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-card bg-white w-full h-[246px] rounded-lg shadow">
          <table className="table-auto w-full text-left">
            <thead className="justify-center items-center">
              <tr className="border-b">
                <th className="w-[123.75px] h-[34.53px] bg-[#0070FF] rounded-tl-lg pl-[18.83px]">
                  <span className="w-[98.7px] h-[15px] text-[9.75px] text-white font-bold">
                    Influencer's Name{" "}
                    <FaArrowDown className="inline-block size-2" />
                  </span>
                </th>
                <th className="w-[123.75px] h-[34.53px] bg-[#0070FF] pl-[18.83px]">
                  <span className="w-[98.7px] h-[15px] text-[9.75px] text-white font-bold">
                    Highest Views{" "}
                    <FaArrowDown className="inline-block size-2" />
                  </span>
                </th>
                <th className="w-[58.60px] h-[34.53px] bg-[#0070FF] rounded-tr-lg text-[9.75px] font-bold"></th>
              </tr>
            </thead>
            <tbody>
              {influencerData.map((influencer, index) => (
                <tr className="border-b text-left" key={index}>
                  <td className="pl-[18.83px] font-bold w-[123.75px] h-[34.83px] text-[10.99px] leading-[15.7px]">
                    {influencer.name}
                  </td>
                  <td className="pl-[18.83px] text-[10.99px] font-normal w-[123.75px] h-[34.83px]">
                    {influencer.highestViews}
                  </td>
                  <td className="pl-[18.83px] text-[10.99px] font-normal w-[58.6px] h-[34.83px] text-center">
                    <SlOptionsVertical className="text-gray-500 mx-auto" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-card bg-white w-full h-[246px] rounded-lg shadow">
          <table className="table-auto w-full text-left">
            <thead className="justify-center items-center">
              <tr className="border-b">
                <th className="w-[123.75px] h-[34.53px] bg-[#0070FF] rounded-tl-lg pl-[18.83px]">
                  <span className="w-[98.7px] h-[15px] text-[9.75px] text-white font-bold">
                    Influencer's Name{" "}
                    <FaArrowDown className="inline-block size-2" />
                  </span>
                </th>
                <th className="w-[123.75px] h-[34.53px] bg-[#0070FF] pl-[18.83px]">
                  <span className="w-[98.7px] h-[15px] text-[9.75px] text-white font-bold">
                    Highest Views{" "}
                    <FaArrowDown className="inline-block size-2" />
                  </span>
                </th>
                <th className="w-[58.60px] h-[34.53px] bg-[#0070FF] rounded-tr-lg text-[9.75px] font-bold"></th>
              </tr>
            </thead>
            <tbody>
              {influencerData.map((influencer, index) => (
                <tr className="border-b text-left" key={index}>
                  <td className="pl-[18.83px] font-bold w-[123.75px] h-[34.83px] text-[10.99px] leading-[15.7px]">
                    {influencer.name}
                  </td>
                  <td className="pl-[18.83px] text-[10.99px] font-normal w-[123.75px] h-[34.83px]">
                    {influencer.highestViews}
                  </td>
                  <td className="pl-[18.83px] text-[10.99px] font-normal w-[58.6px] h-[34.83px] text-center">
                    <SlOptionsVertical className="text-gray-500 mx-auto" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {isModalVisible && (
      <div
        id="popup-modal"
        className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-gray-500 bg-opacity-50"
        tabIndex="-1"
      >
        <div className="relative p-4 max-w-md max-h-full">
          <div className="relative w-[514px] bg-white space-y-4 p-8 rounded-lg shadow dark:bg-white">
            <button
              type="button"
              className="absolute top-3 right-3 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={toggleModal}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>

            <h1 className="font-bold text-xl font-body">View Content</h1>
            <div className="pt-3 flex justify-center">
             <div  className={`${reelsCount >= 1 ? "bg-[#3F59FF]": "bg-[#C5CDFF]"} mr-2 rounded-lg`}>
             <ViewContentButton
             
             buttonIcons={<TfiVideoClapper size={22} />}
             buttonTexts={`${reelsCount} x Reels`}
             // buttonStyle={buttonStyle(reelsCount)}
            
           />
             </div>

              <div  className={`${storiesCount >= 1 ? "bg-[#3F59FF]": "bg-[#C5CDFF]"}  mr-2 rounded-lg`}>
              <ViewContentButton
            
            buttonIcons={<RiGalleryLine size={22} />}
            buttonTexts={`${imagesCount} x Image`}
            // buttonStyle={buttonStyle(imagesCount)}
           
          />
              </div>

             <div className={`${imagesCount >= 1 ? "bg-[#3F59FF]": "bg-[#C5CDFF]"}  mr-2 rounded-lg`}>

             <ViewContentButton
                buttonIcons={<CiVideoOn size={22} />}
                buttonTexts={`${storiesCount} x Story`}
                
              />
             </div>
            </div>
            <div className="space-y-4">
              <div className="flex gap-5">
                <span>Campaign Name</span>
                <span className="font-bold">ABC</span>
              </div>
              <div className="flex gap-5">
                <span>Platform</span>
                <span className="font-bold">Instagram</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )}

    </div>
   </div>
  );
};

export default ActiveCampaign;
